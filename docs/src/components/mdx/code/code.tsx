import React from 'react'

import type { CodeProps, SpanProps } from './code.type'

export const Code: React.FC<CodeProps> = ({ children, ...rest }) => {
  const fn = (element: React.ReactNode, index?: number): React.ReactNode => {
    if (React.isValidElement<SpanProps>(element)) {
      const props = { ...element.props }

      if (typeof props.children === 'string') {
        let html: string = ''
        const string = /'\[(.*?)\]\((.*?)\)'/g
        const markdown = /\[(.*?)\](\(.*?\))/g

        if (string.test(props.children)) {
          props.style.color = 'var(--shiki-token-function)'
          html = props.children.replace(string, '<a href="$2">$1</a>')
        } else if (markdown.test(props.children)) {
          html = props.children.replace(markdown, '<a href="$2">$1</a>')
        }

        if (html) {
          props.children = undefined
          props.dangerouslySetInnerHTML = {
            __html: html,
          }
        }
      } else if (Array.isArray(props.children)) {
        props.children = React.Children.map(props.children, fn)
      }

      return React.cloneElement(element, {
        key: index,
        ...props,
      })
    }

    return element
  }

  return (
    <code
      className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
      {...rest}
    >
      {Array.isArray(children) ? children.map(fn) : fn(children)}
    </code>
  )
}
