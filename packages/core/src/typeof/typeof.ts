import type { Type } from './typeof.type'

/**
 * The typeOf() method returns the type of variables.
 *
 * @param value - The value whose type is to be determined.
 * @returns A string representing the type of the value.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/core/references/typeof | typeOf} for more information.
 */

export function typeOf(value: unknown): Type {
  if (typeof value === 'number' && isNaN(value)) {
    return 'NaN'
  } else if (value === null) {
    return 'null'
  } else if (value === undefined) {
    return 'undefined'
  }

  const name: string = Object.getPrototypeOf(value).constructor.name

  switch (name) {
    case 'String':
      return 'string'
    case 'Number':
      return 'number'
    case 'BigInt':
      return 'bigint'
    case 'Boolean':
      return 'boolean'
    case 'Symbol':
      return 'symbol'
    case 'Function':
      return 'function'
    case 'Array':
      return 'array'
    case 'RegExp':
      return 'regexp'
    default:
      return 'object'
  }
}
