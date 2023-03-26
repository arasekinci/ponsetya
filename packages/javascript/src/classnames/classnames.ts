import type { ClassNameArgument } from './classnames.type'

/**
 * The classnames() method returns the class names conditionally joining.
 *
 * @returns A String representing the name of the generated class
 *
 * @see {@link https://arasekinci.github.io/ponsetya/javascript/references/classnames | classnames} for more information.
 */

export function classnames(...args: ClassNameArgument[]): string {
  const classNames: string[] = []

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (arg) {
      if (typeof arg === 'string') {
        classNames.push(arg)
      } else if (typeof arg === 'object') {
        for (const key in arg) {
          const value = arg[key]

          if (Object.prototype.hasOwnProperty.call(arg, key) && value) {
            if (typeof value === 'string') {
              classNames.push(`${key}-${value}`)
            } else {
              classNames.push(key)
            }
          }
        }
      }
    }
  }

  return classNames.join(' ')
}
