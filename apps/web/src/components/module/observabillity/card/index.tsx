import { useTranslations } from 'next-intl'
import React from 'react'

import { DashboardCard, DashboardCardContent } from '@/components/module/dashboard/card'

interface ObservabilityCardProps {
  updatedAt: string
  count: number
}

export const ObservabilityCard: React.FC<ObservabilityCardProps> = ({ updatedAt, count }) => {
  const t = useTranslations()
  return (
    <DashboardCard title={t('Observability.title')} description={t('Common.updatedRelative', { time: updatedAt })} footer={t('Log.update', { count })}>
      <DashboardCardContent title="title" footer="footer">
        content
      </DashboardCardContent>
    </DashboardCard>
  )
}
