import type { NameType } from './getname.type'

/**
 * The getname() method returns the kind and type of variables.
 *
 * @param value - An expression representing the object whose kind is to be returned
 * @returns A String, specifying the specified data type
 */

export function getname(value: unknown): NameType {
  if (typeof value === 'number') {
    if (isNaN(value)) {
      return 'object NaN'
    }

    return 'integer Number'
  } else if (typeof value === 'bigint') {
    return 'integer BigInt'
  } else if (typeof value === 'string') {
    return 'string String'
  } else if (value === null) {
    return 'object Null'
  } else if (value === undefined) {
    return 'object Undefined'
  }

  const name: string = Object.getPrototypeOf(value).constructor.name

  switch (name) {
    case 'Error':
      return 'error Error'
    case 'EvalError':
      return 'error EvalError'
    case 'RangeError':
      return 'error RangeError'
    case 'ReferenceError':
      return 'error ReferenceError'
    case 'SyntaxError':
      return 'error SyntaxError'
    case 'TypeError':
      return 'error TypeError'
    case 'URIError':
      return 'error URIError'
    default:
      return `object ${name}`
  }
}
