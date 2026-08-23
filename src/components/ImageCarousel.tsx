import { artworks } from '../data/media'
import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './ImageCarousel.module.scss'

const PREVIEW = artworks.filter((_, i) => i % 7 === 0).slice(0, 12)

export function ImageCarousel() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || !wrapRef.current) return
    const ro = new ResizeObserver(() => emblaApi.reInit())
    ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <button
        type="button"
        className={styles.prev}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Предыдущий слайд"
      >
        ‹
      </button>
      <button
        type="button"
        className={styles.next}
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Следующий слайд"
      >
        ›
      </button>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.content}>
          {PREVIEW.map((work) => (
            <div key={work.id} className={styles.item}>
              <div className={styles.slide}>
                <img
                  src={work.src}
                  alt={work.caption}
                  className={styles.slideImg}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
