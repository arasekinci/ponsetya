import type { ReactNode } from 'react'

export interface CodeProps {
  'data-language': string
  'data-theme': string
  children: ReactNode | ReactNode[]
}

export interface SpanProps {
  children: ReactNode
  style: {
    color: string
  }
  dangerouslySetInnerHTML: {
    __html: string
  }
}
