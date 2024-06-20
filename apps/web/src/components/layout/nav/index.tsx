'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui'
import { Home } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

import { PageLink } from '@/components/page'
import { locale as locales } from '@/config/locale'
import { aboutPageUrl, indexPageUrl, intlPageUrl } from '@/config/sitemap'
import { getLinkPathname } from '@/hooks/link'
import { cn } from '@/lib/styles'

import NavMenu from './Menu'
import NavMenuItem from './Menu/Item'

type NavProps = {
  title?: string
  className?: string
}

export const Nav: React.FC<NavProps> = ({ title, className }) => {
  const t = useTranslations()
  const defaultValue = useLocale()
  const router = useRouter()
  return (
    <nav className={cn('border-b sticky top-0 bg-white', className)}>
      <div className="h-14 flex justify-between items-center container mx-auto">
        <div className="flex items-center space-x-6">
          <PageLink page={indexPageUrl}>
            <span className="flex items-center space-x-2">
              <Home className="size-4" />
              <span className="hidden sm:inline-block">{title ?? 'Playground'}</span>
            </span>
          </PageLink>
          <NavMenu>
            <NavMenuItem page={aboutPageUrl}>{t('AboutPage.title')}</NavMenuItem>
            <NavMenuItem page={intlPageUrl}>{t('IntlPage.title')}</NavMenuItem>
          </NavMenu>
        </div>
        <div>
          <Select onValueChange={(locale) => router.push(getLinkPathname(indexPageUrl.pathname, { locale }))} defaultValue={defaultValue}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {locales.locales.map((l) => {
                return (
                  <SelectItem key={l} value={l}>
                    {t('Common.language', { locale: l })}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  )
}
