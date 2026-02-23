import { Link } from 'react-router-dom'
import { ImageCarousel } from '../components/ImageCarousel'
import styles from './Home.module.scss'

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.authorPhotoWrap}>
          <span className={styles.chainClasp} aria-hidden />
          <svg
            className={styles.chainSvg}
            viewBox="0 0 200 220"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden
          >
            {/* Волнистая левая ветка: старт от основания кольца (y=0), вниз под кулон */}
            <path
              className={styles.chainPathLeft}
              d="M 100 0 Q 75 58 60 116 Q 42 170 22 218"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="4 6"
            />
            {/* Волнистая правая ветка — соединена с кольцом */}
            <path
              className={styles.chainPathRight}
              d="M 100 0 Q 125 58 140 116 Q 158 170 178 218"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="4 6"
            />
          </svg>
          <img
            src={`${BASE}assets/author-foto.jpg`}
            alt="Фото автора"
            className={styles.authorPhoto}
          />
        </div>
        <h1 className={styles.title}>Галерея художника</h1>
        <p className={styles.subtitle}>
          Работы, оставленные в память о таланте и душе
        </p>
        <div className={styles.cta}>
          <Link to="/gallery" className={styles.ctaPrimary}>
            В галерею
          </Link>
          <Link to="/about" className={styles.ctaSecondary}>
            О художнике
          </Link>
        </div>
      </section>
      <section className={`${styles.preview} ${styles.carouselSection}`}>
        <h2 className={styles.sectionTitle}>Работы</h2>
        <ImageCarousel />
      </section>
      <section className={styles.preview}>
        <h2 className={styles.sectionTitle}>Разделы</h2>
        <div className={styles.cards}>
          <Link to="/gallery/akvarel" className={styles.card}>
            <span className={styles.cardLabel}>Акварель</span>
            <p className={styles.cardDesc}>Лёгкость и прозрачность</p>
          </Link>
          <Link to="/gallery/maslo" className={styles.card}>
            <span className={styles.cardLabel}>Масло</span>
            <p className={styles.cardDesc}>Глубина и фактура</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
