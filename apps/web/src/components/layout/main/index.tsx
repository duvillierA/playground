import React, { type PropsWithChildren } from 'react'

import { cn } from '@/lib/styles'

type MainProps = PropsWithChildren<{
  asContainer?: boolean
  className?: string
}>

export const Main: React.FC<MainProps> = ({ children, className, asContainer }) => {
  return (
    <main
      className={cn(
        {
          'container mx-auto': asContainer
        },
        className
      )}
    >
      {children}
    </main>
  )
}
