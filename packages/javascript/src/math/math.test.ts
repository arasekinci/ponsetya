import { Math } from '.'

describe('Math', () => {
  describe('average()', () => {
    test('calculates the average of given numbers', () => {
      expect(Math.average(1, 2, 3, 4, 5)).toBe(3)
      expect(Math.average(-1, 0, 1)).toBe(0)
    })
  })

  describe('even()', () => {
    test('filters even numbers from given numbers', () => {
      expect(Math.even(1, 2, 3, 4, 5, 6)).toEqual([2, 4, 6])
      expect(Math.even(7, 9, 11)).toEqual([])
    })
  })

  describe('factorial()', () => {
    test('calculates the factorial of a positive integer', () => {
      expect(Math.factorial(0)).toBe(1)
      expect(Math.factorial(1)).toBe(1)
      expect(Math.factorial(5)).toBe(120)
    })

    test('throws an error for negative input', () => {
      expect(() => Math.factorial(-1)).toThrow(
        'Cannot calculate factorial of a negative number.'
      )
    })
  })

  describe('odd()', () => {
    test('filters odd numbers from given numbers', () => {
      expect(Math.odd(1, 2, 3, 4, 5, 6)).toEqual([1, 3, 5])
      expect(Math.odd(8, 10, 12)).toEqual([])
    })
  })

  describe('sum()', () => {
    test('calculates the sum of given numbers', () => {
      expect(Math.sum(1, 2, 3, 4, 5)).toBe(15)
      expect(Math.sum(-1, 0, 1)).toBe(0)
    })
  })
})
