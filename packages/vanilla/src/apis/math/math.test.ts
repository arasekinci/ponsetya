import { Math } from '.'

describe('Math', () => {
  describe('factorial', () => {
    test('should return 1 for input 0', () => {
      expect(Math.factorial(0)).toBe(1)
    })

    test('should return 6 for input 3', () => {
      expect(Math.factorial(3)).toBe(6)
    })

    test('should throw an error for negative input', () => {
      expect(() => {
        Math.factorial(-1)
      }).toThrow('Cannot calculate factorial of a negative number.')
    })
  })
})
