import { Storage } from '.'

describe('Storage', () => {
  const storage = new Storage()

  beforeEach(() => {
    storage.clear()
  })

  test('key', () => {
    storage.set('name', 'John')
    storage.set('surname', 'Doe')

    expect(storage.key(0)).toBe('name')
    expect(storage.key(1)).toBe('surname')
    expect(storage.key(2)).toBe(undefined)
  })

  test('size', () => {
    storage.set('name', 'John')
    storage.set('surname', 'Doe')

    expect(storage.size()).toBe(2)
  })

  test('get', () => {
    storage.set('name', 'John')
    storage.set('surname', 'Doe')

    expect(storage.get<string>('name')).toBe('John')
    expect(storage.get<string>('surname')).toBe('Doe')
    expect(storage.get<string>('age')).toBe(undefined)
  })

  test('set', () => {
    storage.set('name', 'John')
    storage.set('surname', 'Doe')

    expect(storage.get<string>('name')).toBe('John')
    expect(storage.get<string>('surname')).toBe('Doe')
  })

  test('remove', () => {
    storage.set('name', 'John')
    storage.set('surname', 'Doe')

    storage.remove('name')

    expect(storage.size()).toBe(1)
    expect(storage.get<string>('name')).toBe(undefined)
  })

  test('clear', () => {
    storage.set('name', 'John')
    storage.set('surname', 'Doe')

    storage.clear()

    expect(storage.size()).toBe(0)
    expect(storage.get<string>('name')).toBe(undefined)
    expect(storage.get<string>('surname')).toBe(undefined)
  })
})
