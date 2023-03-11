export type ErrorNameType =
  | 'error Error'
  | 'error EvalError'
  | 'error RangeError'
  | 'error ReferenceError'
  | 'error SyntaxError'
  | 'error TypeError'
  | 'error URIError'

export type NameType =
  | ErrorNameType
  | 'integer Number'
  | 'integer BigInt'
  | 'string String'
  | string
