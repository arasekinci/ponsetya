import string from '../../src/utils/string'

describe('String', () => {
  describe('Truncate', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    test('should slice the string up', () => {
      expect(string.truncate(str, 10)).toBe('Lorem ipsum...')
    })

    test('should return itself when number is greater than text', () => {
      expect(string.truncate(str, 150)).toBe(str)
    })
  })

  describe('Escape', () => {
    const str = '~Lorem# (ipsum) /d\\olor/ ^sit <amet>, 10 cons[e]cte{t}ur.'

    test('should clear special characters and return text', () => {
      expect(string.escape(str)).toBe(
        'Lorem ipsum dolor sit amet, 10 consectetur.'
      )
    })
  })

  describe('Naming Convention', () => {
    const str = 'Lorem ipsum dolor.'

    test('should capitalize the text and return it', () => {
      expect(string.capitalize(str)).toBe('Lorem ipsum dolor.')
    })

    test('should lower the text and return it', () => {
      expect(string.lowercase(str)).toBe('lorem ipsum dolor.')
    })

    test('should upper the text and return it', () => {
      expect(string.uppercase(str)).toBe('LOREM IPSUM DOLOR.')
    })

    test('should change the text to camelcase and return it', () => {
      expect(string.camelcase(str)).toBe('loremIpsumDolor')
    })

    test('should change the text to kebabcase and return it', () => {
      expect(string.kebabcase(str)).toBe('lorem-ipsum-dolor')
    })

    test('should change the text to pascalcase and return it', () => {
      expect(string.pascalcase(str)).toBe('LoremIpsumDolor')
    })

    test('should change the text to snakecase and return it', () => {
      expect(string.snakecase(str)).toBe('lorem_ipsum_dolor')
      expect(string.snakecase(str, true)).toBe('LOREM_IPSUM_DOLOR')
    })
  })
})
