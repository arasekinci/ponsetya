import type { CookieOption } from './cookie.type'

/**
 * The Cookie object provides an interface to the browser's cookie.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/browser_src.Cookie-1.html | cookie} for more information.
 */

export const cookie = {
  /**
   * The get() method returns value of the specified Cookie item.
   *
   * @param name - The name of the cookie to retrieve.
   * @returns The value of the cookie. If the cookie does not exist, an empty string is returned.
   */
  get(name: string): string {
    const cookies = document.cookie.replace(/\s/gi, '').split(';')

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]

      if (cookie.indexOf(name) === 0) {
        return decodeURIComponent(
          cookie.substring(name.length + 1, cookie.length)
        )
      }
    }

    return ''
  },

  /**
   * The remove() method removes the specified Cookie item.
   *
   * @param name - The name of the cookie to remove.
   */
  remove(name: string): void {
    document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  },

  /**
   * The set() method sets the value of the specified Cookie item.
   *
   * @param name - The name of the cookie to set.
   * @param value - The value to store in the cookie.
   * @param options - Additional options to configure the cookie.
   */
  set(name: string, value: string, options: CookieOption = {}): void {
    const { exminutes, exhours, exdays } = options
    let expires = ''

    if (exminutes || exhours || exdays) {
      const today = new Date()
      const minute = 60 * 1000
      const hour = 60 * minute
      const day = 24 * hour

      if (exminutes) {
        today.setTime(today.getTime() + exminutes * minute)
      }

      if (exhours) {
        today.setTime(today.getTime() + exhours * hour)
      }

      if (exdays) {
        today.setTime(today.getTime() + exdays * day)
      }

      expires = today.toUTCString()
    }

    const httpOnly = options.httpOnly ? 'HttpOnly;' : ''
    const maxAge = expires ? `expires=${expires};` : ''
    const path = options.path ? `path=${options.path};` : ''
    const secure = options.secure ? 'secure;' : ''

    document.cookie = `${name}=${encodeURIComponent(
      value
    )};${maxAge}${path}${secure}${httpOnly}`
  },
}
