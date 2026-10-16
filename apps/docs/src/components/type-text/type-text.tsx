import { Fragment, type ReactNode } from 'react'

const ANCHOR_LINK = /\[([^\]]+)\]\(#([^)]+)\)/g

/**
 * Turns `[Label](#anchor)` markdown links inside a type string into anchors.
 */
function linkify(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0

  for (const match of text.matchAll(ANCHOR_LINK)) {
    const index = match.index ?? 0

    if (index > last) {
      nodes.push(text.slice(last, index))
    }

    nodes.push(
      <a key={`${index}-${match[2]}`} href={`#${match[2]}`}>
        {match[1]}
      </a>,
    )
    last = index + match[0].length
  }

  if (last < text.length) {
    nodes.push(text.slice(last))
  }

  return nodes
}

export interface TypeTextProps {
  type: string
  separatorColor: string
}

/**
 * Renders a `A | B` union type, linking `[Label](#anchor)` entries.
 */
export function TypeText({ type, separatorColor }: TypeTextProps) {
  const parts = type.split('|').map((part) => part.trim())

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={part}>
          {index > 0 && <span style={{ color: separatorColor }}> | </span>}
          {linkify(part)}
        </Fragment>
      ))}
    </>
  )
}
