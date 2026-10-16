import { afterEach, describe, expect, test } from 'bun:test'
import { cookie } from '.'

const EXPIRED = 'expires=Thu, 01 Jan 1970 00:00:01 GMT'

describe('cookie', () => {
  // happy-dom keeps cookies for the whole file; clear them between tests
  afterEach(() => {
    for (const entry of document.cookie.split(';')) {
      const name = entry.split('=')[0].trim()
      if (!name) continue
      Reflect.set(document, 'cookie', `${name}=; ${EXPIRED}`)
      Reflect.set(document, 'cookie', `${name}=; path=/; ${EXPIRED}`)
    }
  })

  describe('get', () => {
    test('should return value of the specified cookie', () => {
      Reflect.set(document, 'cookie', 'name=value')
      expect(cookie.get('name')).toBe('value')
    })

    test('should return empty string when cookie does not exist', () => {
      expect(cookie.get('not-exist')).toBe('')
    })
  })

  describe('set', () => {
    test('should set a cookie', () => {
      cookie.set('name', 'value')
      expect(document.cookie).toBe('name=value')
    })

    test('should set a cookie with options', () => {
      cookie.set('name', 'value', {
        exdays: 1,
        exhours: 1,
        exminutes: 27,
        path: '/',
        secure: true,
      })
      expect(document.cookie).toBe('name=value')
    })

    test('should not expose HttpOnly cookies to document.cookie', () => {
      // Browsers ignore HttpOnly cookies written from JavaScript
      cookie.set('name', 'value', { httpOnly: true })
      expect(document.cookie).toBe('')
    })
  })

  describe('remove', () => {
    test('should remove a cookie', () => {
      Reflect.set(document, 'cookie', 'name=value; path=/')
      cookie.remove('name')
      expect(document.cookie).toBe('')
    })
  })
})
