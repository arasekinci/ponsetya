export type PrimitiveType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'undefined'
  | 'symbol'
  | 'null'

export type ObjectType = 'function' | 'object' | 'array' | 'regexp' | 'NaN'

export type Type = PrimitiveType | ObjectType
