import { gettype } from './utils'

/**
 * The is() method determines whether the passed value is an Object.
 *
 * @param value The value to be checked.
 * @returns A boolean indicating whether the variable is a object.
 */

export function is(value: unknown): boolean {
  return gettype(value) === 'object'
}

/**
 * The omit() method strips the passed keys from the object.
 *
 * @param obj - The object from which keys are to be omitted.
 * @param keys - The keys to be omitted.
 * @returns A new object with the same properties as the original object, except for the omitted keys.
 */

export function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  const copy = { ...obj }

  for (const key of keys) {
    delete copy[key]
  }

  return copy
}
