import type { SessionValue } from './session.type'

/**
 * The Session class provides an interface to the browser's session storage object.
 * You can use it to set, get, and remove key/value pairs stored in the session storage object.
 *
 * @example
 * const session = new Session()
 * session.set('username', 'john')
 * const username = session.get('username')
 */

export class Session {
  /**
   * The key() method returns name of the key with the specified index.
   *
   * @param index - A Number representing the index of the key you want to get the name of
   * @returns A String representing the name of the specified key
   */
  key(index: number): string | undefined {
    const value = sessionStorage.key(index)

    if (value === null) {
      return undefined
    }

    return value
  }

  /**
   * The size() method returns the number of items stored in
   * the browsers Storage Object, for this particular domain.
   *
   * @returns A Integer, representing the number of stored items
   */
  size(): number {
    return sessionStorage.length
  }

  /**
   * The get() method returns value of the specified Session Storage object item.
   *
   * @param key - A String specifying the name of the key you want to get the value of
   * @returns A String, representing the value of the specified key
   */
  get<T = string>(key: string): T | undefined {
    const value = sessionStorage.getItem(key)

    if (value === null) {
      return undefined
    }

    return JSON.parse(value)
  }

  /**
   * The set() method sets the value of the specified Session Storage object item.
   *
   * @param key - A String specifying the name of the key you want to set the value of
   * @param value - A String specifying the value of the key you want to set the value of
   */
  set(key: string, value: SessionValue): void {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * The remove() method removes the specified Session Storage object item.
   *
   * @param key - A String specifying the name of the item you want to remove
   */
  remove(key: string): void {
    sessionStorage.removeItem(key)
  }

  /**
   * The clear() method removes all the Session Storage object item for this domain.
   */
  clear(): void {
    sessionStorage.clear()
  }
}
