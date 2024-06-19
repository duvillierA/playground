import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { Header, Section } from '@/components/layout'
import { indexPageUrl } from '@/config/sitemap'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('IndexPage.meta')

  return {
    title: t('title'),
    description: t('description')
  }
}

const HomePage: React.FC = () => {
  const t = useTranslations(indexPageUrl.id)
  return (
    <>
      <Header title={t('title')} />
      <Section>
        <p className="text-muted-foreground">{t('meta.description')}</p>
      </Section>
    </>
  )
}

export default HomePage
