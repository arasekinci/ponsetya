import * as string from '../string'

/**
 * String utility class that provides various methods for strings.
 *
 * @public
 * @see {@link http://begonya.com/string Strings} for more information.
 */

export abstract class StringConstructor extends String {
  static decode = string.decode
  static encode = string.encode
  static is = string.is
  static template = string.template
  static truncate = string.truncate
}
