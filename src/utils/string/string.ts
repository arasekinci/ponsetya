/**
 * The truncate() method truncates the text from a full word.
 *
 * @param str A String that specifies the text you want to shorten
 * @param limit A Number to limit the text character size
 * @returns A truncated or empty string
 */

export const truncate = (str: string, limit = 140): string => {
  if (str) {
    const end = str.indexOf(' ', limit)

    if (end >= 0) {
      return str.substring(0, end) + '...'
    }

    return str
  }

  return ''
}
