/**
 * An object that can be used to specify options when setting a cookie.
 */

export type CookieOption = {
  /** The number of days for which the cookie should be valid. */
  exdays?: number
  /** The number of hours for which the cookie should be valid. */
  exhours?: number
  /** The number of minutes for which the cookie should be valid. */
  exminutes?: number
  /** A boolean value that indicates whether the cookie should be accessible only over HTTP. */
  httpOnly?: boolean
  /** A string that specifies the path for which the cookie should be valid. */
  path?: string
  /** A boolean value that indicates whether the cookie should be sent over a secure (HTTPS) connection. */
  secure?: boolean
}

/**
 * The get() method returns value of the specified Cookie item.
 *
 * @param name - The name of the cookie to retrieve.
 * @returns The value of the cookie. If the cookie does not exist, an empty string is returned.
 */

export function get(name: string): string {
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
}

/**
 * The remove() method removes the specified Cookie item.
 *
 * @param name - The name of the cookie to remove.
 */

export function remove(name: string): void {
  document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

/**
 * The set() method sets the value of the specified Cookie item.
 *
 * @param name - The name of the cookie to set.
 * @param value - The value to store in the cookie.
 * @param options - Additional options to configure the cookie.
 */

export function set(
  name: string,
  value: string,
  options: CookieOption = {}
): void {
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
}
