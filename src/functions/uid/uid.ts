/**
 * The uid() method returns a random 25-character unique value.
 *
 * @returns A String, representing the unique value generated
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see uid http://github.com/functions/uid
 */

export default function uid(): string {
  return 'xxxxxxxxxxxx5xxxxxxxxxxxx'.replace(/x/g, (letter) => {
    const random = (Math.random() * 16) | 0
    const number = letter === 'x' ? random : (random & 0x3) | 0x8

    return number.toString(16)
  })
}
