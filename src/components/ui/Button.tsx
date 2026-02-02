import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-dark text-white hover:bg-accent shadow-soft ring-1 ring-accent-soft',
  secondary:
    'bg-white text-text hover:bg-bg-secondary ring-1 ring-border shadow-inset',
  ghost:
    'bg-transparent text-text-secondary hover:bg-bg-secondary ring-1 ring-border',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 rounded-sm text-sm',
  md: 'h-11 px-4 rounded-md text-base',
  lg: 'h-12 px-5 rounded-lg text-base',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
