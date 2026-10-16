import { describe, expect, test } from 'bun:test'
import { Function as PonsetyaFunction } from '.'

describe('Function', () => {
  describe('constructor', () => {
    test('should create a function object', () => {
      const sum = new PonsetyaFunction('a', 'b', 'return a + b')

      expect(sum(1, 2)).toEqual(3)
    })

    test('should throw an error if the code contains syntax errors', () => {
      expect(() => {
        new PonsetyaFunction('a', 'b', 'return a +')
      }).toThrow(SyntaxError)
    })
  })

  describe('is', () => {
    test('should return true for a boolean value', () => {
      expect(PonsetyaFunction.is(() => null)).toBe(true)
      expect(PonsetyaFunction.is(PonsetyaFunction.is)).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(PonsetyaFunction.is([])).toBe(false)
      expect(PonsetyaFunction.is(true)).toBe(false)
      expect(PonsetyaFunction.is(27)).toBe(false)
      expect(PonsetyaFunction.is({})).toBe(false)
      expect(PonsetyaFunction.is('string value')).toBe(false)
      expect(PonsetyaFunction.is(NaN)).toBe(false)
      expect(PonsetyaFunction.is(null)).toBe(false)
      expect(PonsetyaFunction.is(undefined)).toBe(false)
    })
  })
})
