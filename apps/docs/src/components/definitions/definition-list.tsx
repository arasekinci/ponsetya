import React from 'react'
import type { DefinitionListProps } from './definition-list.type'

export function DefinitionList({
  children,
  template,
  ...rest
}: DefinitionListProps) {
  return (
    <dl>
      {React.Children.map(children as any, (child) => {
        if (React.isValidElement(child)) {
          const props = { ...(child.props as any) }

          if (!props.pathname && rest.pathname) {
            props.pathname = rest.pathname + '/' + props.term.toLowerCase()
          }

          if (typeof template === 'string') {
            props.term = template.replace('$term', props.term)
          }

          return React.cloneElement(child, props)
        }

        return child
      })}
    </dl>
  )
}
