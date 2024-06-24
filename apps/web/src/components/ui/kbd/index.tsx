'use client'

import { badgeVariants } from '@repo/ui'
import type { PropsWithChildren } from 'react'

import { cn } from '@/lib/styles'

export type KbdProps = PropsWithChildren<{
  value: string
  description?: string
}>
const className = badgeVariants({
  variant: 'outline'
})

export const Kbd = ({ value, description }: KbdProps) => {
  return (
    <span className="inline-flex space-x-1 items-center">
      <kbd className={cn(className, 'text-muted-foreground bg-white font-normal shadow-sm')}>{value}</kbd>
      {description && <small className="text-muted-foreground text-sm">{description}</small>}
    </span>
  )
}
