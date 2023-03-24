import { gettype } from '../gettype'
import { StringConstructor } from './string.constructor'

/**
 * String utility class that provides various methods for strings.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/javascript_src.String.html | String} for more information.
 */

export abstract class String extends StringConstructor {
  /**
   * The decode() method decrypts the given encrypted value and returns a text.
   *
   * @param str - A String representing the value you want to decrypt.
   * @returns Decrypted value.
   */
  static decode(str: string): string {
    return decodeURIComponent(atob(str))
  }

  /**
   * The encode() method encrypts the given value and returns a string.
   *
   * @param str - A String representing the value you want to encrypt.
   * @returns Encrypted value.
   */
  static encode(str: string): string {
    return btoa(encodeURIComponent(str))
  }

  /**
   * The is() method determines whether the passed value is an String.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the variable is a string.
   */
  static is(value: unknown): boolean {
    return gettype(value) === 'string'
  }

  /**
   * The template() method lets you change variables in the text.
   *
   * @param str - A String that specifies the text you want to replace.
   * @param params - Values to insert into string instead of placeholder.
   * @returns A string replaced in variables.
   */
  static template(
    str: string,
    params: Record<string, string | number>
  ): string {
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const value = params[key]
        const regex = new RegExp(`{{${key}}}`, 'g')

        str = str.replace(regex, value.toString())
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
  static truncate(str: string, limit?: number): string {
    const end = str.indexOf(' ', limit)

    if (end >= 0) {
      return str.substring(0, end) + '...'
    }

    return str
  }
}