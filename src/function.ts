import { gettype } from './utils'

/**
 * The is() method determines whether the passed value is an Function.
 *
 * @param value The value to be checked.
 * @returns A boolean indicating whether the variable is a function.
 */

export function is(value: unknown): boolean {
  return gettype(value) === 'function'
}
