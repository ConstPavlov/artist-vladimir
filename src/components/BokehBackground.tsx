import { useId } from 'react'
import styles from './BokehBackground.module.scss'

const ORB_COUNT = 14

export function BokehBackground() {
  const id = useId()
  return (
    <div className={styles.wrap} aria-hidden>
      {Array.from({ length: ORB_COUNT }, (_, i) => (
        <div
          key={`${id}-${i}`}
          className={styles.orb}
          style={{
            ['--orb-x' as string]: `${5 + (i * 7) % 88}%`,
            ['--orb-y' as string]: `${5 + (i * 11) % 88}%`,
            ['--orb-size' as string]: `${100 + (i * 31) % 220}px`,
            ['--orb-duration' as string]: `${12 + (i * 2) % 8}s`,
            ['--orb-delay' as string]: `${-(i * 0.8)}s`,
          }}
        >
          <span className={styles.orbInner} />
        </div>
      ))}
    </div>
  )
}
