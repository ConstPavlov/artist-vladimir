import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'

type LayoutProps = { children?: ReactNode }

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.paper} aria-hidden />
      <div className={styles.paperWash} aria-hidden />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
