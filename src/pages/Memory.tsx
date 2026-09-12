import { useState, type MouseEvent } from 'react'
import { PhotoAlbum } from '../components/PhotoAlbum'
import { Slideshow } from '../components/Slideshow'
import { memoryPhotos, memoryVideos, publications } from '../data/media'
import styles from './Memory.module.scss'

export default function Memory() {
  const [show, setShow] = useState(false)
  const [scan, setScan] = useState<string | null>(null)

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>В память</h1>
        <p className={styles.subtitle}>Семейный альбом, выставка и публикации</p>
      </header>

      <section className={styles.block}>
        <div className={styles.blockHead}>
          <h2 className={styles.blockTitle}>Фотоальбом</h2>
          <button type="button" className={styles.showBtn} onClick={() => setShow(true)}>
            Слайд-шоу
          </button>
        </div>

        <p className={styles.lead}>
          Листайте страницы, как в бумажном альбоме, или запустите слайд-шоу с музыкой.
        </p>

        <PhotoAlbum photos={memoryPhotos} />
      </section>

      {memoryVideos.map((video) => (
        <section key={video.src} className={styles.block}>
          <h2 className={styles.blockTitle}>{video.title || 'Выставка'}</h2>

          <a
            href={video.src}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.video}
          >
            Смотреть видео
          </a>
        </section>
      ))}

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Публикации</h2>

        {publications.length === 0 ? (
          <p className={styles.lead}>
            Сканы газетных и журнальных публикаций появятся в этом разделе, когда их добавят к
            материалам сайта.
          </p>
        ) : (
          <div className={styles.scans}>
            {publications.map((item) => (
              <button
                key={item.src}
                type="button"
                className={styles.scan}
                onClick={() => setScan(item.src)}
              >
                <img src={item.src} alt={item.caption} />
                <span>{item.caption}</span>
              </button>
            ))}
          </div>
        )}
      </section>

      <Slideshow
        slides={memoryPhotos.map((p) => ({ src: p.src, caption: p.caption }))}
        open={show}
        onClose={() => setShow(false)}
        music
      />

      {scan && (
        <div
          className={styles.lightbox}
          onClick={() => setScan(null)}
          role="dialog"
          aria-modal
        >
          <img
            src={scan}
            alt=""
            onClick={(e: MouseEvent) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}