import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { Section } from '@/components/layout'
import { SectionTitle } from '@/components/layout/section/Title'
import { DashboardCard } from '@/components/module/dashboard/card'
import { dashboardPageUrl } from '@/config/sitemap'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations(`${dashboardPageUrl.id}.meta`)

  return {
    title: t('title'),
    description: t('description')
  }
}
const DashboardPage: React.FC = () => {
  const t = useTranslations('Common')
  return (
    <>
      <Section>
        <SectionTitle title={t('recent')} />
        <DashboardCard loading title="title" description="description" content="content" footer="footer" />
      </Section>
      <Section>
        <SectionTitle title={t('saved')} />
      </Section>
    </>
  )
}

export default DashboardPage
