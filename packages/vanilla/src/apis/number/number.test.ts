import { Number } from '.'

describe('Number', () => {
  describe('is', () => {
    test('should return true for a boolean value', () => {
      expect(Number.is(27)).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(Number.is([])).toBe(false)
      expect(Number.is(true)).toBe(false)
      expect(Number.is(() => null)).toBe(false)
      expect(Number.is({})).toBe(false)
      expect(Number.is('string value')).toBe(false)
      expect(Number.is(NaN)).toBe(false)
      expect(Number.is(null)).toBe(false)
      expect(Number.is(undefined)).toBe(false)
    })
  })
})
