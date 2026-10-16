import type { ReactNode } from 'react'

export interface DefinitionProps {
  term: string
  description?: string
  pathname?: string
  children?: ReactNode
}
