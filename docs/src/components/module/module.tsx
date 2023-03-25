import Link from 'next/link'

import type { ModuleProps } from './module.type'
import styles from './module.module.css'

export default function Module({ type, items }: ModuleProps) {
  const colors = {
    class: 'var(--shiki-token-function)',
    reference: 'var(--shiki-token-constant)',
    type: 'var(--shiki-token-keyword)',
    variable: 'var(--shiki-token-string)',
  }

  const letters = {
    class: 'C',
    reference: 'R',
    type: 'T',
    variable: 'V',
  }

  return (
    <div className={styles.items}>
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={styles.link}
          style={{ color: colors[type] }}
        >
          <span
            className={styles.icon}
            style={{ backgroundColor: colors[type] }}
          >
            {letters[type]}
          </span>
          {item.title}
        </Link>
      ))}
    </div>
  )
}
