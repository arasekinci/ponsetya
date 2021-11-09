import { truncate } from './string'

describe('String', () => {
  describe('Truncate', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    test('should slice the string up', () => {
      expect(truncate(str, 10)).toBe('Lorem ipsum...')
    })

    test('should return itself when number is greater than text', () => {
      expect(truncate(str, 150)).toBe(str)
    })
  })
})
