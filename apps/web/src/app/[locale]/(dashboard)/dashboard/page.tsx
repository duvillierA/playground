import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import type { LogDocument } from '@/app/api/logs/route'
import { Section } from '@/components/layout'
import { SectionTitle } from '@/components/layout/section/Title'
import { AccessCard } from '@/components/module/access/card'
import { DashboardCarousel, DashboardCarouselItem } from '@/components/module/dashboard/carousel'
import { LogCard } from '@/components/module/log/card'
import { ObservabilityCard } from '@/components/module/observabillity/card'
import { SidecarCard } from '@/components/module/sidecar/card'
import { dashboardPageUrl } from '@/config/sitemap'
import { api } from '@/lib/api'

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

const getDashboardCard = (data: LogDocument) => {
  switch (data.type) {
    case 'logs':
      return <LogCard data={data} />
    case 'access':
      return <AccessCard data={data} />
    case 'observability':
      return <ObservabilityCard data={data} />
    case 'sidecar':
      return <SidecarCard data={data} />
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
          {data.recent.map((d) => (
            <DashboardCarouselItem key={d.type}>{getDashboardCard(d)}</DashboardCarouselItem>
          ))}
        </DashboardCarousel>
      </Section>
      <Section>
        <SectionTitle title={translation.saved} />
        <DashboardCarousel>
          {data.saved.map((d) => (
            <DashboardCarouselItem key={d.type}>{getDashboardCard(d)}</DashboardCarouselItem>
          ))}
        </DashboardCarousel>
      </Section>
    </>
  )
}

export default DashboardPage
