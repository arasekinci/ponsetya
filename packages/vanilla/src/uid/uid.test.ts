import { uid } from '.'

describe('uid', () => {
  test('should return a string', () => {
    const id = uid()

    expect(typeof id).toBe('string')
  })

  test('should return a string of the correct length', () => {
    expect(uid()).toHaveLength(25)
  })

  test('should return a unique string', () => {
    const id1 = uid()
    const id2 = uid()

    expect(id1).not.toBe(id2)
  })
})
