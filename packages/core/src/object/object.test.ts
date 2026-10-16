import { describe, expect, test } from 'bun:test'
import { Object as PonsetyaObject } from '.'

describe('Object', () => {
  describe('constructor', () => {
    test('should create an empty object without parameter', () => {
      expect(new PonsetyaObject()).toMatchObject({})
      expect(new PonsetyaObject(null)).toMatchObject({})
      expect(new PonsetyaObject(undefined)).toMatchObject({})
    })

    test('should create an object with properties from given parameter', () => {
      const obj = { name: 'John', surname: 'Doe' }

      expect(new PonsetyaObject(obj)).toMatchObject(obj)
    })
  })

  describe('assign()', () => {
    test('should assign two objects', () => {
      const target = { a: 1, b: 2 }
      const source = { c: 3, d: 4 }

      expect(PonsetyaObject.assign(target, source)).toEqual({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      })
    })

    test('should recursively write values over existing properties', () => {
      const target = { a: { b: { c: 1 } }, d: 2 }
      const source = { a: { b: { c: 3 } }, d: 4 }

      expect(PonsetyaObject.assign(target, source)).toEqual({
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
      expect(PonsetyaObject.is({})).toBe(true)
      expect(PonsetyaObject.is({ x: 'y' })).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(PonsetyaObject.is([])).toBe(false)
      expect(PonsetyaObject.is(true)).toBe(false)
      expect(PonsetyaObject.is(() => null)).toBe(false)
      expect(PonsetyaObject.is(27)).toBe(false)
      expect(PonsetyaObject.is('string value')).toBe(false)
      expect(PonsetyaObject.is(NaN)).toBe(false)
      expect(PonsetyaObject.is(null)).toBe(false)
      expect(PonsetyaObject.is(undefined)).toBe(false)
    })
  })

  describe('omit()', () => {
    test('should omit the specified keys from the object', () => {
      const obj = {
        name: 'John',
        surname: 'Doe',
        job: 'Software Developer',
      }

      expect(PonsetyaObject.omit(obj, 'name')).toEqual({
        surname: 'Doe',
        job: 'Software Developer',
      })

      expect(PonsetyaObject.omit(obj, 'name', 'surname')).toEqual({
        job: 'Software Developer',
      })
    })
  })
})
