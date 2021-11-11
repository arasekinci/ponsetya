import number from '../../src/utils/number'

describe('Number', () => {
  describe('Zero Pad', () => {
    test('should return an string by adding zeros', () => {
      expect(number.zpad(5)).toBe('05')
    })

    test('should return an string without adding anything', () => {
      expect(number.zpad(15)).toBe('15')
    })
  })
})
