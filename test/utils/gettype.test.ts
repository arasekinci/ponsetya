import { gettype } from '../../src/utils'

describe('gettype', () => {
  test('should return "number" for a number', () => {
    expect(gettype(new Number(5))).toBe('number')
    expect(gettype(5)).toBe('number')
  })

  test('should return "NaN" for NaN', () => {
    expect(gettype(NaN)).toBe('NaN')
  })

  test('should return "string" for a string', () => {
    expect(gettype(new String('hello'))).toBe('string')
    expect(gettype('hello')).toBe('string')
  })

  test('should return "array" for an array', () => {
    expect(gettype(new Array([]))).toBe('array')
    expect(gettype([])).toBe('array')
  })

  test('should return "regexp" for a regular expression', () => {
    expect(gettype(/^[5x]+$/)).toBe('regexp')
  })

  test('should return "error" for an error', () => {
    expect(gettype(new Error())).toBe('error')
  })

  test('should return "object" for an object', () => {
    expect(gettype({})).toBe('object')
  })

  test('should return "null" for null', () => {
    expect(gettype(null)).toBe('null')
  })

  test('should return "undefined" for undefined', () => {
    expect(gettype(undefined)).toBe('undefined')
  })
})
