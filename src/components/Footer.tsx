import { Link } from 'react-router-dom'
import { TelegramIcon } from './TelegramIcon'
import styles from './Footer.module.scss'

const TELEGRAM_URL = 'https://t.me/ioannmadeincccp'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © {year} Память художника. Все права сохранены.
        </p>
        <nav className={styles.links}>
          <Link to="/">Главная</Link>
          <Link to="/gallery">Галерея</Link>
          <Link to="/about">О художнике</Link>
          <Link to="/memory">В память</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        <p className={styles.contacts}>
          <a href="mailto:ivanvladimirowich@yandex.ru" className={styles.contactLink}>
            ivanvladimirowich@yandex.ru
          </a>
          <span className={styles.contactsSep}> · </span>
          <a href="tel:+79096769495" className={styles.contactLink}>
            +7 (909) 676-9495
          </a>
          <span className={styles.contactsSep}> · </span>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLinkWithIcon}
            aria-label="Telegram"
          >
            <TelegramIcon size={16} />
          </a>
        </p>
      </div>
    </footer>
  )
}
