/**
 * Math utility object that provides various methods for numbers.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/javascript/references/math | math} for more information.
 */

export const math = {
  ...Math,
  /**
   * The average() method calculates the average of the given numbers.
   *
   * @param values - The numbers to calculate the average of.
   * @returns The average of the given numbers.
   */
  average(...values: number[]): number {
    return (
      values.reduce((previous, current) => previous + current, 0) /
      values.length
    )
  },

  /**
   * The even() method filters the even numbers from the given numbers.
   *
   * @param values - The numbers to filter even numbers from.
   * @returns An array of even numbers.
   */
  even(...values: number[]): number[] {
    return values.filter((value) => value % 2 === 0)
  },

  /**
   * The factorial() method calculates the factorial of a positive integer.
   *
   * @param x - The positive integer to calculate the factorial of.
   * @throws An error if x is a negative number.
   * @returns The factorial of x.
   */
  factorial(x: number): number {
    if (x === 0) {
      return 1
    } else if (x < 0) {
      throw new Error('Cannot calculate factorial of a negative number.')
    }

    return x * math.factorial(x - 1)
  },

  /**
   * The odd() method filters the odd numbers from the given numbers.
   *
   * @param values - The numbers to filter odd numbers from.
   * @returns An array of odd numbers.
   */
  odd(...values: number[]): number[] {
    return values.filter((value) => value % 2 !== 0)
  },

  /**
   * The sum() method calculates the sum of the given numbers.
   *
   * @param values - The numbers to calculate the sum of.
   * @returns The sum of the given numbers.
   */
  sum(...values: number[]): number {
    return values.reduce((previous, current) => previous + current, 0)
  },
}
