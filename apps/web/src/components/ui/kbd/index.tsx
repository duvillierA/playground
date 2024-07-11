'use client'

import { cn } from '@repo/lib'
import type { BadgeProps, IconName } from '@repo/ui'
import { badgeVariants, Icon } from '@repo/ui'

import { type HookHotKeyProps, useHotKey } from '@/hooks/hotKeys'

export const comboKeys = ['ctrl', 'meta', 'shift', 'alt'] as const

type KbdBase = {
  description?: string
  className?: string
  variant?: Extract<BadgeProps['variant'], 'outline' | 'secondary' | 'default'>
  combo?: (typeof comboKeys)[number][]
}

type KbdOption =
  | {
      value: HookHotKeyProps['key']
      text?: React.ReactNode
      onCmd: (arg: void) => void
    }
  | {
      value?: never
      onCmd?: never
      text: React.ReactNode
    }

export type KbdProps = KbdBase & KbdOption

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

export const KbdIcon: React.FC<{ name: IconName }> = ({ name }) => {
  return <Icon name={name} strokeWidth={3} size={10} />
}

export const Kbd: React.FC<KbdProps> = ({ value, text, description, combo, className, variant = 'outline', onCmd }) => {
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
    key: value || 'A',
    combo,
    onKeyDown: onCmd ?? noop,
    disabled: !onCmd
  })

  return (
    <kbd className={cn(KbdClassName, 'space-x-0.5', className)}>
      {!!combo?.length && combo.map((c) => <KbdIcon name={getComboIcon(c)} key={c} />)}
      <span>{text ?? value}</span>
      {description && <span>{description}</span>}
    </kbd>
  )
}
