import React, { type PropsWithChildren } from 'react'

import { cn } from '@/lib/styles'

type NavMenuProps = PropsWithChildren<{
  className?: string
}>

const NavMenu: React.FC<NavMenuProps> = ({ children, className }) => {
  return <ul className={cn('flex items-baseline space-x-3', className)}>{children}</ul>
}

export default NavMenu
