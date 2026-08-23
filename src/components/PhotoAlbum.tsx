import { useState } from 'react'
import type { MemoryPhoto } from '../data/media'
import styles from './PhotoAlbum.module.scss'

type PhotoAlbumProps = {
  photos: MemoryPhoto[]
}

export function PhotoAlbum({ photos }: PhotoAlbumProps) {
  const [index, setIndex] = useState(0)
  const [flipping, setFlipping] = useState<'next' | 'prev' | null>(null)

  if (photos.length === 0) return null

  const photo = photos[index]
  const nextPhoto = photos[(index + 1) % photos.length]
  const prevPhoto = photos[(index - 1 + photos.length) % photos.length]

  const go = (dir: 'next' | 'prev') => {
    if (flipping) return
    setFlipping(dir)
    window.setTimeout(() => {
      setIndex((i) =>
        dir === 'next' ? (i + 1) % photos.length : (i - 1 + photos.length) % photos.length
      )
      setFlipping(null)
    }, 520)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.book}>
        <div className={styles.spine} aria-hidden />
        <div className={[styles.page, styles.pageBack].join(' ')}>
          <img src={flipping === 'next' ? nextPhoto.src : prevPhoto.src} alt="" />
        </div>
        <div
          className={[
            styles.page,
            styles.pageFront,
            flipping === 'next' && styles.flipNext,
            flipping === 'prev' && styles.flipPrev,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <img src={photo.src} alt={photo.caption} />
          <p className={styles.caption}>{photo.caption}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={() => go('prev')} disabled={!!flipping}>
          ← Лист назад
        </button>
        <span>
          {index + 1} из {photos.length}
        </span>
        <button type="button" onClick={() => go('next')} disabled={!!flipping}>
          Лист вперёд →
        </button>
      </div>
    </div>
  )
}
