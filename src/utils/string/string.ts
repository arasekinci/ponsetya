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

/**
 * The escape() method clears the special characters in the text.
 *
 * @param str A String specifying the text you want to clear
 * @returns A cleared or empty string
 */

export const escape = (str: string): string => {
  if (str) {
    return str
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[^a-zA-Z0-9 ".',?]/g, '')
  }

  return ''
}

/**
 * The slugify() method cleans and fixes by text URL pathname.
 *
 * @param str A String specifying the text you want to convert
 * @returns A slugified or empty string
 */

export const slugify = (str: string): string => {
  if (str) {
    return str
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
  }

  return ''
}

/**
 * The capitalize() method capitalizes the first letter of text and lowers the rest.
 *
 * @param str A String specifying the text you want to convert
 * @returns A capitalized or empty string
 */

export const capitalize = (str: string): string => {
  if (str) {
    return escape(str).charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  return ''
}

/**
 *The lowercase() method will reduce all words in the text.
 *
 * @param str A String specifying the text you want to convert
 * @returns A lowercase or empty string
 */

export const lowercase = (str: string): string => {
  if (str) {
    return escape(str).toLowerCase()
  }

  return ''
}

/**
 * The uppercase() method capitalizes all words in the text and converts spaces to underscores.
 *
 * @param str A String specifying the text you want to convert
 * @returns A uppercase or empty string
 */

export const uppercase = (str: string): string => {
  if (str) {
    return escape(str).toUpperCase()
  }

  return ''
}

/**
 * The camelcase() method reduces the first letter of the text
 * and capitalizes the first letter of each remaining word.
 *
 * @param str A String specifying the text you want to convert
 * @returns A camelcase or empty string
 */

export const camelcase = (str: string): string => {
  if (str) {
    return slugify(str)
      .split('-')
      .map((word, index) => {
        if (index) {
          return capitalize(word)
        }

        return word.toLowerCase()
      })
      .join('')
  }

  return ''
}

/**
 * The camelcase() method capitalizes the first letter of each word of the text.
 *
 * @param str A String specifying the text you want to convert
 * @returns A pascalcase or empty string
 */

export const pascalcase = (str: string): string => {
  if (str) {
    return slugify(str)
      .split('-')
      .map((word) => capitalize(word))
      .join('')
  }

  return ''
}

/**
 * The kebabcase() method shrinks all words in the text and converts spaces to hyphens.
 *
 * @param str A String specifying the text you want to convert
 * @returns A kebabcase or empty string
 */

export const kebabcase = (str: string): string => {
  if (str) {
    return slugify(str).toLowerCase()
  }

  return ''
}

/**
 * The snakecase() method shrinks all words in the text and converts spaces to underscore.
 *
 * @param str A String specifying the text you want to convert
 * @returns A snakecase or empty string
 */

export const snakecase = (str: string, uppercase?: boolean): string => {
  if (str) {
    const snake = slugify(str).replace(/-/g, '_')

    if (uppercase) {
      return snake.toUpperCase()
    }

    return snake
  }

  return ''
}
