import { gettype } from './utils'

/**
 * The decode() method decrypts the given encrypted value and returns a text.
 *
 * @param str - A String representing the value you want to decrypt.
 * @returns Decrypted value.
 */

export function decode(str: string): string {
  return decodeURIComponent(atob(str))
}

/**
 * The encode() method encrypts the given value and returns a string.
 *
 * @param str - A String representing the value you want to encrypt.
 * @returns Encrypted value.
 */

export function encode(str: string): string {
  return btoa(encodeURIComponent(str))
}

/**
 * The is() method determines whether the passed value is an String.
 *
 * @param value The value to be checked.
 * @returns A boolean indicating whether the variable is a string.
 */

export function is(value: unknown): boolean {
  return gettype(value) === 'string'
}

/**
 * The template() method lets you change variables in the text.
 *
 * @param str - A String that specifies the text you want to replace.
 * @param params - Values to insert into string instead of placeholder.
 * @returns A string replaced in variables.
 */

export function template(str: string, ...params: (string | number)[]): string {
  const matchs = str.match(/\{{.+?\}}/g)

  if (matchs) {
    const length = params.length

    for (let i = 0; i < length; i++) {
      const param = params[i]
      const match = matchs[i]

      str = str.replace(new RegExp(match, 'g'), param.toString())
    }
  }

  return str
}

/**
 * The truncate() method truncates the text from a full word.
 *
 * @param str - A String that specifies the text you want to shorten.
 * @param limit - A Number to limit the text character size.
 * @returns A truncated or empty string.
 */

export function truncate(str: string, limit?: number): string {
  const end = str.indexOf(' ', limit)

  if (end >= 0) {
    return str.substring(0, end) + '...'
  }

  return str
}
