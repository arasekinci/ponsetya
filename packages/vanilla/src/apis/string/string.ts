import { StringConstructor } from '../../constructors'
import { gettype } from '../../functions'

/**
 * String utility class that provides various methods for strings.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/classes/vanilla_src.String.html | String} for more information.
 */

export abstract class String extends StringConstructor {
  /**
   * The decode() method decrypts the given encrypted value and returns a text.
   *
   * @param str - A String representing the value you want to decrypt.
   * @returns Decrypted value.
   *
   * @example
   * ```ts
   * const encoded = 'SGVsbG8gd29ybGQh'
   * const decoded = String.decode(encoded)
   *
   * console.log(decoded) // "Hello world!"
   * ```
   */
  static decode(str: string): string {
    return decodeURIComponent(atob(str))
  }

  /**
   * The encode() method encrypts the given value and returns a string.
   *
   * @param str - A String representing the value you want to encrypt.
   * @returns Encrypted value.
   *
   * @example
   * ```ts
   * const str = 'Hello world!'
   * const encoded = String.encode(str)
   *
   * console.log(encoded) // "SGVsbG8gd29ybGQh"
   * ```
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
   *
   * @example
   * ```ts
   * const str = "Hello, I'm {{name}} and I'm {{age}} years old."
   * const templated = String.template(str, 'John', 27)
   *
   * console.log(templated) // "Hello, I'm John and I'm 27 years old."
   * ```
   */
  static template(str: string, ...params: (string | number)[]): string {
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
   *
   * @example
   * ```ts
   * const str = 'Lorem ipsum dolor sit amet.'
   * const truncated = String.truncate(str, 11)
   *
   * console.log(truncated) // Lorem ipsum...
   * ```
   */
  static truncate(str: string, limit?: number): string {
    const end = str.indexOf(' ', limit)

    if (end >= 0) {
      return str.substring(0, end) + '...'
    }

    return str
  }
}
