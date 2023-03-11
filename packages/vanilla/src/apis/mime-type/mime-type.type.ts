export type MimeTypeSource = 'iana' | 'apache' | 'nginx'

export type MimeTypeEntry = {
  readonly type: string
  readonly charset?: string
  readonly source?: MimeTypeSource
  readonly compressible?: boolean
  readonly extension?: string
  readonly extensions?: string[]
}
