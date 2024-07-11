import { cn } from '@repo/lib'
import React, { type PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  title?: React.ReactNode
  className?: string
}>

export const SectionTitle: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <h2 className={cn('text-3xl', className)}>
      {title} {children}
    </h2>
  )
}
