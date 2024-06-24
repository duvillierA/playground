import React, { type PropsWithChildren } from 'react'

import { PageLink } from '@/components/page/link'
import { type Page } from '@/config/sitemap'

type NavMenuItemProps = PropsWithChildren<{
  page: Page
  className?: string
}>

const NavMenuItem: React.FC<NavMenuItemProps> = ({ page, className, children }) => {
  return (
    <li className={className}>
      <PageLink page={page} className="text-foreground/60 hover:text-foreground/80 active:text-foreground/80">
        {children}
      </PageLink>
    </li>
  )
}

export default NavMenuItem
