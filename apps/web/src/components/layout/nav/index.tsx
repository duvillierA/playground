import { Home } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

import { PageLink } from '@/components/page'
import { aboutPageUrl, indexPageUrl, intlPageUrl } from '@/config/sitemap'
import { classnames } from '@/lib/styles'

type NavProps = {
  title?: string
  className?: string
}

export const Nav: React.FC<NavProps> = ({ title, className }) => {
  const t = useTranslations()
  return (
    <nav className={classnames('flex justify-between items-center h-14 border-b sticky top-0 bg-white', className)}>
      <div className="flex items-center space-x-6 container mx-auto">
        <PageLink page={indexPageUrl}>
          <span className="flex items-center space-x-2">
            <Home className="size-4" />
            <span className="hidden sm:inline-block">{title ?? 'Playground'}</span>
          </span>
        </PageLink>
        <ul className="flex items-baseline space-x-3">
          <li>
            <PageLink page={aboutPageUrl} className="text-foreground/60 hover:text-foreground/80">
              {t('AboutPage.title')}
            </PageLink>
          </li>
          <li>
            <PageLink page={intlPageUrl} className="text-foreground/60 hover:text-foreground/80">
              {t('IntlPage.title')}
            </PageLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
