export type SessionValue = string | number | boolean | object | null

/**
 * The key() method returns name of the key with the specified index.
 *
 * @param index - A Number representing the index of the key you want to get the name of
 * @returns A String, representing the name of the specified key
 */

export function key(index: number): string | undefined {
  const value = sessionStorage.key(index)

  if (value === null) {
    return undefined
  }

  return value
}

/**
 * The length() method returns the number of items stored in
 * the browsers Storage Object, for this particular domain.
 *
 * @returns A Integer, representing the number of stored items
 */

export function length(): number {
  return sessionStorage.length
}

/**
 * The get() method returns value of the specified Session Storage object item.
 *
 * @param key - A String specifying the name of the key you want to get the value of
 * @returns A String, representing the value of the specified key
 */

export function get<T = string>(key: string): T | undefined {
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

export function set(key: string, value: SessionValue): void {
  sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * The remove() method removes the specified Session Storage object item.
 *
 * @param key - A String specifying the name of the item you want to remove
 */

export function remove(key: string): void {
  sessionStorage.removeItem(key)
}

/**
 * The clear() method removes all the Session Storage object item for this domain.
 */

export function clear(): void {
  sessionStorage.clear()
}
