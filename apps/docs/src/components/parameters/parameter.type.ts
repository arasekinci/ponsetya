import type { ReactNode } from 'react'

export interface ParameterProps {
  name: string
  description?: string
  type?: string
  optional?: boolean
  defaultValue?: ReactNode
}
