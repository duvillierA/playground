'use client'

import type { BadgeProps } from '@repo/ui'
import { badgeVariants } from '@repo/ui'

import type { IconName } from '@/components/common/icon'
import Icon from '@/components/common/icon'
import { useHotKey } from '@/hooks/hotKeys'
import { cn } from '@/lib/styles'

export const comboKeys = ['ctrl', 'meta', 'shift', 'alt'] as const

export type KbdProps = {
  value: string
  description?: string
  className?: string
  variant?: Extract<BadgeProps['variant'], 'outline' | 'secondary'>
  combo?: (typeof comboKeys)[number][]
  onCmd?: (arg: void) => void
}

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

const noop = () => {}

export const Kbd: React.FC<KbdProps> = ({ value, description, combo, className, variant = 'outline', onCmd }) => {
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

  useHotKey({
    key: value,
    combo,
    onKeyDown: onCmd ?? noop,
    disabled: !onCmd
  })

  return (
    <kbd className={cn(KbdClassName, 'space-x-0.5', className)}>
      {!!combo?.length && combo.map((c) => <Icon name={getComboIcon(c)} strokeWidth={3} size={10} key={c} />)}
      <span>{value}</span>
      {description && <span>{description}</span>}
    </kbd>
  )
}
