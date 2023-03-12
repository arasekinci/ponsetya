import { MathPrototype } from '../../prototypes'

/**
 * Math utility object that provides various methods for numbers.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/variables/vanilla_src.Math.html | Math} for more information.
 */

export const Math = {
  ...MathPrototype,
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
}
