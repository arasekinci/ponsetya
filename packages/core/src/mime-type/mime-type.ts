import mimedb from 'mime-db'

import type { MimeTypeEntry, MimeTypeSource } from './mime-type.type'

const mimetypes: MimeTypeEntry[] = Object.keys(mimedb).map((type) => {
  const mimetype = mimedb[type]

  return {
    type,
    charset: mimetype.charset,
    source: mimetype.source,
    compressible: mimetype.compressible,
    extension: mimetype.extensions ? mimetype.extensions[0] : undefined,
    extensions: mimetype.extensions ? [...mimetype.extensions] : undefined,
  }
})

/**
 * Represents a MIME type associated with a particular plugin.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/core/references/mime-type | MimeType} for more information.
 */

export class MimeType {
  /** The MIME type string. */
  readonly type: string | undefined
  /** The character set of the MIME type. */
  readonly charset: string | undefined
  /** The source of the MIME type. */
  readonly source: MimeTypeSource | undefined
  /** A boolean value indicating whether the MIME type is compressible. */
  readonly compressible: boolean | undefined
  /** The default extension associated with the MIME type. */
  readonly extension: string | undefined
  /** An array of all extensions associated with the MIME type. */
  readonly extensions: string[] | undefined

  /**
   * Constructs a new MimeType object.
   *
   * @param type - The MIME type string.
   */
  constructor(type: string) {
    const mimetype = mimetypes.find((mimetype) => mimetype.type === type)

    if (mimetype) {
      this.type = mimetype.type
      this.charset = mimetype.charset
      this.source = mimetype.source
      this.compressible = mimetype.compressible
      this.extension = mimetype.extension
      this.extensions = mimetype.extensions
    }
  }

  /**
   * Finds the first MIME type entry in the mimetypes array that satisfies the provided testing function.
   *
   * @param predicate - A function that accepts a MIME type entry and returns a boolean value indicating whether the entry satisfies a certain condition.
   * @returns The first MIME type entry that satisfies the testing function, or undefined if none is found.
   */
  static find(
    predicate: (value: MimeTypeEntry, index: number) => boolean | undefined
  ): MimeTypeEntry | undefined {
    return mimetypes.find(predicate)
  }

  /**
   * Returns an array of all MIME type entries in the mimetypes array that satisfy the provided testing function.
   *
   * @param predicate - A function that accepts a MIME type entry and returns a boolean value indicating whether the entry satisfies a certain condition.
   * @returns An array of all MIME type entries that satisfy the testing function.
   */
  static filter(
    predicate: (value: MimeTypeEntry, index: number) => boolean | undefined
  ): MimeTypeEntry[] {
    return mimetypes.filter(predicate)
  }
}
