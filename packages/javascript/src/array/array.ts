import { gettype } from '../gettype'
import { ArrayConstructor } from './array.constructor'

/**
 * Array utility class that provides various methods for arrays.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/javascript_src.Array.html | Array} for more information.
 */

export abstract class Array extends ArrayConstructor {
  /**
   * Compares two arrays and checks if they are the same.
   *
   * @param arr1 - The first array to compare.
   * @param arr2 - The second array to compare.
   * @returns A boolean indicating if the arrays are the same.
   */
  static compare<T>(arr1: T[], arr2: T[]): boolean {
    if (arr1.length !== arr2.length) {
      return false
    } else if (arr1 === arr2) {
      return true
    } else if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
      return true
    }

    return false
  }

  /**
   * Inserts one or more items into an array at a specified index.
   *
   * @param arr - The array to insert the items into.
   * @param index - The index to insert the items at.
   * @param items - The items to insert.
   */
  static insert<T>(arr: T[], index: number, ...items: T[]) {
    arr.splice(index, 0, ...Object.values<T>(items))
  }

  /**
   * The is() method determines whether the passed value is an Array.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a Array.
   */
  static is(value: unknown): boolean {
    return gettype(value) === 'array'
  }

  /**
   * Moves an item from one index to another in an array.
   *
   * @param arr - The array to move the item in.
   * @param from - The index of the item to move.
   * @param to - The index to move the item to.
   */
  static move<T>(arr: T[], from: number, to: number) {
    const item = arr.splice(from, 1)[0]

    arr.splice(to, 0, item)
  }

  /**
   * Removes an item from an array by index.
   *
   * @param arr - The array to remove the item from.
   * @param index - The index of the item to remove.
   */
  static remove<T>(arr: T[], index: number) {
    arr.splice(index, 1)
  }

  /**
   * Removes duplicate items from an array.
   *
   * @param arr - The array to remove duplicates from.
   * @returns A new array without duplicates.
   */
  static unique<T>(arr: T[]): T[] {
    return [...new Set(arr)]
  }
}
