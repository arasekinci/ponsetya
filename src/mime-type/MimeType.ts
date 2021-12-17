import mimetypes from './mimetypes.json'

/**
 * The MimeType interface provides contains information about a MIME type associated with a particular plugin.
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see MimeType http://github.com/apis/mime-type
 */

export default class MimeType {
  /**
   * Returns the MIME type of the associated plugin.
   */
  readonly type: string | undefined

  /**
   * Returns a description of the associated plugin or an empty string if there is none.
   */
  readonly description: string | undefined

  /**
   * A string containing valid file extensions for the data displayed by the plugin, or an empty string if an extension is not valid for the particular module.
   */
  readonly suffixes: string[] | undefined

  /**
   * Create a mime type.
   *
   * @param init A String specifying a desired mime type or extension
   */
  constructor(init: string) {
    const mimetype = mimetypes.find((mimetype) => {
      if (mimetype.type === init || mimetype.suffixes.includes(init)) {
        return true
      } else {
        return false
      }
    })

    if (mimetype) {
      this.type = mimetype.type
      this.description = mimetype.description
      this.suffixes = mimetype.suffixes
    }
  }
}
