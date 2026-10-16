import { TypeText } from '../type-text'
import type { PropertyProps } from './property.type'

export function Property({
  name,
  description,
  type = 'any',
  defaultValue,
  optional = false,
  ...props
}: PropertyProps) {
  if (!name) {
    return ''
  }

  if (!description) {
    description = `A ${type} representing the value of ${name}.`
  }

  const tokens = {
    text: 'var(--shiki-color-text)',
    keyword: 'var(--shiki-token-keyword)',
    constant: 'var(--shiki-token-constant)',
  }

  return (
    <>
      <dt id={name}>
        {props.static && (
          <span style={{ color: tokens.keyword }}>static&nbsp;</span>
        )}
        {props.readonly && (
          <span style={{ color: tokens.keyword }}>readonly&nbsp;</span>
        )}
        <span style={{ color: tokens.text }}>{name}</span>
        {optional && <span style={{ color: tokens.keyword }}>?</span>}
      </dt>
      <dd>
        <table>
          <tbody>
            <tr>
              <td style={{ width: 110 }}>Description</td>
              <td>{description}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td style={{ color: tokens.constant }}>
                <TypeText type={type} separatorColor={tokens.keyword} />
              </td>
            </tr>
            {defaultValue !== undefined && (
              <tr>
                <td>Default value</td>
                <td style={{ color: tokens.constant }}>{defaultValue}</td>
              </tr>
            )}
          </tbody>
        </table>
      </dd>
    </>
  )
}
