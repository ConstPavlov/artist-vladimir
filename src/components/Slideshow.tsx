import { useCallback, useEffect, useState } from 'react'
import { startAmbientMusic } from '../lib/ambientMusic'
import styles from './Slideshow.module.scss'

export type SlideItem = {
  src: string
  caption: string
}

type SlideshowProps = {
  slides: SlideItem[]
  open: boolean
  startIndex?: number
  onClose: () => void
  music?: boolean
}

export function Slideshow({
  slides,
  open,
  startIndex = 0,
  onClose,
  music = true,
}: SlideshowProps) {
  const [index, setIndex] = useState(startIndex)
  const [paused, setPaused] = useState(false)
  const [musicOn, setMusicOn] = useState(music)

  useEffect(() => {
    if (open) {
      setIndex(startIndex)
      setPaused(false)
      setMusicOn(music)
    }
  }, [open, startIndex, music])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % Math.max(slides.length, 1))
  }, [slides.length])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % Math.max(slides.length, 1))
  }, [slides.length])

  useEffect(() => {
    if (!open || paused || slides.length < 2) return
    const t = window.setInterval(next, 4500)
    return () => window.clearInterval(t)
  }, [open, paused, next, slides.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === ' ') {
        e.preventDefault()
        setPaused((p) => !p)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, next, prev])

  useEffect(() => {
    if (!open || !musicOn) return
    const handle = startAmbientMusic()
    return () => handle.stop()
  }, [open, musicOn])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  if (!open || slides.length === 0) return null

  const slide = slides[index]

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Слайд-шоу">
      <div className={styles.stage}>
        {slides.map((item, i) => (
          <figure
            key={item.src}
            className={[
              styles.slide,
              i === index ? styles.slideActive : '',
              i % 2 === 0 ? styles.kenA : styles.kenB,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <img src={item.src} alt={item.caption} />
          </figure>
        ))}
        <p className={styles.caption}>{slide.caption}</p>
      </div>

      <div className={styles.bar}>
        <button type="button" onClick={prev} aria-label="Предыдущий кадр">
          ‹
        </button>
        <button type="button" onClick={() => setPaused((p) => !p)}>
          {paused ? 'Продолжить' : 'Пауза'}
        </button>
        <button type="button" onClick={() => setMusicOn((m) => !m)}>
          {musicOn ? 'Музыка выкл.' : 'Музыка вкл.'}
        </button>
        <span className={styles.counter}>
          {index + 1} / {slides.length}
        </span>
        <button type="button" onClick={next} aria-label="Следующий кадр">
          ›
        </button>
        <button type="button" className={styles.close} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  )
}
