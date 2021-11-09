/**
 * The encode() method encrypts the given value and returns a string.
 *
 * @param value A String, representing the value you want to encrypt
 * @returns Encrypted value
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see crypto http://github.com/utils/crypto#encode
 */

export const encode = (value: string): string => {
  return btoa(encodeURIComponent(value))
}

/**
 * The decode() method decrypts the given encrypted value and returns a text.
 *
 * @param value A String, representing the value you want to decrypt
 * @returns Decrypted value
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see crypto http://github.com/utils/crypto#decode
 */

export const decode = (value: string): string => {
  try {
    return decodeURIComponent(atob(value))
  } catch (err) {
    return ''
  }
}
