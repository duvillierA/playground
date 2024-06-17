import { Button } from '@repo/ui'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { Header, Section } from '@/components/layout'
import { TypographyDemo } from '@/components/typography'
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
    <div className="container mx-auto">
      <Header title={t('title')} />
      <Section>
        <TypographyDemo />
      </Section>
      <Section>
        <Button>Example button</Button>
      </Section>
    </div>
  )
}

export default HomePage
