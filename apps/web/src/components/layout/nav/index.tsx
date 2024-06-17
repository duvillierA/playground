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
    <nav className={classnames('flex justify-between items-center', className)}>
      <PageLink page={indexPageUrl}>{title ?? 'Playground'}</PageLink>
      <ul className="flex items-baseline space-x-1">
        <li>
          <PageLink page={aboutPageUrl}>{t('AboutPage.title')}</PageLink>
        </li>
        <li>
          <PageLink page={intlPageUrl}>{t('IntlPage.title')}</PageLink>
        </li>
      </ul>
    </nav>
  )
}
