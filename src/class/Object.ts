import * as object from '../object'

/**
 * Object utility class that provides various methods for objects.
 *
 * @public
 * @see {@link http://begonya.com/object Object} for more information.
 */

export abstract class ObjectConstructor extends Object {
  static is = object.is
  static omit = object.omit
}
