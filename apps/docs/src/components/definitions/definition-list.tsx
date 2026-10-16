import React from 'react'
import type { DefinitionProps } from './definition.type'
import type { DefinitionListProps } from './definition-list.type'

export function DefinitionList({
  children,
  template,
  ...rest
}: DefinitionListProps) {
  return (
    <dl>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<DefinitionProps>(child)) {
          const props: DefinitionProps = { ...child.props }

          if (!props.pathname && rest.pathname) {
            props.pathname = `${rest.pathname}/${props.term.toLowerCase()}`
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
