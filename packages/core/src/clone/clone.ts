/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * The clone() method clones the passed value and returns it with a new reference.
 *
 * @param value - The value to clone.
 * @param options - Optional options to control the cloning process.
 * @returns The cloned value with a new reference.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/core/references/clone | clone} for more information.
 */
export function clone(
  value: any,
  options?: {
    /** An optional list of Transferable objects that should be included in the cloning process. */
    transfer?: Transferable[]
  },
): any {
  if (!value) {
    return value
  }

  if (typeof structuredClone === 'function') {
    return structuredClone(value, options)
  }

  if (value instanceof Array) {
    const array = [...value]

    for (let i = 0; i < value.length; i++) {
      array[i] = clone(value[i])
    }

    return array
  }

  if (value instanceof Date) {
    return new Date(value.getTime())
  }

  if (value instanceof Object) {
    const object = { ...value }

    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        object[key] = clone(object[key])
      }
    }

    return object
  }

  return value
}
