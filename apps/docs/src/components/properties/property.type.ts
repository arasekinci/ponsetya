export interface PropertyProps {
  name: string
  description?: string
  type?: string
  optional?: boolean
  readonly?: boolean
  static?: boolean
  defaultValue?: string | number | boolean | null
}
