import { BokehBackground } from '../components/BokehBackground'
import styles from './About.module.scss'

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.bokehFullPage}>
        <BokehBackground />
      </div>
      <div className={styles.page}>
        <div className={styles.pageContent}>
          <header className={styles.header}>
            <h1 className={styles.title}>О художнике</h1>
            <p className={styles.subtitle}>
              Несколько слов об авторе работ
            </p>
          </header>
          <div className={styles.content}>
            <section className={styles.block}>
              <p className={styles.lead}>
                Этот сайт создан в память о художнике, <span className={styles.name}>Владимире Бакуменко</span>, чьи работы продолжают говорить с нами через краски и образы.
              </p>
              <p className={styles.text}>
                Здесь вы можете познакомиться с биографией и творческим путём автора. Раздел дополняется материалами и воспоминаниями.
              </p>
            </section>
            <aside className={styles.aside}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Галерея</h3>
                <p className={styles.cardText}>
                  Акварель и масло — два основных направления в творчестве. Перейдите в раздел галереи, чтобы увидеть работы.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
