import { Object } from '.'

describe('Object', () => {
  const obj = {
    name: 'Aras',
    surname: 'Ekinci',
    job: 'Front-end Developer',
  }

  describe('is', () => {
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

  describe('omit', () => {
    test('should slice the string up', () => {
      expect(Object.omit(obj, 'name')).toEqual({
        surname: 'Ekinci',
        job: 'Front-end Developer',
      })
    })

    test('should return itself when number is greater than text', () => {
      expect(Object.omit(obj, 'name', 'surname')).toEqual({
        job: 'Front-end Developer',
      })
    })
  })
})
