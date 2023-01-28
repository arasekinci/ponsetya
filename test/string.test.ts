import { String } from '../src/class'

describe('string', () => {
  describe('truncate', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    test('should slice the string up', () => {
      expect(String.truncate(str, 11)).toBe('Lorem ipsum...')
      expect(String.truncate(str, 17)).toBe('Lorem ipsum dolor...')
    })

    test('should return itself when number is greater than text', () => {
      expect(String.truncate('', 10)).toBe('')
      expect(String.truncate(str, 200)).toBe(str)
    })
  })

  describe('crypto', () => {
    const encoded = 'TG9yZW0lMjBpcHN1bQ=='
    const decoded = 'Lorem ipsum'

    test('should encrypt the text and return the encrypted text', () => {
      expect(String.encode(decoded)).toBe(encoded)
      expect(String.decode(encoded)).toBe(decoded)
    })
  })

  describe('is', () => {
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

  describe('template', () => {
    const hi = "Hello, I'm {{name}}, {{age}} years old."
    const description = "I'm a {{job}} Developer, I've always enjoyed {{job}}."

    test('should replace the variables and return the sentence', () => {
      expect(String.template(hi, 'Aras', 27)).toBe(
        "Hello, I'm Aras, 27 years old."
      )
      expect(String.template(description, 'Front-end')).toBe(
        "I'm a Front-end Developer, I've always enjoyed Front-end."
      )
    })
  })
})
