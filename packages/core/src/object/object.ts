import { typeOf } from '../typeof'
import { ObjectConstructor } from './object.constructor'

/**
 * Helpers that `Object` adds on top of the built-in `Object` constructor.
 */
export interface ObjectHelpers {
  /**
   * The assign() method recursively merge two objects. The resulting object has all properties from both objects.
   *
   * @param target - The target object to merge into.
   * @param source - The source object to merge from.
   * @returns A new object that has all properties from both `target` and `source`.
   */
  assign<T, S>(target: T, source: S): T & S

  /**
   * The is() method determines whether the passed value is an Object.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a object.
   */
  is(value: unknown): boolean

  /**
   * The omit() method strips the passed keys from the object.
   *
   * @param obj - The object from which keys are to be omitted.
   * @param keys - The keys to be omitted.
   * @returns A new object with the same properties as the original object, except for the omitted keys.
   */
  omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K>
}

/**
 * The `Object` utility: the built-in `Object` constructor (all its statics
 * and `new Object(thing)` behaviour) extended with {@link ObjectHelpers}.
 */
export type PonsetyaObjectConstructor = Omit<ObjectConstructor, 'assign'> &
  ObjectHelpers & {
    new (thing?: unknown): object
    (thing?: unknown): object
  }

/**
 * Creates a new instance of built-in Object.
 *
 * A plain constructor function (not a class) so that `new Object(thing)`
 * can keep returning `Object(thing)` exactly like the built-in does.
 *
 * @param thing - Anything to be converted to a object.
 */
function _Object(thing?: unknown): object {
  return ObjectConstructor(thing)
}

// Inherit every static of the built-in Object (keys, entries, freeze, …)
ObjectConstructor.setPrototypeOf(_Object, ObjectConstructor)
ObjectConstructor.defineProperty(_Object, 'name', { value: 'Object' })

const helpers: ObjectHelpers = {
  assign<T, S>(target: T, source: S): T & S {
    const obj = { ...target } as Record<string, unknown>

    for (const key of ObjectConstructor.keys(source ?? {})) {
      const value = (source as Record<string, unknown>)[key]

      if (value instanceof ObjectConstructor) {
        obj[key] = helpers.assign(obj[key], value)
      } else {
        obj[key] = value
      }
    }

    return obj as T & S
  },

  is(value: unknown): boolean {
    return typeOf(value) === 'object'
  },

  omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
    const copy = { ...obj }

    for (const key of keys) {
      delete copy[key]
    }

    return copy
  },
}

ObjectConstructor.assign(_Object, helpers)

/**
 * Object utility class that provides various methods for objects.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/core/references/object | Object} for more information.
 */
const PonsetyaObject: PonsetyaObjectConstructor =
  _Object as unknown as PonsetyaObjectConstructor

export { PonsetyaObject as Object }
