import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { Section } from '@/components/layout'
import { Header } from '@/components/layout/header'
import { aboutPageUrl } from '@/config/sitemap'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('AboutPage.meta')

  return {
    title: t('title'),
    description: t('description')
  }
}
const AboutPage: React.FC = () => {
  const t = useTranslations(aboutPageUrl.id)
  return (
    <>
      <Header title={t('title')} />
      <Section>
        <p className="text-muted-foreground">{t('meta.description')}</p>
      </Section>
    </>
  )
}

export default AboutPage
