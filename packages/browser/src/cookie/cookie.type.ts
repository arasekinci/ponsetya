/**
 * An object that can be used to specify options when setting a cookie.
 */
export type CookieOption = {
  /** The number of days for which the cookie should be valid. */
  exdays?: number
  /** The number of hours for which the cookie should be valid. */
  exhours?: number
  /** The number of minutes for which the cookie should be valid. */
  exminutes?: number
  /** A boolean value that indicates whether the cookie should be accessible only over HTTP. */
  httpOnly?: boolean
  /** A string that specifies the path for which the cookie should be valid. */
  path?: string
  /** A boolean value that indicates whether the cookie should be sent over a secure (HTTPS) connection. */
  secure?: boolean
}
