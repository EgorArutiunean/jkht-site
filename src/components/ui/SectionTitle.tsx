import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

type SectionTitleProps = PropsWithChildren<{
  eyebrow?: string
  className?: string
}>

export function SectionTitle({
  eyebrow,
  className,
  children,
}: SectionTitleProps) {
  return (
    <div className={clsx('max-w-2xl space-y-3', className)}>
      {eyebrow ? (
        <div className="text-xs uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold text-text sm:text-3xl lg:text-4xl">
        {children}
      </h2>
    </div>
  )
}
