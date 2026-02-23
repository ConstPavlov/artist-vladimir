import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'

type LayoutProps = { children?: ReactNode }

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.bgBlobs} aria-hidden>
        <span className={styles.blob} />
        <span className={styles.blob} />
        <span className={styles.blob} />
        <span className={styles.blob} />
        <span className={styles.blob} />
      </div>
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
