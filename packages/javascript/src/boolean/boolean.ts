import { typeOf } from '../typeof'
import { BooleanConstructor } from './boolean.constructor'

/**
 * Boolean utility class that provides various methods for booles.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/javascript/references/boolean | Boolean} for more information.
 */

export class Boolean extends BooleanConstructor {
  /**
   * Creates a new instance of built-in Boolean.
   *
   * @param thing - Anything to be converted to a boolean.
   */
  constructor(thing?: any) {
    super(thing)
  }

  /**
   * The convert() method convert a string to a boolean.
   *
   * @param value - The string to convert.
   * @throws When the string cannot be converted to a boolean.
   * @returns The boolean representation of the string.
   */
  static convert(value: string): boolean {
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
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a boolean.
   */
  static is(value: unknown): boolean {
    return typeOf(value) === 'boolean'
  }
}
