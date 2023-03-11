import { Function } from '.'

describe('Function', () => {
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
