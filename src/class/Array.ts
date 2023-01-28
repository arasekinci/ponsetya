import * as array from '../array'

/**
 * Array utility class that provides various methods for arrays.
 *
 * @public
 * @see {@link http://begonya.com/array Array} for more information.
 */

export abstract class ArrayConstructor extends Array {
  static append = array.append
  static average = array.average
  static compare = array.compare
  static even = array.even
  static get = array.get
  static insert = array.insert
  static is = array.is
  static max = array.max
  static min = array.min
  static move = array.move
  static odd = array.odd
  static prepend = array.prepend
  static remove = array.remove
  static sum = array.sum
  static unique = array.unique
  static update = array.update
}
