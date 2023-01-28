import { gettype } from './utils'

/**
 * The convert() method convert a string to a boolean.
 *
 * @param value - The string to convert.
 * @throws When the string cannot be converted to a boolean.
 * @returns The boolean representation of the string.
 */

export function convert(value: string): boolean {
  if (value === 'true') {
    return true
  } else if (value === 'false') {
    return false
  } else {
    throw new Error('Cannot convert to boolean')
  }
}

/**
 * The is() method determines whether the passed value is an Boolean.
 *
 * @param value The value to be checked.
 * @returns A boolean indicating whether the variable is a boolean.
 */

export function is(value: unknown): boolean {
  return gettype(value) === 'boolean'
}
