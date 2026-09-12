import { FILM_STRIP_SRC, homeFilmPhotos } from '../data/media'
import styles from './FilmStrip.module.scss'

export function FilmStrip() {
  return (
    <div className={styles.wrap}>
      <div className={styles.film} role="img" aria-label="Фотоплёнка: три портрета художника">
        <img src={FILM_STRIP_SRC} alt="" className={styles.overlay} />
        <div className={styles.frames}>
          {homeFilmPhotos.map((photo) => (
            <figure key={photo.src} className={styles.frame}>
              <img src={photo.src} alt={photo.caption} />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
