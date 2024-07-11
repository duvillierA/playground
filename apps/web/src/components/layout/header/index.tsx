import { cn } from '@repo/lib'
import React, { type PropsWithChildren } from 'react'

type HeaderProps = PropsWithChildren<{
  title?: string
  className?: string
}>

export const Header: React.FC<HeaderProps> = ({ title, children, className }) => {
  return (
    <header className={cn('grid grid-flow-col gap-x-2 justify-between items-center h-14', className)}>
      <h1 className="font-semibold text-xl">{title ?? 'Playground'}</h1>
      {children}
    </header>
  )
}
