export type ClassNameArgument = string | number | boolean | undefined | null

export type ClassNameArgumentObject = {
  [key: string]: ClassNameArgument
}

export type ClassNameArguments = Array<
  ClassNameArgument | ClassNameArgumentObject
>
