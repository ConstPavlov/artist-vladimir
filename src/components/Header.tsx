import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/about', label: 'О художнике' },
  { to: '/memory', label: 'В память' },
  { to: '/contacts', label: 'Контакты' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          Галерея
        </NavLink>
        <nav className={styles.nav}>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.linkActive : ''].filter(Boolean).join(' ')
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
