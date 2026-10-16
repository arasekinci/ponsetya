import { describe, expect, test } from 'bun:test'
import { Boolean as PonsetyaBoolean } from '.'

describe('Boolean', () => {
  describe('constructor', () => {
    test('with true value', () => {
      expect(new PonsetyaBoolean(true).valueOf()).toBe(true)
      expect(new PonsetyaBoolean(1).valueOf()).toBe(true)
      expect(new PonsetyaBoolean('Hello').valueOf()).toBe(true)
    })

    test('with false value', () => {
      expect(new PonsetyaBoolean(false).valueOf()).toBe(false)
      expect(new PonsetyaBoolean(0).valueOf()).toBe(false)
      expect(new PonsetyaBoolean(undefined).valueOf()).toBe(false)
      expect(new PonsetyaBoolean(null).valueOf()).toBe(false)
    })
  })

  describe('convert', () => {
    test('should convert "true" to true', () => {
      expect(PonsetyaBoolean.convert('true')).toBe(true)
    })

    test('should convert "false" to false', () => {
      expect(PonsetyaBoolean.convert('false')).toBe(false)
    })

    test('should throw an error for non-boolean values', () => {
      expect(() => PonsetyaBoolean.convert('string value')).toThrow(
        'Cannot convert to boolean',
      )
    })
  })

  describe('is', () => {
    test('should return true for a boolean value', () => {
      expect(PonsetyaBoolean.is(true)).toBe(true)
      expect(PonsetyaBoolean.is(false)).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(PonsetyaBoolean.is([])).toBe(false)
      expect(PonsetyaBoolean.is(() => null)).toBe(false)
      expect(PonsetyaBoolean.is(27)).toBe(false)
      expect(PonsetyaBoolean.is({})).toBe(false)
      expect(PonsetyaBoolean.is('string value')).toBe(false)
      expect(PonsetyaBoolean.is(NaN)).toBe(false)
      expect(PonsetyaBoolean.is(null)).toBe(false)
      expect(PonsetyaBoolean.is(undefined)).toBe(false)
    })
  })
})
