import { describe, expect, test } from 'bun:test'
import { Number as PonsetyaNumber } from '.'

describe('Number', () => {
  describe('constructor', () => {
    test('should create a new number object with value 0 if no parameter is passed', () => {
      expect(new PonsetyaNumber().valueOf()).toEqual(0)
    })

    test('should create a new number object with the specified value if a number parameter is passed', () => {
      expect(new PonsetyaNumber(42).valueOf()).toEqual(42)
      expect(new PonsetyaNumber('42').valueOf()).toEqual(42)
    })

    test('should create a new number object with value NaN if a string parameter is passed that cannot be parsed as a number', () => {
      const num = new PonsetyaNumber('not a number')

      expect(Number.isNaN(num.valueOf())).toBe(true)
    })
  })

  describe('is', () => {
    test('should return true for a boolean value', () => {
      expect(PonsetyaNumber.is(27)).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(PonsetyaNumber.is([])).toBe(false)
      expect(PonsetyaNumber.is(true)).toBe(false)
      expect(PonsetyaNumber.is(() => null)).toBe(false)
      expect(PonsetyaNumber.is({})).toBe(false)
      expect(PonsetyaNumber.is('string value')).toBe(false)
      expect(PonsetyaNumber.is(NaN)).toBe(false)
      expect(PonsetyaNumber.is(null)).toBe(false)
      expect(PonsetyaNumber.is(undefined)).toBe(false)
    })
  })
})
