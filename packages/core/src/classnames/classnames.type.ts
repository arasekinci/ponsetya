export type ClassNameValue = string | number | boolean | undefined | null

export type ClassNameValueObject = Record<string, ClassNameValue>

export type ClassNameArgument = ClassNameValue | ClassNameValueObject
