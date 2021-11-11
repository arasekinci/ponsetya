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
})
