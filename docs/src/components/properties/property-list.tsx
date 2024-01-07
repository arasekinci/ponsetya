import React from 'react'

import type { PropertyListProps } from './property-list.type'
import { Property } from './property'

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
