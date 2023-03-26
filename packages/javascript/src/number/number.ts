import { gettype } from '../gettype'
import { NumberConstructor } from './number.constructor'

/**
 * Number utility class that provides various methods for numbers.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/javascript/references/number | Number} for more information.
 */

export abstract class Number extends NumberConstructor {
  /**
   * The is() method determines whether the passed value is an Number.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a number.
   */
  static is(value: unknown): boolean {
    return gettype(value) === 'number'
  }
}
