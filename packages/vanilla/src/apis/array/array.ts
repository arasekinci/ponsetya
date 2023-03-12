import { ArrayConstructor } from '../../constructors'
import { gettype } from '../../functions'

/**
 * Array utility class that provides various methods for arrays.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/vanilla_src.Array.html | Array} for more information.
 */

export abstract class Array extends ArrayConstructor {
  /**
   * Appends an item to the end of an array.
   *
   * @param arr - The array to append the item to.
   * @param item - The item to append.
   * @returns A new array with the item appended.
   *
   * @example
   * ```ts
   * const arr = [1, 2, 3]
   * Array.append(arr, 4)
   * console.log(arr) // [1, 2, 3, 4]
   * ```
   */
  static append<T>(arr: T[], item: T) {
    arr.push(item)
  }

  /**
   * Compares two arrays and checks if they are the same.
   *
   * @param arr1 - The first array to compare.
   * @param arr2 - The second array to compare.
   * @returns A boolean indicating if the arrays are the same.
   *
   * @example
   * ```ts
   * const arr1 = [1, 2, 3, 4]
   * const arr2 = [1, 2, 3, 4]
   * const compared = Array.compare(arr1, arr2)
   * console.log(compared) // true
   * ```
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
   * Gets an item from an array by index.
   *
   * @param arr - The array to get the item from.
   * @param index - The index of the item.
   * @returns The item at the specified index.
   *
   * @example
   * ```ts
   * const arr = [1, 2, 3, 4]
   * const item = Array.get(arr, 2)
   * console.log(item) // 3
   * ```
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
   *
   * @example
   * ```ts
   * const arr = [1, 4]
   * Array.insert(arr, 1, 2, 3)
   * console.log(arr) // [1, 2, 3, 4]
   * ```
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
   * @returns A new array with the item moved.
   *
   * @example
   * ```ts
   * const arr = [1, 4, 2, 3]
   * Array.move(arr, 1, 3)
   * console.log(arr) // [1, 2, 3, 4]
   * ```
   */
  static move<T>(arr: T[], from: number, to: number) {
    const item = arr.splice(from, 1)[0]

    arr.splice(to, 0, item)
  }

  /**
   * Prepends an item to the beginning of an array.
   *
   * @param arr - The array to prepend the item to.
   * @param item - The item to prepend.
   * @returns A new array with the item prepended.
   *
   * @example
   * ```ts
   * const arr = [2, 3, 4]
   * Array.prepend(arr, 1)
   * console.log(arr) // [1, 2, 3, 4]
   * ```
   */
  static prepend<T>(arr: T[], item: T) {
    arr.unshift(item)
  }

  /**
   * Removes an item from an array by index.
   *
   * @param arr - The array to remove the item from.
   * @param index - The index of the item to remove.
   * @returns A new array with the item removed.
   *
   * @example
   * ```ts
   * const arr = [1, 2, 9, 3, 4]
   * Array.remove(arr, 2)
   * console.log(arr) // [1, 2, 3, 4]
   * ```
   */
  static remove<T>(arr: T[], index: number) {
    arr.splice(index, 1)
  }

  /**
   * Removes duplicate items from an array.
   *
   * @param arr - The array to remove duplicates from.
   * @returns A new array without duplicates.
   *
   * @example
   * ```ts
   * let arr = [1, 1, 2, 3, 4, 4]
   * arr = Array.unique(arr)
   * console.log(arr) // [1, 2, 3, 4]
   * ```
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
   *
   * @example
   * ```ts
   * const arr = [5, 2, 3, 4]
   * Array.update(arr, 0, 1)
   * console.log(arr) // [1, 2, 3, 4]
   * ```
   */
  static update<T>(arr: T[], index: number, item: T) {
    arr[index] = item
  }
}
