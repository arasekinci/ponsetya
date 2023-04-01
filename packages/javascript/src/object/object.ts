import { typeOf } from '../typeof'
import { ObjectConstructor } from './object.constructor'

/**
 * Object utility class that provides various methods for objects.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/javascript/references/object | Object} for more information.
 */

class _Object extends ObjectConstructor {
  /**
   * Creates a new instance of built-in Object.
   *
   * @param thing - Anything to be converted to a object.
   */
  constructor(thing?: any) {
    super(thing)

    return ObjectConstructor(thing)
  }

  /**
   * The assign() method recursively merge two objects. The resulting object has all properties from both objects.
   *
   * @param target - The target object to merge into.
   * @param source - The source object to merge from.
   * @returns A new object that has all properties from both `target` and `source`.
   */
  static assign<T, S>(target: T, source: S): T & S {
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
    return typeOf(value) === 'object'
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
