import { Function } from '.'

describe('Function', () => {
  describe('constructor', () => {
    test('should create a function object', () => {
      const sum = new Function('a', 'b', 'return a + b')

      expect(sum(1, 2)).toEqual(3)
    })

    test('should throw an error if the code contains syntax errors', () => {
      expect(() => {
        new Function('a', 'b', 'return a +')
      }).toThrow(SyntaxError)
    })
  })

  describe('is', () => {
    test('should return true for a boolean value', () => {
      expect(Function.is(() => null)).toBe(true)
      expect(Function.is(Function.is)).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(Function.is([])).toBe(false)
      expect(Function.is(true)).toBe(false)
      expect(Function.is(27)).toBe(false)
      expect(Function.is({})).toBe(false)
      expect(Function.is('string value')).toBe(false)
      expect(Function.is(NaN)).toBe(false)
      expect(Function.is(null)).toBe(false)
      expect(Function.is(undefined)).toBe(false)
    })
  })
})
