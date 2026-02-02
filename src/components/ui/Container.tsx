import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react'
import clsx from 'clsx'

type ContainerProps<T extends ElementType = 'div'> = PropsWithChildren<{
  className?: string
  as?: T
}> &
  ComponentPropsWithoutRef<T>

export function Container<T extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: ContainerProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag className={clsx('container', className)} {...props}>
      {children}
    </Tag>
  )
}
