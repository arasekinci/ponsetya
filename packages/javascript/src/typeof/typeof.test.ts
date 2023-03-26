import { typeOf } from '.'

describe('typeOf', () => {
  test('should return "number" for a number', () => {
    expect(typeOf(new Number(5))).toBe('number')
    expect(typeOf(5)).toBe('number')
  })

  test('should return "NaN" for NaN', () => {
    expect(typeOf(NaN)).toBe('NaN')
  })

  test('should return "string" for a string', () => {
    expect(typeOf(new String('hello'))).toBe('string')
    expect(typeOf('hello')).toBe('string')
  })

  test('should return "array" for an array', () => {
    expect(typeOf(new Array([]))).toBe('array')
    expect(typeOf([])).toBe('array')
  })

  test('should return "regexp" for a regular expression', () => {
    expect(typeOf(/^[5x]+$/)).toBe('regexp')
  })

  test('should return "object" for an object', () => {
    expect(typeOf({})).toBe('object')
  })

  test('should return "null" for null', () => {
    expect(typeOf(null)).toBe('null')
  })

  test('should return "undefined" for undefined', () => {
    expect(typeOf(undefined)).toBe('undefined')
  })
})
