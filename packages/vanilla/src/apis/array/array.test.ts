import { Array } from '.'

describe('Array', () => {
  test('append should add an item to the end of an array', () => {
    const arr: number[] = [1, 2, 3]
    const item = 4
    Array.append(arr, item)

    expect(arr).toEqual([1, 2, 3, 4])
  })

  test('average should return the average of an array of numbers', () => {
    const arr: number[] = [1, 2, 3, 4, 5]

    expect(Array.average(arr)).toBe(3)
  })

  test('compare should return true if two arrays are the same', () => {
    const arr = [1, 2, 3]

    expect(Array.compare(arr, arr)).toBe(true)
    expect(Array.compare(['x', 'y', 'z'], ['x', 'y', 'z'])).toBe(true)
    expect(Array.compare([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(Array.compare([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])).toBe(true)
    expect(Array.compare([1, 2, 3], [4, 5, 6])).toBe(false)
    expect(Array.compare([1, 2, 3], [1, 2])).toBe(false)
  })

  test('even should return an array of even numbers', () => {
    const arr: number[] = [1, 2, 3, 4, 5]

    expect(Array.even(arr)).toEqual([2, 4])
  })

  test('get should return the item at a given index', () => {
    const arr: number[] = [1, 2, 3]

    expect(Array.get(arr, 1)).toBe(2)
    expect(Array.get(arr, 2)).toBe(3)
  })

  test('insert should insert an item at a given index', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    const arr3 = [1, 2, 3]
    const arr4 = []

    Array.insert(arr1, 1, 4, 5)
    Array.insert(arr2, 0, 4, 5)
    Array.insert(arr3, 3, 4, 5)
    Array.insert(arr4, 0, 1, 2, 3)

    expect(arr1).toEqual([1, 4, 5, 2, 3])
    expect(arr2).toEqual([4, 5, 1, 2, 3])
    expect(arr3).toEqual([1, 2, 3, 4, 5])
    expect(arr4).toEqual([1, 2, 3])
  })

  describe('is', () => {
    test('should return true for a boolean value', () => {
      expect(Array.is([])).toBe(true)
      expect(Array.is(['x', 'y'])).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(Array.is(true)).toBe(false)
      expect(Array.is(() => null)).toBe(false)
      expect(Array.is(27)).toBe(false)
      expect(Array.is({})).toBe(false)
      expect(Array.is('string value')).toBe(false)
      expect(Array.is(NaN)).toBe(false)
      expect(Array.is(null)).toBe(false)
      expect(Array.is(undefined)).toBe(false)
    })
  })

  test('max should return the maximum value of an array', () => {
    const arr: number[] = [1, 2, 3, 4, 5]

    expect(Array.max(arr)).toBe(5)
  })

  test('min should return the minimum value of an array', () => {
    const arr: number[] = [1, 2, 3, 4, 5]

    expect(Array.min(arr)).toBe(1)
  })

  test('move should move an item from one index to another', () => {
    const arr: number[] = [1, 2, 3, 4, 5]
    Array.move(arr, 0, 2)

    expect(arr).toEqual([2, 3, 1, 4, 5])
  })

  test('odd should return an array of odd numbers', () => {
    const arr: number[] = [1, 2, 3, 4, 5]

    expect(Array.odd(arr)).toEqual([1, 3, 5])
  })

  test('prepend should add an item to the beginning of an array', () => {
    const arr: number[] = [1, 2, 3]
    const item = 0
    Array.prepend(arr, item)

    expect(arr).toEqual([0, 1, 2, 3])
  })

  test('remove should remove an item at a given index', () => {
    const arr: number[] = [1, 2, 3]
    Array.remove(arr, 1)

    expect(arr).toEqual([1, 3])
  })

  test('sum should return the sum of an array of numbers', () => {
    const arr: number[] = [1, 2, 3, 4, 5]

    expect(Array.sum(arr)).toBe(15)
  })

  test('unique should return an array with only unique values', () => {
    const arr: number[] = [1, 2, 3, 3, 4, 4, 5, 5]

    expect(Array.unique(arr)).toEqual([1, 2, 3, 4, 5])
  })

  test('update should update an item at a given index', () => {
    const arr: number[] = [1, 2, 3]
    const item = 4
    Array.update(arr, 1, item)

    expect(arr).toEqual([1, 4, 3])
  })
})
