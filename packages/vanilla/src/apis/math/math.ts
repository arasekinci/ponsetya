import { MathPrototype } from '../../prototypes'

/**
 * Math utility object that provides various methods for numbers.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/variables/vanilla_src.Math.html | Math} for more information.
 */

export const Math = {
  ...MathPrototype,
  /**
   * Calculates the average of the given numbers.
   *
   * @param values - The numbers to calculate the average of.
   * @returns The average of the given numbers.
   *
   * @example
   * ```ts
   * const result = Math.average(2, 4, 6)
   *
   * console.log(result); // 4
   * ```
   */
  average(...values: number[]): number {
    return (
      values.reduce((previous, current) => previous + current, 0) /
      values.length
    )
  },

  /**
   * Filters the even numbers from the given numbers.
   *
   * @param values - The numbers to filter even numbers from.
   * @returns An array of even numbers.
   *
   * @example
   * ```ts
   * const result = Math.even(1, 2, 3, 4, 5, 6)
   *
   * console.log(result); // [2, 4, 6]
   * ```
   */
  even(...values: number[]): number[] {
    return values.filter((value) => value % 2 === 0)
  },

  /**
   * Calculates the factorial of a positive integer.
   *
   * @param x - The positive integer to calculate the factorial of.
   * @throws An error if x is a negative number.
   * @returns The factorial of x.
   *
   * @example
   * ```ts
   * const result = Math.factorial(5)
   *
   * console.log(result) // 120
   * ```
   */
  factorial(x: number): number {
    if (x === 0) {
      return 1
    } else if (x < 0) {
      throw new Error('Cannot calculate factorial of a negative number.')
    }

    return x * Math.factorial(x - 1)
  },

  /**
   * Filters the odd numbers from the given numbers.
   *
   * @param values - The numbers to filter odd numbers from.
   * @returns An array of odd numbers.
   *
   * @example
   * ```ts
   * const result = Math.odd(1, 2, 3, 4, 5, 6)
   *
   * console.log(result); // [1, 3, 5]
   * ```
   */
  odd(...values: number[]): number[] {
    return values.filter((value) => value % 2 !== 0)
  },

  /**
   * Calculates the sum of the given numbers.
   *
   * @param values - The numbers to calculate the sum of.
   * @returns The sum of the given numbers.
   *
   * @example
   * ```ts
   * const result = Math.sum(1, 2, 3, 4, 5, 6)
   *
   * console.log(result); // 21
   * ```
   */
  sum(...values: number[]): number {
    return values.reduce((previous, current) => previous + current, 0)
  },
}
