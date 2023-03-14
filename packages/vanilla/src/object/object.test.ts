import { Object } from '.'

describe('Object', () => {
  describe('assign()', () => {
    test('should assign two objects', () => {
      const target = { a: 1, b: 2 }
      const source = { c: 3, d: 4 }

      expect(Object.assign(target, source)).toEqual({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      })
    })

    test('should recursively write values over existing properties', () => {
      const target = { a: { b: { c: 1 } }, d: 2 }
      const source = { a: { b: { c: 3 } }, d: 4 }

      expect(Object.assign(target, source)).toEqual({
        a: {
          b: {
            c: 3,
          },
        },
        d: 4,
      })
    })
  })

  describe('is()', () => {
    test('should return true for a boolean value', () => {
      expect(Object.is({})).toBe(true)
      expect(Object.is({ x: 'y' })).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(Object.is([])).toBe(false)
      expect(Object.is(true)).toBe(false)
      expect(Object.is(() => null)).toBe(false)
      expect(Object.is(27)).toBe(false)
      expect(Object.is('string value')).toBe(false)
      expect(Object.is(NaN)).toBe(false)
      expect(Object.is(null)).toBe(false)
      expect(Object.is(undefined)).toBe(false)
    })
  })

  describe('omit()', () => {
    test('should omit the specified keys from the object', () => {
      const obj = {
        name: 'John',
        surname: 'Doe',
        job: 'Software Developer',
      }

      expect(Object.omit(obj, 'name')).toEqual({
        surname: 'Doe',
        job: 'Software Developer',
      })

      expect(Object.omit(obj, 'name', 'surname')).toEqual({
        job: 'Software Developer',
      })
    })
  })
})
