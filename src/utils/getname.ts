export type NameErrorTypes =
  | 'error Error'
  | 'error EvalError'
  | 'error RangeError'
  | 'error ReferenceError'
  | 'error SyntaxError'
  | 'error TypeError'
  | 'error URIError'

export type NameObjectTypes =
  | 'object Boolean'
  | 'object Date'
  | 'object Function'
  | 'object History'
  | 'object HTMLDocument'
  | 'object Location'
  | 'object Map'
  | 'object NaN'
  | 'object Navigator'
  | 'object Null'
  | 'object Object'
  | 'object RegExp'
  | 'object Screen'
  | 'object Set'
  | 'object Symbol'
  | 'object Undefined'
  | 'object Window'

export type NameTypes =
  | NameErrorTypes
  | NameObjectTypes
  | 'number Integer'
  | 'number BigInt'
  | 'string String'

/**
 * The getname() method returns the kind and type of variables.
 *
 * @param value - An expression representing the object whose kind is to be returned
 * @returns A String, specifying the specified data type
 */

export function getname(value: unknown): NameTypes {
  let name = Object.prototype.toString.call(value)
  name = name.replace('[', '')
  name = name.replace(']', '')

  if (typeof value === 'number') {
    if (isNaN(value)) {
      return 'object NaN'
    }

    return 'number Integer'
  } else if (typeof value === 'bigint') {
    return 'number BigInt'
  } else if (typeof value === 'string') {
    return 'string String'
  } else if (typeof value === 'object') {
    if (name === 'object Error') {
      if (value instanceof EvalError) {
        return 'error EvalError'
      } else if (value instanceof RangeError) {
        return 'error RangeError'
      } else if (value instanceof ReferenceError) {
        return 'error ReferenceError'
      } else if (value instanceof SyntaxError) {
        return 'error SyntaxError'
      } else if (value instanceof TypeError) {
        return 'error TypeError'
      } else if (value instanceof URIError) {
        return 'error URIError'
      }

      return 'error Error'
    }
  }

  return name as NameTypes
}
