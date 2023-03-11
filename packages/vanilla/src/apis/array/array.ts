import { ArrayConstructor } from '../../constructors'
import { gettype } from '../../functions'

/**
 * Array utility class that provides various methods for arrays.
 *
 * @browser
 * @node
 * @see {@link http://begonya.com/array Array} for more information.
 */

export abstract class Array extends ArrayConstructor {
  /**
   * Appends an item to the end of an array.
   *
   * @param arr - The array to append the item to.
   * @param item - The item to append.
   * @returns A new array with the item appended.
   */

  static append<T>(arr: T[], item: T): T[] {
    return [...arr, item]
  }

  /**
   * Calculates the average value of an array of numbers.
   *
   * @param arr - The array of numbers.
   * @returns The average value.
   */

  static average(arr: number[]): number {
    return arr.reduce((previous, current) => previous + current, 0) / arr.length
  }

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
   * Filters an array of numbers and returns only the even numbers.
   *
   * @param arr - The array of numbers.
   * @returns An array of even numbers.
   */

  static even(arr: number[]): number[] {
    return arr.filter((value) => value % 2 === 0)
  }

  /**
   * Gets an item from an array by index.
   *
   * @param arr - The array to get the item from.
   * @param index - The index of the item.
   * @returns The item at the specified index.
   */

  static get<T>(arr: T[], index: number): T | undefined {
    return arr[index]
  }

  /**
   * Inserts one or more items into an array at a specified index.
   *
   * @param arr - The array to insert the items into.
   * @param index - The index to insert the items at.
   * @param items - The items to insert.
   * @returns A new array with the items inserted.
   */
  static insert<T>(arr: T[], index: number, ...items: T[]): T[] {
    const copy = [...arr]

    copy.splice(index, 0, ...Object.values<T>(items))

    return copy
  }

  /**
   * The is() method determines whether the passed value is an Array.
   *
   * @param value The value to be checked.
   * @returns A boolean indicating whether the variable is a string.
   */
  static is(value: unknown): boolean {
    return gettype(value) === 'array'
  }

  /**
   * Gets the maximum value of an array of numbers.
   *
   * @param arr - The array of numbers.
   * @returns The maximum value.
   */
  static max(arr: number[]): number {
    return Math.max(...arr)
  }

  /**
   * Gets the minimum value of an array of numbers.
   *
   * @param arr - The array of numbers.
   * @returns The minimum value.
   */
  static min(arr: number[]): number {
    return Math.min(...arr)
  }

  /**
   * Moves an item from one index to another in an array.
   *
   * @param arr - The array to move the item in.
   * @param from - The index of the item to move.
   * @param to - The index to move the item to.
   * @returns A new array with the item moved.
   */
  static move<T>(arr: T[], from: number, to: number): T[] {
    const copy = [...arr]
    const item = copy.splice(from, 1)[0]

    copy.splice(to, 0, item)

    return copy
  }

  /**
   * Filters an array of numbers and returns only the odd numbers.
   *
   * @param arr - The array of numbers.
   * @returns An array of odd numbers.
   */
  static odd(arr: number[]): number[] {
    return arr.filter((value) => value % 2 !== 0)
  }

  /**
   * Prepends an item to the beginning of an array.
   *
   * @param arr - The array to prepend the item to.
   * @param item - The item to prepend.
   * @returns A new array with the item prepended.
   */
  static prepend<T>(arr: T[], item: T): T[] {
    return [item, ...arr]
  }

  /**
   * Removes an item from an array by index.
   *
   * @param arr - The array to remove the item from.
   * @param index - The index of the item to remove.
   * @returns A new array with the item removed.
   */
  static remove<T>(arr: T[], index: number): T[] {
    const copy = [...arr]

    copy.splice(index, 1)

    return copy
  }

  /**
   * Calculates the sum of an array of numbers.
   *
   * @param arr - The array of numbers.
   * @returns The sum of the numbers.
   */
  static sum(arr: number[]): number {
    return arr.reduce((previous, current) => previous + current, 0)
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

  /**
   * Updates an item in an array by index.
   *
   * @param arr - The array to update the item in.
   * @param index - The index of the item to update.
   * @param item - The new item.
   * @returns A new array with the item updated.
   */
  static update<T>(arr: T[], index: number, item: T): T[] {
    const copy = [...arr]

    copy[index] = item

    return copy
  }
}
