import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { Header } from '@/components/layout'
import { intlPageUrl } from '@/config/sitemap'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('IntlPage.meta')

  return {
    title: t('title'),
    description: t('description')
  }
}
const IntlPage: React.FC = () => {
  const t = useTranslations(intlPageUrl.id)
  return <Header title={t('title')} />
}

export default IntlPage
