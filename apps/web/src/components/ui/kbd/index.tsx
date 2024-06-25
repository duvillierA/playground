'use client'

import type { BadgeProps } from '@repo/ui'
import { badgeVariants } from '@repo/ui'
import type { PropsWithChildren } from 'react'

import type { IconName } from '@/components/common/icon'
import Icon from '@/components/common/icon'
import { cn } from '@/lib/styles'

export const comboKeys = ['ctrl', 'meta', 'shift', 'alt'] as const

export type KbdProps = PropsWithChildren<{
  value: string
  description?: string
  className?: string
  variant?: Extract<BadgeProps['variant'], 'outline' | 'secondary'>
  combo?: (typeof comboKeys)[number][]
}>

function getComboIcon(combo: (typeof comboKeys)[number]): IconName {
  switch (combo) {
    case 'meta':
      return 'command'
    case 'alt':
      return 'option'
    case 'ctrl':
      return 'chevron-up'
    case 'shift':
      return 'arrow-up'
    default:
      return 'command'
  }
}

export const Kbd = ({ value, description, combo, className, variant = 'outline' }: KbdProps) => {
  const KbdClassName = cn(
    badgeVariants({
      variant,
      size: 'sm'
    }),
    'text-muted-foreground font-normal font-sans',
    {
      'bg-white': variant === 'outline'
    }
  )

  const component = (
    <kbd className={cn(KbdClassName, 'space-x-0.5', className)}>
      {!!combo?.length && combo.map((c) => <Icon name={getComboIcon(c)} strokeWidth={3} size={10} key={c} />)}
      <span>{value}</span>
    </kbd>
  )
  if (!description) {
    return component
  }
  return (
    <span className="inline-flex space-x-1 items-center">
      {component}
      {description && <small className="text-muted-foreground text-sm">{description}</small>}
    </span>
  )
}
