import { FunctionConstructor } from '../../constructors'
import { gettype } from '../../functions'

/**
 * Function utility class that provides various methods for functions.
 */

export abstract class Function extends FunctionConstructor {
  /**
   * The is() method determines whether the passed value is an Function.
   *
   * @param value The value to be checked.
   * @returns A boolean indicating whether the variable is a function.
   */
  static is(value: unknown): boolean {
    return gettype(value) === 'function'
  }
}