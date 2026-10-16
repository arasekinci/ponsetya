/**
 * The clone() method clones the passed value and returns it with a new reference.
 *
 * @param value - The value to clone.
 * @param options - Optional options to control the cloning process.
 * @returns The cloned value with a new reference.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/core/references/clone | clone} for more information.
 */
export function clone<T>(
  value: T,
  options?: {
    /** An optional list of Transferable objects that should be included in the cloning process. */
    transfer?: Transferable[]
  },
): T {
  if (!value) {
    return value
  }

  if (typeof structuredClone === 'function') {
    return structuredClone(value, options)
  }

  if (Array.isArray(value)) {
    const array: unknown[] = [...value]

    for (let i = 0; i < value.length; i++) {
      array[i] = clone(value[i])
    }

    return array as T
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as T
  }

  if (value instanceof Object) {
    const object: Record<string, unknown> = {
      ...(value as Record<string, unknown>),
    }

    for (const key of Object.keys(object)) {
      object[key] = clone(object[key])
    }

    return object as T
  }

  return value
}
