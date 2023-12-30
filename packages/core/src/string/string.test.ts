import { String } from '.'

describe('String', () => {
  describe('constructor', () => {
    test('should create an empty string object when called without any argument', () => {
      expect(new String().toString()).toBe('')
    })

    test('should create a string object with the given string value when called with a any argument', () => {
      expect(new String('hello').toString()).toBe('hello')
      expect(new String(123).toString()).toBe('123')
      expect(new String(true).toString()).toBe('true')
      expect(new String({ foo: 'bar' }).toString()).toBe('[object Object]')
    })
  })

  describe('decode()', () => {
    test('should return the decrypted value', () => {
      expect(String.decode('SGVsbG8lMjB3b3JsZCE=')).toBe('Hello world!')
    })
  })

  describe('encode()', () => {
    test('should return the encrypted value', () => {
      expect(String.encode('Hello world!')).toBe('SGVsbG8lMjB3b3JsZCE=')
    })
  })

  describe('is()', () => {
    test('should return true for a boolean value', () => {
      expect(String.is('string value')).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(String.is([])).toBe(false)
      expect(String.is(true)).toBe(false)
      expect(String.is(() => null)).toBe(false)
      expect(String.is(27)).toBe(false)
      expect(String.is({})).toBe(false)
      expect(String.is(NaN)).toBe(false)
      expect(String.is(null)).toBe(false)
      expect(String.is(undefined)).toBe(false)
    })
  })

  describe('template()', () => {
    test('should replace the variables and return the sentence', () => {
      const hi = "Hello, I'm {{name}} and I'm {{age}} years old."
      const summary = "I'm a {{job}} Developer, I've always enjoyed {{job}}."

      expect(
        String.template(hi, {
          name: 'John',
          age: 27,
        })
      ).toBe("Hello, I'm John and I'm 27 years old.")
      expect(String.template(summary, { job: 'Front-end' })).toBe(
        "I'm a Front-end Developer, I've always enjoyed Front-end."
      )
    })
  })

  describe('truncate()', () => {
    const str = 'Lorem ipsum dolor sit amet.'

    test('should truncate the string from a full word', () => {
      expect(String.truncate(str, 11)).toBe('Lorem ipsum...')
      expect(String.truncate(str, 17)).toBe('Lorem ipsum dolor...')
    })

    test('should return the original string if the limit is larger than the length of the string', () => {
      expect(String.truncate(str, 50)).toBe(str)
    })
  })
})
