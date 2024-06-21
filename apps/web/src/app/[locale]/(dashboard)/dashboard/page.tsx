import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Section } from '@/components/layout'
import { SectionTitle } from '@/components/layout/section/Title'
import { AccessCard } from '@/components/module/access/card'
import { LogCard } from '@/components/module/log/card'
import { ObservabilityCard } from '@/components/module/observabillity/card'
import { SidecarCard } from '@/components/module/sidecar/card'
import { config } from '@/config'
import { dashboardPageUrl } from '@/config/sitemap'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations(`${dashboardPageUrl.id}.meta`)

  return {
    title: t('title'),
    description: t('description')
  }
}

async function getLogs() {
  return fetch(new URL('/api/logs', config.server.host)).then((res) => res.json())
}

async function getPageTranslations() {
  const t = await getTranslations('Common')
  return {
    recent: t('recent'),
    saved: t('saved')
  }
}

const DashboardPage: React.FC = async () => {
  const [translation, { data }] = await Promise.all([getPageTranslations(), getLogs()])
  const logsCount = 12
  return (
    <>
      <Section>
        <SectionTitle title={translation.recent} />
        {data.map((log) => (
          <LogCard key={log.id} updatedAt={log.updatedAt} count={log.count} />
        ))}
      </Section>
      <Section>
        <SectionTitle title={translation.saved} />
        <AccessCard updatedAt="" count={logsCount} />
        <ObservabilityCard updatedAt="" count={logsCount} />
        <SidecarCard updatedAt="" count={logsCount} />
      </Section>
    </>
  )
}

export default DashboardPage
