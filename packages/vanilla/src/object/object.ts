import { gettype } from '../gettype'
import { ObjectConstructor } from './object.constructor'

/**
 * Object utility class that provides various methods for objects.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/vanilla_src.Object.html | Object} for more information.
 */

abstract class _Object extends ObjectConstructor {
  /**
   * Recursively merges two objects. The resulting object has all properties
   * from both objects. If a property from both objects has the same name, then
   * the value from the second object will be used.
   *
   * @param target - The target object to merge into.
   * @param source - The source object to merge from.
   * @returns A new object that has all properties from both `target` and `source`.
   */
  static assign<T, S>(target: T, source: S): T & S {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj = { ...target } as any

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const value = source[key]

        if (value instanceof Object) {
          obj[key] = _Object.assign<T, typeof value>(obj[key], value)
        } else {
          obj[key] = value
        }
      }
    }

    return obj
  }

  /**
   * The is() method determines whether the passed value is an Object.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a object.
   */
  static is(value: unknown): boolean {
    return gettype(value) === 'object'
  }

  /**
   * The omit() method strips the passed keys from the object.
   *
   * @param obj - The object from which keys are to be omitted.
   * @param keys - The keys to be omitted.
   * @returns A new object with the same properties as the original object, except for the omitted keys.
   */
  static omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
    const copy = { ...obj }

    for (const key of keys) {
      delete copy[key]
    }

    return copy
  }
}

export { _Object as Object }
