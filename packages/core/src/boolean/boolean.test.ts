import { Boolean } from '.'

describe('Boolean', () => {
  describe('constructor', () => {
    test('with true value', () => {
      expect(new Boolean(true).valueOf()).toBe(true)
      expect(new Boolean(1).valueOf()).toBe(true)
      expect(new Boolean('Hello').valueOf()).toBe(true)
    })

    test('with false value', () => {
      expect(new Boolean(false).valueOf()).toBe(false)
      expect(new Boolean(0).valueOf()).toBe(false)
      expect(new Boolean(undefined).valueOf()).toBe(false)
      expect(new Boolean(null).valueOf()).toBe(false)
    })
  })

  describe('convert', () => {
    test('should convert "true" to true', () => {
      expect(Boolean.convert('true')).toBe(true)
    })

    test('should convert "false" to false', () => {
      expect(Boolean.convert('false')).toBe(false)
    })

    test('should throw an error for non-boolean values', () => {
      expect(() => Boolean.convert('string value')).toThrow(
        'Cannot convert to boolean',
      )
    })
  })

  describe('is', () => {
    test('should return true for a boolean value', () => {
      expect(Boolean.is(true)).toBe(true)
      expect(Boolean.is(false)).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(Boolean.is([])).toBe(false)
      expect(Boolean.is(() => null)).toBe(false)
      expect(Boolean.is(27)).toBe(false)
      expect(Boolean.is({})).toBe(false)
      expect(Boolean.is('string value')).toBe(false)
      expect(Boolean.is(NaN)).toBe(false)
      expect(Boolean.is(null)).toBe(false)
      expect(Boolean.is(undefined)).toBe(false)
    })
  })
})
