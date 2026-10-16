import { typeOf } from '../typeof'
import { NumberConstructor } from './number.constructor'

/**
 * Number utility class that provides various methods for numbers.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/core/references/number | Number} for more information.
 */

class _Number extends NumberConstructor {
  /**
   * Creates a new instance of built-in Number.
   *
   * @param thing - Anything to be converted to a number.
   */
  constructor(thing?: unknown) {
    if (thing) {
      super(thing)
    } else {
      super()
    }
  }

  /**
   * The is() method determines whether the passe"d value is an Number.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a number.
   */
  static is(value: unknown): boolean {
    return typeOf(value) === 'number'
  }
}

// Keep the public class name (`Number`) visible at runtime, e.g. for getname()
Object.defineProperty(_Number, 'name', { value: 'Number' })

export { _Number as Number }
