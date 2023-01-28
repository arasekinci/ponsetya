export type ClassNameArgument = string | number | boolean | undefined | null

export type ClassNameArgumentObject = {
  [key: string]: ClassNameArgument
}

export type ClassNameArguments = Array<
  ClassNameArgument | ClassNameArgumentObject
>

/**
 * The classnames() method returns the class names conditionally joining.
 *
 * @returns A String representing the name of the generated class
 */

export function classnames(...args: ClassNameArguments): string {
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
