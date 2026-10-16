import { describe, expect, test } from 'bun:test'
import { Array as PonsetyaArray } from '.'

describe('Array', () => {
  describe('constructor', () => {
    test('should create empty array when no argument is passed', () => {
      expect(new PonsetyaArray().length).toEqual(0)
    })

    test('should create array with specified length when number argument is passed', () => {
      expect(new PonsetyaArray(3).length).toEqual(3)
    })

    test('should create and return a built-in array when multiple arguments are given', () => {
      expect(new PonsetyaArray('x', 'y', 'z')).toEqual(['x', 'y', 'z'])
    })
  })

  test('compare should return true if two arrays are the same', () => {
    const arr = [1, 2, 3]

    expect(PonsetyaArray.compare(arr, arr)).toBe(true)
    expect(PonsetyaArray.compare(['x', 'y', 'z'], ['x', 'y', 'z'])).toBe(true)
    expect(PonsetyaArray.compare([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(
      PonsetyaArray.compare([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }]),
    ).toBe(true)
    expect(PonsetyaArray.compare([1, 2, 3], [4, 5, 6])).toBe(false)
    expect(PonsetyaArray.compare([1, 2, 3], [1, 2])).toBe(false)
  })

  test('insert should insert an item at a given index', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    const arr3 = [1, 2, 3]
    const arr4: number[] = []

    PonsetyaArray.insert(arr1, 1, 4, 5)
    PonsetyaArray.insert(arr2, 0, 4, 5)
    PonsetyaArray.insert(arr3, 3, 4, 5)
    PonsetyaArray.insert(arr4, 0, 1, 2, 3)

    expect(arr1).toEqual([1, 4, 5, 2, 3])
    expect(arr2).toEqual([4, 5, 1, 2, 3])
    expect(arr3).toEqual([1, 2, 3, 4, 5])
    expect(arr4).toEqual([1, 2, 3])
  })

  describe('is', () => {
    test('should return true for a boolean value', () => {
      expect(PonsetyaArray.is([])).toBe(true)
      expect(PonsetyaArray.is(['x', 'y'])).toBe(true)
    })

    test('should return false for a non-boolean value', () => {
      expect(PonsetyaArray.is(true)).toBe(false)
      expect(PonsetyaArray.is(() => null)).toBe(false)
      expect(PonsetyaArray.is(27)).toBe(false)
      expect(PonsetyaArray.is({})).toBe(false)
      expect(PonsetyaArray.is('string value')).toBe(false)
      expect(PonsetyaArray.is(NaN)).toBe(false)
      expect(PonsetyaArray.is(null)).toBe(false)
      expect(PonsetyaArray.is(undefined)).toBe(false)
    })
  })

  test('move should move an item from one index to another', () => {
    const arr: number[] = [1, 2, 3, 4, 5]
    PonsetyaArray.move(arr, 0, 2)

    expect(arr).toEqual([2, 3, 1, 4, 5])
  })

  test('remove should remove an item at a given index', () => {
    const arr: number[] = [1, 2, 3]
    PonsetyaArray.remove(arr, 1)

    expect(arr).toEqual([1, 3])
  })

  test('unique should return an array with only unique values', () => {
    const arr: number[] = [1, 2, 3, 3, 4, 4, 5, 5]

    expect(PonsetyaArray.unique(arr)).toEqual([1, 2, 3, 4, 5])
  })
})
