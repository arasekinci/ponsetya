import { FunctionConstructor } from '../../constructors'
import { gettype } from '../../functions'

/**
 * Function utility class that provides various methods for functions.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/vanilla_src.Function.html | Function} for more information.
 */

export abstract class Function extends FunctionConstructor {
  /**
   * The is() method determines whether the passed value is an Function.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a function.
   */
  static is(value: unknown): boolean {
    return gettype(value) === 'function'
  }
}
