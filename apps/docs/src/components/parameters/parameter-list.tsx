import React from 'react'
import { Parameter } from './parameter'
import type { ParameterListProps } from './parameter-list.type'

export function ParameterList({ children, ...rest }: ParameterListProps) {
  return (
    <dl>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Parameter) {
          return React.cloneElement(child, { ...rest, ...child.props })
        }

        return child
      })}
    </dl>
  )
}
