import { TelegramIcon } from '../components/TelegramIcon'
import styles from './Contacts.module.scss'

const TELEGRAM_URL = 'https://t.me/ioannmadeincccp'

export default function Contacts() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.subtitle}>
          Связь по вопросам работ и сотрудничества
        </p>
      </header>
      <section className={styles.section}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.label}>Email</span>
            <a href="mailto:ivanvladimirowich@yandex.ru" className={styles.link}>
              ivanvladimirowich@yandex.ru
            </a>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Телефон</span>
            <a href="tel:+79096769495" className={styles.link}>
              +7 (909) 676-9495
            </a>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Telegram</span>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkWithIcon}
              aria-label="Telegram: @ioannmadeincccp"
            >
              <TelegramIcon size={22} className={styles.telegramIcon} />
              @ioannmadeincccp
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
