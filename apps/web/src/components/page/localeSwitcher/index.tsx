'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

import { locale as locales } from '@/config/locale'
import { indexPageUrl } from '@/config/sitemap'
import { getLinkPathname } from '@/hooks/link'

export const LocaleSwitcher: React.FC = () => {
  const t = useTranslations()
  const defaultValue = useLocale()
  const router = useRouter()
  return (
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
  )
}
