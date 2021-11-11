import crypto from '../../src/utils/crypto'

describe('Crypto', () => {
  const encoded = 'TG9yZW0lMjBpcHN1bQ=='
  const decoded = 'Lorem ipsum'

  test('should slice the string up', () => {
    expect(crypto.encode(decoded)).toBe(encoded)
  })

  test('should return empty string when count is 0', () => {
    expect(crypto.decode(encoded)).toBe(decoded)
  })
})
