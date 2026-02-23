import { useState, useCallback, useRef, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import styles from './Gallery.module.scss'

type Section = 'акварель' | 'масло'

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')

const AKVAREL_FILES = [
  'a1.jpg', 'a2.jpeg', 'a3.jpeg', 'a4.jpeg', 'a5.jpeg', 'a6.jpeg', 'a7.jpeg', 'a8.jpeg', 'a9.jpeg',
  'a10.jpeg', 'a11.webp', 'a12.webp', 'a13.jpeg', 'a14.webp', 'a15.jpeg', 'a16.webp', 'a17.webp', 'a18.webp', 'a19.jpeg',
  'a20.webp', 'a21.jpeg', 'a22.webp', 'a23.jpeg', 'a24.jpeg', 'a25.webp', 'a26.webp', 'a27.jpg', 'a28.webp', 'a29.jpeg',
  'a30.webp', 'a31.jpeg', 'a32.webp', 'a33.webp', 'a34.jpeg', 'a35.webp', 'a36.jpeg',
]

// Акварель — все 36 фото из assets/akvarel_files
const AKVAREL_IMAGES = AKVAREL_FILES.map((name) => `${BASE}assets/akvarel_files/${name}`)

// Масло — assets/gallary
const GALLARY_IMAGES = [
  `${BASE}assets/gallary/pic1.webp`,
  `${BASE}assets/gallary/pic2.webp`,
  `${BASE}assets/gallary/pic3.webp`,
  `${BASE}assets/gallary/pic4.webp`,
  `${BASE}assets/gallary/pic5.webp`,
  `${BASE}assets/gallary/pic6.webp`,
]

const SECTION_MAP: Record<string, Section> = {
  akvarel: 'акварель',
  maslo: 'масло',
}

// Загрузка изображения только когда карточка попадает в зону видимости (не полагаемся на большой порог loading="lazy")
function LazyGalleryCard({
  src,
  alt,
  onLoad,
  isLoaded,
  onClick,
  ariaLabel,
}: {
  src: string
  alt: string
  onLoad: (src: string) => void
  isLoaded: boolean
  onClick: () => void
  ariaLabel: string
} & { key?: string }) {
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
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span ref={wrapperRef} className={styles.cardInner}>
        <span
          className={[styles.skeleton, isLoaded && styles.skeletonHidden].filter(Boolean).join(' ')}
          aria-hidden
        />
        <img
          src={inView ? src : undefined}
          alt={alt}
          decoding="async"
          className={isLoaded ? styles.cardImgLoaded : ''}
          onLoad={inView ? () => onLoad(src) : undefined}
        />
      </span>
    </button>
  )
}

export default function Gallery() {
  const { section: sectionParam } = useParams<{ section: string }>()
  const section: Section = sectionParam && SECTION_MAP[sectionParam] ? SECTION_MAP[sectionParam] : 'акварель'
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set())

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src))
  }, [])

  if (sectionParam && !SECTION_MAP[sectionParam]) {
    return <Navigate to="/gallery/akvarel" replace />
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Галерея</h1>
        <p className={styles.subtitle}>
          Акварель и масло — две грани творчества
        </p>
        <nav className={styles.tabs} role="tablist">
          <span
            className={[styles.tabSlider, section === 'масло' && styles.tabSliderRight].filter(Boolean).join(' ')}
            aria-hidden
          />
          <Link
            to="/gallery/akvarel"
            role="tab"
            aria-selected={section === 'акварель'}
            aria-controls="акварель"
            id="tab-акварель"
            className={[styles.tab, section === 'акварель' && styles.tabActive].filter(Boolean).join(' ')}
          >
            Акварель
          </Link>
          <Link
            to="/gallery/maslo"
            role="tab"
            aria-selected={section === 'масло'}
            aria-controls="масло"
            id="tab-масло"
            className={[styles.tab, section === 'масло' && styles.tabActive].filter(Boolean).join(' ')}
          >
            Масло
          </Link>
        </nav>
      </header>

      <section
        id="акварель"
        role="tabpanel"
        aria-labelledby="tab-акварель"
        hidden={section !== 'акварель'}
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>Акварель</h2>
        <p className={styles.sectionDesc}>
          Здесь размещены работы в технике акварели. Свет и прозрачность — отличительные черты этого раздела.
        </p>
        <div className={styles.grid}>
          {AKVAREL_IMAGES.map((src, i) => (
            <LazyGalleryCard
              key={src}
              src={src}
              alt={`Акварель ${i + 1}`}
              onLoad={handleImageLoad}
              isLoaded={loadedImages.has(src)}
              onClick={() => setLightbox(src)}
              ariaLabel={`Работа ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section
        id="масло"
        role="tabpanel"
        aria-labelledby="tab-масло"
        hidden={section !== 'масло'}
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>Масло</h2>
        <p className={styles.sectionDesc}>
          Картины маслом — глубина цвета и фактура. В этом разделе собраны работы, написанные масляными красками.
        </p>
        <div className={styles.grid}>
          {GALLARY_IMAGES.map((src, i) => (
            <LazyGalleryCard
              key={src}
              src={src}
              alt={`Масло ${i + 1}`}
              onLoad={handleImageLoad}
              isLoaded={loadedImages.has(src)}
              onClick={() => setLightbox(src)}
              ariaLabel={`Работа ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Увеличить изображение"
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
            aria-label="Закрыть"
          >
            ×
          </button>
          <img src={lightbox} alt="" onClick={(e: React.MouseEvent) => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}
