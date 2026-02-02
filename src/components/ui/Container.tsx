import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

type ContainerProps = PropsWithChildren<{
  className?: string
  as?: keyof JSX.IntrinsicElements
}>

export function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return <Tag className={clsx('container', className)}>{children}</Tag>
}
