import classnames from '../../src/functions/classnames'

describe('Class Names', () => {
  test('should combine and return values', () => {
    expect(classnames('lorem', 'ipsum')).toBe('lorem ipsum')
  })

  test('should return conditional object keys joining', () => {
    expect(classnames({ lorem: 'ipsum' })).toBe('lorem-ipsum')
    expect(classnames({ lorem: true, ipsum: true })).toBe('lorem ipsum')
    expect(classnames({ lorem: true, ipsum: false })).toBe('lorem')
  })

  test('should ignore other false values', () => {
    expect(classnames('lorem', 1, false, undefined, null)).toBe('lorem')
  })
})
