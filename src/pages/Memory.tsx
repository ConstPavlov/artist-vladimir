import styles from './Memory.module.scss'

export default function Memory() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>В память</h1>
        <p className={styles.subtitle}>
          Светлая память о человеке и художнике
        </p>
      </header>
      <section className={styles.content}>
        <div className={styles.quote}>
          <blockquote>
            Искусство не уходит — оно остаётся с нами в каждой работе, в каждом взгляде на картину.
          </blockquote>
        </div>
        <p className={styles.text}>
          Эта страница посвящена памяти художника. Здесь можно разместить даты, фотографии, цитаты и воспоминания. Со временем сюда можно добавить анимации и интерактивные элементы.
        </p>
      </section>
    </div>
  )
}
