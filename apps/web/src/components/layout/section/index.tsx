import { cn } from '@repo/lib'
import React, { type PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  asContainer?: boolean
}>

export const Section: React.FC<SectionProps> = ({ asContainer, children }) => {
  return (
    <section
      className={cn('space-y-2', {
        'container mx-auto': asContainer
      })}
    >
      {children}
    </section>
  )
}
