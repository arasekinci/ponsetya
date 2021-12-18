import mimetypes from './mimetypes.json'

/**
 * The MimeType interface provides contains information about a MIME type associated with a particular plugin.
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see MimeType http://github.com/apis/mime-type
 */

export default class MimeType {
  /**
   * Returns the kind of the associated plugin.
   */
  readonly kind: string | undefined
  /**
   * Returns a description of the associated plugin or an empty string if there is none.
   */
  readonly description: string | undefined
  /**
   * Returns the MIME type of the associated plugin.
   */
  readonly type: string | undefined
  /**
   * Returns the MIME types of the associated plugin.
   */
  readonly types: string[] | undefined
  /**
   * A string specifying the recommended file extension for the data displayed by the plug-in.
   */
  readonly extension: string | undefined
  /**
   * A string containing valid file extensions for the data displayed by the plugin, or an empty string if an extension is not valid for the particular module.
   */
  readonly extensions: string[] | undefined

  /**
   * Create a mime type.
   *
   * @param init A String specifying a desired mime type or extension
   */
  constructor(init: string) {
    const mimetype = mimetypes.find((mimetype) => {
      if (mimetype.types.includes(init) || mimetype.extensions.includes(init)) {
        return true
      } else {
        return false
      }
    })

    if (mimetype) {
      this.kind = mimetype.kind
      this.description = mimetype.description
      this.type = mimetype.types[0]
      this.types = mimetype.types
      this.extension = mimetype.extensions[0]
      this.extensions = mimetype.extensions
    }
  }
}
