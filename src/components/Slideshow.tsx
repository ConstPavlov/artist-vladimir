import { useCallback, useEffect, useRef, useState } from 'react'
import { SLIDESHOW_MUSIC_SRC } from '../data/media'
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
}: SlideshowProps) {
  const [index, setIndex] = useState(startIndex)
  const [paused, setPaused] = useState(false)
  const [musicOn, setMusicOn] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (open) {
      setIndex(startIndex)
      setPaused(false)
      setMusicOn(false)
    }
  }, [open, startIndex])

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

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(SLIDESHOW_MUSIC_SRC)

      audio.loop = true
      audio.volume = 0.55

      audioRef.current = audio
    }

    const audio = audioRef.current

    if (musicOn) {
      audio.pause()
      setMusicOn(false)
      return
    }

    void audio.play().then(() => {
      setMusicOn(true)
    }).catch((error) => {
      console.error('Не удалось запустить музыку:', error)
    })
  }, [musicOn])

  const togglePause = useCallback(() => {
    setPaused((p) => !p)
  }, [])

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!open) {
      audioRef.current?.pause()
      setMusicOn(false)
    }
  }, [open])

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
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Слайд-шоу"
    >
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
        <button
          type="button"
          onClick={prev}
          aria-label="Предыдущий кадр"
        >
          ‹
        </button>

        <button type="button" onClick={togglePause}>
          {paused ? 'Продолжить' : 'Пауза'}
        </button>

        <button type="button" onClick={toggleMusic}>
          {musicOn ? 'Музыка выкл.' : 'Музыка вкл.'}
        </button>

        <span className={styles.counter}>
          {index + 1} / {slides.length}
        </span>

        <button
          type="button"
          onClick={next}
          aria-label="Следующий кадр"
        >
          ›
        </button>

        <button
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  )
}