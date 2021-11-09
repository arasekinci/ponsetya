import { zpad } from './number'

describe('Number', () => {
  describe('Zero Pad', () => {
    test('should return an string by adding zeros', () => {
      expect(zpad(5)).toBe('05')
    })

    test('should return an string without adding anything', () => {
      expect(zpad(15)).toBe('15')
    })
  })
})
