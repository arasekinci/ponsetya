import { gettype } from './utils'

/**
 * The is() method determines whether the passed value is an Number.
 *
 * @param value The value to be checked.
 * @returns A boolean indicating whether the variable is a number.
 */

export function is(value: unknown): boolean {
  return gettype(value) === 'number'
}
