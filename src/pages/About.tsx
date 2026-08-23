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
            <p className={styles.subtitle}>Владимир Бакуменко</p>
          </header>
          <div className={styles.content}>
            <section className={styles.block}>
              <p className={styles.lead}>
                Владимир был добрым и весёлым человеком, любил людей и всё живое, будь то котёнок
                или посаженная им яблонька.
              </p>
              <p className={styles.text}>
                Рисовать картины Владимир любил рано утром — до начала рабочего дня, когда город
                ещё спал. Он был необычайно трудолюбив: за 4 последние года жизни создал около
                двух тысяч картин. Рисовал в основном акварелью, так как очень любил технику
                «акварель по-мокрой бумаге», в сочетании с графикой.
              </p>
              <p className={styles.text}>
                В период с 1992 по 1995 год в Москве прошло несколько выставок Бакуменко
                Владимира. Мир картин Владимира близок по духу к творчеству одного из его любимых
                писателей — Николая Гоголя. Этот мир бесконечно добрый, иногда печальный, но всегда
                прекрасный, мистический, часто со сказочными, весело и карикатурно утрированными
                персонажами. Картины «разлетелись» по всему белу свету…
              </p>
              <p className={styles.text}>
                В апреле 1994 года произошёл нелепый несчастный случай, который оборвал жизнь
                прекрасного художника в 41 год. Боль от трагедии постепенно ушла, но осталась
                светлая печаль и тот добрый, трогательный, немного наивный мир его Души, которым он
                стремился поделиться с нами…
              </p>
            </section>
            <aside className={styles.aside}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Галерея</h3>
                <p className={styles.cardText}>
                  Акварель, масло и графика — работы собраны по темам: зима, цветы, иллюстрации,
                  пейзаж и другие циклы.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
