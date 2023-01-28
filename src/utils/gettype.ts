export type PrimitiveType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'undefined'
  | 'symbol'
  | 'null'

export type ObjectType = 'function' | 'object'

export type Type =
  | PrimitiveType
  | ObjectType
  | 'array'
  | 'error'
  | 'regexp'
  | 'NaN'

/**
 * The gettype() method returns the type of variables.
 *
 * @param value - The value whose type is to be determined
 * @returns A string representing the type of the value
 */

export function gettype(value: unknown): Type {
  if (typeof value === 'number') {
    if (isNaN(value)) {
      return 'NaN'
    }

    return 'number'
  } else if (typeof value === 'string') {
    return 'string'
  } else if (typeof value === 'object') {
    if (value) {
      const name = Object.prototype.toString.call(value)

      switch (name) {
        case '[object Number]':
          return 'number'
        case '[object String]':
          return 'string'
        case '[object Array]':
          return 'array'
        case '[object RegExp]':
          return 'regexp'
        case '[object Error]':
          return 'error'
        default:
          return 'object'
      }
    } else {
      return 'null'
    }
  }

  return typeof value
}
