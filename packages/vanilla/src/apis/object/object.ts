import { ObjectConstructor } from '../../constructors'
import { gettype } from '../../functions'

/**
 * Object utility class that provides various methods for objects.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/vanilla_src.Object.html | Object} for more information.
 */

abstract class _Object extends ObjectConstructor {
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
   *
   * @example
   * ```ts
   * const obj = { a: 1, b: 2, c: 3 }
   * const omited = Object.omit(obj, 'b', 'c')
   * console.log(omited); // { a: 1, b: 2 }
   * ```
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
