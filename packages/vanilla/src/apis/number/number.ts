import { NumberConstructor } from '../../constructors'
import { gettype } from '../../functions'

/**
 * Number utility class that provides various methods for numbers.
 *
 * @see {@link http://begonya.com/number Number} for more information.
 */

export abstract class Number extends NumberConstructor {
  /**
   * The is() method determines whether the passed value is an Number.
   *
   * @param value The value to be checked.
   * @returns A boolean indicating whether the variable is a number.
   */
  static is(value: unknown): boolean {
    return gettype(value) === 'number'
  }
}
