import { Link } from 'react-router-dom'
import { FilmStrip } from '../components/FilmStrip'
import { ImageCarousel } from '../components/ImageCarousel'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <FilmStrip />
        <h1 className={styles.title}>Галерея художника</h1>
        <p className={styles.subtitle}>
          Владимир Бакуменко — работы, оставленные в память о таланте и душе
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
          <Link to="/gallery" className={styles.card}>
            <span className={styles.cardLabel}>Галерея</span>
            <p className={styles.cardDesc}>Картины по темам: зима, цветы, иллюстрации…</p>
          </Link>
          <Link to="/memory" className={styles.card}>
            <span className={styles.cardLabel}>В память</span>
            <p className={styles.cardDesc}>Фотоальбом, выставка и публикации</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
