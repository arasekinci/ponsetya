import { typeOf } from '../typeof'
import { FunctionConstructor } from './function.constructor'

/**
 * Function utility class that provides various methods for functions.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/javascript/references/function | function} for more information.
 */

export class Function extends FunctionConstructor {
  /**
   * Creates a new instance of built-in Function.
   *
   * @param args -  A list of arguments the function accepts.
   */
  constructor(...args: string[]) {
    super(...args)
  }

  /**
   * The is() method determines whether the passed value is an Function.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a function.
   */
  static is(value: unknown): boolean {
    return typeOf(value) === 'function'
  }
}
