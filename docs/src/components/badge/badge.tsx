import type { BadgeProps } from './badge.type'
import styles from './badge.module.css'

export default function Badge(props: BadgeProps) {
  if (props.const) {
    return <span className={styles.keyword}>const</span>
  }

  if (props.abstract) {
    return <span className={styles.keyword}>Abstract Class</span>
  }

  if (props.class) {
    return <span className={styles.keyword}>Class</span>
  }

  if (props.function) {
    return <span className={styles.keyword}>Function</span>
  }

  if (props.readonly) {
    return <span className={styles.keyword}>readonly</span>
  }

  return null
}
