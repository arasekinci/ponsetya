import type { DefinitionProps } from './definition.type'

export function Definition({
  term,
  description,
  pathname,
  children,
}: DefinitionProps) {
  return (
    <>
      <dt>
        {pathname ? (
          <a href={pathname} className="nx-text-primary-600">
            {term}
          </a>
        ) : (
          term
        )}
      </dt>
      {description && <dd dangerouslySetInnerHTML={{ __html: description }} />}
      {children && <dd>{children}</dd>}
    </>
  )
}
