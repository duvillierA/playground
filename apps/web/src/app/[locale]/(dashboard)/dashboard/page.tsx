import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Section } from '@/components/layout'
import { SectionTitle } from '@/components/layout/section/Title'
import { AccessCard } from '@/components/module/access/card'
import { LogCard } from '@/components/module/log/card'
import { ObservabilityCard } from '@/components/module/observabillity/card'
import { SidecarCard } from '@/components/module/sidecar/card'
import { dashboardPageUrl } from '@/config/sitemap'
import { api } from '@/lib/api'
import { DashboardCarousel } from '@/components/module/dashboard/carousel'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations(`${dashboardPageUrl.id}.meta`)

  return {
    title: t('title'),
    description: t('description')
  }
}

async function getPageTranslations() {
  const t = await getTranslations('Common')
  return {
    recent: t('recent'),
    saved: t('saved')
  }
}

const getDashboardCard = (data: Awaited<ReturnType<typeof api>>['data']['recent'][number]) => {
  switch (data.type) {
    case 'logs':
      return <LogCard key={data.type} data={data} />
    case 'access':
      return <AccessCard key={data.type} data={data} />
    case 'observability':
      return <ObservabilityCard key={data.type} data={data} />
    case 'sidecar':
      return <SidecarCard key={data.type} data={data} />
    default:
      return null
  }
}

const DashboardPage: React.FC = async () => {
  const [translation, { data }] = await Promise.all([getPageTranslations(), api('getLogs', {})])
  return (
    <>
      <Section>
        <SectionTitle title={translation.recent} />
        <DashboardCarousel>
          {data.recent.map(getDashboardCard)}
        </DashboardCarousel>
      </Section>
      <Section>
        <SectionTitle title={translation.saved} />
        <DashboardCarousel>
          {data.saved.map(getDashboardCard)}
        </DashboardCarousel>

      </Section>
    </>
  )
}

export default DashboardPage
