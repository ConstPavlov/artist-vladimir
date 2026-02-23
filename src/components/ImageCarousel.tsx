import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './ImageCarousel.module.scss'

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')

const GALLERY_IMAGES = [
  `${BASE}assets/akvarel_files/a1.jpg`,
  `${BASE}assets/akvarel_files/a2.jpeg`,
  `${BASE}assets/akvarel_files/a3.jpeg`,
  `${BASE}assets/akvarel_files/a4.jpeg`,
  `${BASE}assets/akvarel_files/a5.jpeg`,
  `${BASE}assets/gallary/pic1.webp`,
  `${BASE}assets/gallary/pic2.webp`,
  `${BASE}assets/gallary/pic3.webp`,
  `${BASE}assets/gallary/pic4.webp`,
  `${BASE}assets/gallary/pic5.webp`,
  `${BASE}assets/gallary/pic6.webp`,
]

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

  // Автопрокрутка раз в 5 секунд
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
          {GALLERY_IMAGES.map((src, index) => (
            <div key={src} className={styles.item}>
              <div className={styles.slide}>
                <img
                  src={src}
                  alt={`Работа ${index + 1}`}
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
