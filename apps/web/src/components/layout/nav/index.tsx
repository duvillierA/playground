import { cn } from '@repo/lib'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'
import React from 'react'

import NavMenu from '@/components/layout/nav/Menu'
import NavMenuItem from '@/components/layout/nav/Menu/Item'
import { PageLink } from '@/components/page/link'
import { LocaleSwitcher } from '@/components/page/localeSwitcher'
import { aboutPageUrl, indexPageUrl, intlPageUrl } from '@/config/sitemap'

type NavProps = {
  title?: string
  className?: string
}

export const Nav: React.FC<NavProps> = ({ title, className }) => {
  const t = useTranslations()
  return (
    <nav className={cn('border-b sticky top-0 bg-white', className)}>
      <div className="h-14 flex justify-between items-center container mx-auto">
        <div className="flex items-center space-x-6">
          <PageLink page={indexPageUrl}>
            <span className="flex items-center space-x-2">
              <Icon name="home" className="size-4" />
              <span className="hidden sm:inline-block">{title ?? 'Playground'}</span>
            </span>
          </PageLink>
          <NavMenu>
            <NavMenuItem page={aboutPageUrl}>{t('AboutPage.title')}</NavMenuItem>
            <NavMenuItem page={intlPageUrl}>{t('IntlPage.title')}</NavMenuItem>
          </NavMenu>
        </div>
        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}
