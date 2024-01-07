import { math } from '.'

describe('math', () => {
  describe('average()', () => {
    test('calculates the average of given numbers', () => {
      expect(math.average(1, 2, 3, 4, 5)).toBe(3)
      expect(math.average(-1, 0, 1)).toBe(0)
    })
  })

  describe('even()', () => {
    test('filters even numbers from given numbers', () => {
      expect(math.even(1, 2, 3, 4, 5, 6)).toEqual([2, 4, 6])
      expect(math.even(7, 9, 11)).toEqual([])
    })
  })

  describe('factorial()', () => {
    test('calculates the factorial of a positive integer', () => {
      expect(math.factorial(0)).toBe(1)
      expect(math.factorial(1)).toBe(1)
      expect(math.factorial(5)).toBe(120)
    })

    test('throws an error for negative input', () => {
      expect(() => math.factorial(-1)).toThrow(
        'Cannot calculate factorial of a negative number.',
      )
    })
  })

  describe('odd()', () => {
    test('filters odd numbers from given numbers', () => {
      expect(math.odd(1, 2, 3, 4, 5, 6)).toEqual([1, 3, 5])
      expect(math.odd(8, 10, 12)).toEqual([])
    })
  })

  describe('sum()', () => {
    test('calculates the sum of given numbers', () => {
      expect(math.sum(1, 2, 3, 4, 5)).toBe(15)
      expect(math.sum(-1, 0, 1)).toBe(0)
    })
  })
})
