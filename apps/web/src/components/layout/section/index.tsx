import React, { type PropsWithChildren } from 'react'

import { cn } from '@/lib/styles'

type SectionProps = PropsWithChildren<{
  asContainer?: boolean
}>

export const Section: React.FC<SectionProps> = ({ asContainer, children }) => {
  return (
    <section
      className={cn({
        'container mx-auto': asContainer
      })}
    >
      {children}
    </section>
  )
}
