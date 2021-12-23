import type { ClassNameArguments } from './types'

/**
 * The classnames() method returns the class names conditionally joining.
 *
 * @returns A String, representing the name of the generated class
 *
 * @author Aras Ekinci <dev@arasekinci.com>
 * @see classnames http://github.com/functions/classnames
 */

export default function classnames(...args: ClassNameArguments): string {
  const classNames: string[] = []

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (arg) {
      if (typeof arg === 'string') {
        classNames.push(arg)
      } else if (typeof arg === 'object') {
        if (arg.toString === Object.prototype.toString) {
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
        } else {
          classNames.push(arg.toString())
        }
      }
    }
  }

  return classNames.join(' ')
}
