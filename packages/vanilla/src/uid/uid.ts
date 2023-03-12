/**
 * The uid() method returns a random 25-character unique value.
 *
 * @returns A String, representing the unique value generated
 */

export function uid(): string {
  return 'xxxxxxxxxxxx5xxxxxxxxxxxx'.replace(/x/g, () => {
    const random = (Math.random() * 16) | 0

    return random.toString(16)
  })
}
