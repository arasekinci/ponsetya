import type { StorageValue } from './types'

/**
 * The key() method returns name of the key with the specified index.
 *
 * @param index A Number representing the index of the key you want to get the name of
 * @returns A String representing the name of the specified key
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see storage http://github.com/utils/storage#key
 */

export const key = (index: number): string | undefined => {
  const value = localStorage.key(index)

  if (value === null) {
    return undefined
  }

  return value
}

/**
 * The length() method returns the number of items stored in
 * the browsers Storage Object, for this particular domain.
 *
 * @returns A Integer, representing the number of stored items.
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see storage http://github.com/utils/storage#length
 */

export const length = (): number => localStorage.length

/**
 * The get() method returns value of the specified Local Storage object item.
 *
 * @param key A String specifying the name of the key you want to get the value of
 * @returns A String, representing the value of the specified key
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see storage http://github.com/utils/storage#get
 */

export const get = <T = string>(key: string): T | undefined => {
  const value = localStorage.getItem(key)

  if (value === null) {
    return undefined
  }

  return JSON.parse(value)
}

/**
 * The set() method sets the value of the specified Local Storage object item.
 *
 * @param key A String specifying the name of the key you want to set the value of
 * @param value A String specifying the value of the key you want to set the value of
 * @returns No return value
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see storage http://github.com/utils/storage#set
 */

export const set = (key: string, value: StorageValue): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * The remove() method removes the specified Local Storage object item.
 *
 * @param key A String specifying the name of the item you want to remove
 * @returns No return value
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see storage http://github.com/utils/storage#remove
 */

export const remove = (key: string): void => {
  localStorage.removeItem(key)
}

/**
 * The clear() method removes all the Local Storage object item for this domain.
 *
 * @returns No return value
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see storage http://github.com/utils/storage#clear
 */

export const clear = (): void => {
  localStorage.clear()
}
