import * as boolean from '../boolean'

/**
 * Boolean utility class that provides various methods for booles.
 *
 * @public
 * @see {@link http://begonya.com/boolean Boolean} for more information.
 */

export abstract class BooleanConstructor extends Boolean {
  static convert = boolean.convert
  static is = boolean.is
}
