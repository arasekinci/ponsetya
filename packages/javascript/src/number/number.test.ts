import { Number } from '.'

describe('Number', () => {
  describe('constructor', () => {
    test('should create a new number object with value 0 if no parameter is passed', () => {
      expect(new Number().valueOf()).toEqual(0)
    })

    test('should create a new number object with the specified value if a number parameter is passed', () => {
      expect(new Number(42).valueOf()).toEqual(42)
      expect(new Number('42').valueOf()).toEqual(42)
    })

    test('should create a new number object with value NaN if a string parameter is passed that cannot be parsed as a number', () => {
      const num = new Number('not a number')

      expect(isNaN(num.valueOf())).toBe(true)
    })
  })

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
