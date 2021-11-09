/**
 * The zpad() method returns a string, padding the given number with zero.
 *
 * @param num A Number that you want to add zero
 * @returns Zero-added string
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see number http://github.com/utils/number#zpad
 */

export const zpad = (num: number): string => {
  return `0${num}`.slice(-2)
}
