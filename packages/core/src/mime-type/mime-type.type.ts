export type MimeTypeSource = 'iana' | 'apache' | 'nginx'

export type MimeTypeEntry = {
  /** The MIME type string. */
  readonly type: string
  /** The character set of the MIME type. */
  readonly charset?: string
  /** The source of the MIME type. */
  readonly source?: MimeTypeSource
  /** A boolean value indicating whether the MIME type is compressible. */
  readonly compressible?: boolean
  /** The default extension associated with the MIME type. */
  readonly extension?: string
  /** An array of all extensions associated with the MIME type. */
  readonly extensions?: string[]
}
