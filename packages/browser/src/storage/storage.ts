import type { StorageValue } from './storage.type'

/**
 * The storage object provides an interface to the browser's local storage object.
 * You can use it to set, get, and remove key/value pairs stored in the local storage object.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/browser_src.Storage-1.html | String} for more information.
 */

export const storage = {
  /**
   * The key() method returns name of the key with the specified index.
   *
   * @param index - A Number representing the index of the key you want to get the name of.
   * @returns A String representing the name of the specified key.
   */
  key(index: number): string | undefined {
    const value = localStorage.key(index)

    if (value === null) {
      return undefined
    }

    return value
  },

  /**
   * The size() method returns the number of items stored in
   * the browsers Storage Object, for this particular domain.
   *
   * @returns A Integer, representing the number of stored items.
   */
  size(): number {
    return localStorage.length
  },

  /**
   * The get() method returns value of the specified Local Storage object item.
   *
   * @param key - A String specifying the name of the key you want to get the value of.
   * @returns A String, representing the value of the specified key.
   */
  get<T = string>(key: string): T | undefined {
    const value = localStorage.getItem(key)

    if (value === null) {
      return undefined
    }

    return JSON.parse(value)
  },

  /**
   * The set() method sets the value of the specified Local Storage object item.
   *
   * @param key - A String specifying the name of the key you want to set the value of.
   * @param value - A String specifying the value of the key you want to set the value of.
   */
  set(key: string, value: StorageValue): void {
    localStorage.setItem(key, JSON.stringify(value))
  },

  /**
   * The remove() method removes the specified Local Storage object item.
   *
   * @param key - A String specifying the name of the item you want to remove.
   */
  remove(key: string): void {
    localStorage.removeItem(key)
  },

  /**
   * The clear() method removes all the Local Storage object item for this domain.
   */
  clear(): void {
    localStorage.clear()
  },
}
