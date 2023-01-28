import { getname } from '../../src/utils'

describe('getname', () => {
  test('should return detailed primitive types', () => {
    expect(getname(27)).toBe('number Integer')
    expect(getname(BigInt(9007199254740991))).toBe('number BigInt')
    expect(getname(1n)).toBe('number BigInt')
    expect(getname('Lorem ipsum')).toBe('string String')
  })

  test('should return detailed object types', () => {
    expect(getname(new Number())).toBe('object Number')
    expect(getname(new String())).toBe('object String')
    expect(getname({})).toBe('object Object')
    expect(getname([])).toBe('object Array')
    expect(getname(true)).toBe('object Boolean')
    expect(getname(NaN)).toBe('object NaN')
    expect(getname(undefined)).toBe('object Undefined')
    expect(getname(null)).toBe('object Null')
    expect(getname(() => '')).toBe('object Function')
    expect(getname(/[a-z]/)).toBe('object RegExp')
    expect(getname(Symbol(''))).toBe('object Symbol')
    expect(getname(new Date())).toBe('object Date')
  })

  test('should return error types in detail', () => {
    expect(getname(new Error())).toBe('error Error')
    expect(getname(new EvalError())).toBe('error EvalError')
    expect(getname(new RangeError())).toBe('error RangeError')
    expect(getname(new ReferenceError())).toBe('error ReferenceError')
    expect(getname(new SyntaxError())).toBe('error SyntaxError')
    expect(getname(new TypeError())).toBe('error TypeError')
    expect(getname(new URIError())).toBe('error URIError')
  })
})
