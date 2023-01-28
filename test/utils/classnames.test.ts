import { classnames } from '../../src/utils'

describe('classnames', () => {
  test('should return the class names conditionally joining', () => {
    expect(classnames('foo', 'bar')).toBe('foo bar')
    expect(classnames({ foo: true, bar: false })).toBe('foo')
    expect(classnames({ foo: true, bar: true })).toBe('foo bar')
    expect(classnames({ foo: 'baz' }, { bar: true })).toBe('foo-baz bar')
  })

  test('should return an empty string if no argument passed', () => {
    expect(classnames()).toBe('')
  })

  test('should return a string if passed', () => {
    expect(classnames('foo')).toBe('foo')
  })

  test('should return a string if passed with number', () => {
    expect(classnames('foo', 1)).toBe('foo')
  })

  test('should return a string if passed with boolean', () => {
    expect(classnames('foo', false)).toBe('foo')
  })

  test('should return a string if passed with undefined', () => {
    expect(classnames('foo', undefined)).toBe('foo')
  })

  test('should return a string if passed with null', () => {
    expect(classnames('foo', null)).toBe('foo')
  })

  test('should return a string if passed with object', () => {
    expect(classnames('foo', { bar: true })).toBe('foo bar')
  })
})
