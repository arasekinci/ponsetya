import React from 'react'
import { Property } from './property'
import type { PropertyListProps } from './property-list.type'

export function PropertyList({ children, ...rest }: PropertyListProps) {
  return (
    <dl>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Property) {
          return React.cloneElement(child, { ...rest, ...child.props })
        }

        return child
      })}
    </dl>
  )
}
