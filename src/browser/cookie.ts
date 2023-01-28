export type CookieOption = {
  /**
   * param description to be entered
   */
  exdays?: number
  /**
   * param description to be entered
   */
  exhours?: number
  /**
   * param description to be entered
   */
  exminutes?: number
  /**
   * param description to be entered
   */
  httpOnly?: boolean
  /**
   * param description to be entered
   */
  path?: string
  /**
   * param description to be entered
   */
  secure?: boolean
}

/**
 * The get() method returns value of the specified Cookie item.
 *
 * @param name - param description to be entered
 * @return return description to be entered
 */

export const get = (name: string): string => {
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
 * @param name - param description to be entered
 * @return return description to be entered
 */

export const remove = (name: string): void => {
  document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

/**
 * The set() method sets the value of the specified Cookie item.
 *
 * @param name - param description to be entered
 * @param value - param description to be entered
 * @param options - param description to be entered
 * @return return description to be entered
 */

export const set = (
  name: string,
  value: string,
  options: CookieOption = {}
): void => {
  const { exminutes, exhours, exdays } = options
  let expires = ''

  if (exminutes || exhours || exdays) {
    const today = new Date()
    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour

    if (exminutes) {
      today.setTime(today.getTime() + exminutes * minute)
    } else if (exhours) {
      today.setTime(today.getTime() + exhours * hour)
    } else if (exdays) {
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
