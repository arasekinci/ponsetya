import { cookie } from '.'

describe('cookie', () => {
  describe('get', () => {
    test('should return value of the specified cookie', () => {
      document.cookie = 'name=value'
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
        httpOnly: true,
        path: '/',
        secure: true,
      })
      expect(document.cookie).toBe('name=value')
    })
  })

  describe('remove', () => {
    test('should remove a cookie', () => {
      document.cookie = 'name=value'
      cookie.remove('name')
      expect(document.cookie).toBe('')
    })
  })
})
