import { clone } from '.'

describe('clone', () => {
  test('should return undefined for undefined input', () => {
    expect(clone(undefined)).toBeUndefined()
  })

  test('should return null for null input', () => {
    expect(clone(null)).toBeNull()
  })

  test('should return a new reference for a primitive value', () => {
    const value = 42

    expect(clone(value)).toBe(value)
  })

  test('should return a new reference for a string', () => {
    const value = 'Hello world'

    expect(clone(value)).toBe(value)
  })

  test('should deep clone an object', () => {
    const value = {
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
      },
      hobbies: ['reading', 'gardening'],
    }

    expect(clone(value)).toEqual(value)
    expect(clone(value) !== value).toEqual(true)
  })

  test('should deep clone an array', () => {
    const value = [1, 'two', { three: 3 }, [4, 5]]

    expect(clone(value)).toEqual(value)
    expect(clone(value) !== value).toEqual(true)
  })

  test('should return a new date object with the same time value', () => {
    const value = new Date()

    expect(clone(value)).toEqual(value)
  })
})
