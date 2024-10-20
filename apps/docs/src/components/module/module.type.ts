export type ModuleProps = {
  type: 'class' | 'reference' | 'type'
  items: {
    title: string
    href: string
  }[]
}
