import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from 'react'
import { useParams } from 'react-router-dom'
import { Slideshow } from '../components/Slideshow'
import { artworks, WORK_GROUPS, type Artwork } from '../data/media'
import styles from './Gallery.module.scss'

type TechniqueFilter = 'все' | 'акварель' | 'масло' | 'пастель'

function matchesTechnique(work: Artwork, filter: TechniqueFilter) {
  if (filter === 'все') return true
  if (filter === 'акварель') return work.technique.includes('акварель')
  if (filter === 'масло') return work.technique === 'масло'
  if (filter === 'пастель') return work.technique === 'пастель'
  return true
}

function LazyGalleryCard({
  work,
  onLoad,
  isLoaded,
  onClick,
}: {
  work: Artwork
  onLoad: (src: string) => void
  isLoaded: boolean
  onClick: () => void
  key?: string
}) {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { rootMargin: '150px', threshold: 0.01 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <button type="button" className={styles.card} onClick={onClick} aria-label={work.caption}>
      <span ref={wrapperRef} className={styles.cardInner}>
        <span
          className={[styles.skeleton, isLoaded && styles.skeletonHidden].filter(Boolean).join(' ')}
          aria-hidden
        />
        <img
          src={inView ? work.src : undefined}
          alt={work.title}
          decoding="async"
          className={isLoaded ? styles.cardImgLoaded : ''}
          onLoad={inView ? () => onLoad(work.src) : undefined}
        />
      </span>
      <span className={styles.caption}>{work.caption}</span>
    </button>
  )
}

export default function Gallery() {
  const { section: sectionParam } = useParams<{ section: string }>()
  const initialFilter: TechniqueFilter =
    sectionParam === 'maslo' ? 'масло' : sectionParam === 'akvarel' ? 'акварель' : 'все'

  const [technique, setTechnique] = useState<TechniqueFilter>(initialFilter)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [show, setShow] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set())

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src))
  }, [])

  const filtered = useMemo(
    () => artworks.filter((w) => matchesTechnique(w, technique)),
    [technique]
  )

  const grouped = useMemo(
    () =>
      WORK_GROUPS.map((group) => ({
        ...group,
        items: filtered.filter((w) => w.group === group.id),
      })).filter((g) => g.items.length > 0),
    [filtered]
  )

  const slides = filtered.map((w) => ({ src: w.src, caption: w.caption }))

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i === null ? i : (i + 1) % filtered.length))
      if (e.key === 'ArrowLeft')
        setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, filtered.length])

  const openWork = (work: Artwork) => {
    const i = filtered.findIndex((w) => w.id === work.id)
    setLightbox(i >= 0 ? i : 0)
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Галерея</h1>
        <p className={styles.subtitle}>
          Картины сгруппированы по темам. Подпись под работой — по названию файла.
        </p>
        <div className={styles.toolbar}>
          <nav className={styles.filters} aria-label="Техника">
            {(['все', 'акварель', 'масло', 'пастель'] as TechniqueFilter[]).map((item) => (
              <button
                key={item}
                type="button"
                className={[styles.filter, technique === item && styles.filterActive]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setTechnique(item)}
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
          <button type="button" className={styles.slideshowBtn} onClick={() => setShow(true)}>
            Слайд-шоу
          </button>
        </div>
      </header>

      {grouped.map((group) => (
        <section key={group.id} className={styles.section} id={group.id}>
          <h2 className={styles.sectionTitle}>{group.title}</h2>
          <p className={styles.sectionDesc}>{group.description}</p>
          <div className={styles.grid}>
            {group.items.map((work) => (
              <LazyGalleryCard
                key={work.id}
                work={work}
                onLoad={handleImageLoad}
                isLoaded={loadedImages.has(work.src)}
                onClick={() => openWork(work)}
              />
            ))}
          </div>
        </section>
      ))}

      {lightbox !== null && filtered[lightbox] && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр картины"
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
            aria-label="Закрыть"
          >
            ×
          </button>
          <button
            type="button"
            className={styles.lightboxNav}
            style={{ left: '1rem' }}
            onClick={(e: MouseEvent) => {
              e.stopPropagation()
              setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
            }}
            aria-label="Предыдущая"
          >
            ‹
          </button>
          <figure className={styles.lightboxFigure} onClick={(e: MouseEvent) => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title} />
            <figcaption>{filtered[lightbox].caption}</figcaption>
          </figure>
          <button
            type="button"
            className={styles.lightboxNav}
            style={{ right: '1rem' }}
            onClick={(e: MouseEvent) => {
              e.stopPropagation()
              setLightbox((i) => (i === null ? i : (i + 1) % filtered.length))
            }}
            aria-label="Следующая"
          >
            ›
          </button>
        </div>
      )}

      <Slideshow slides={slides} open={show} onClose={() => setShow(false)} music />
    </div>
  )
}
