import { useTranslations } from 'next-intl'
import React from 'react'

import { DashboardCard, DashboardCardContent } from '@/components/module/dashboard/card'

interface AccessCardProps {
  updatedAt: string
  count: number
}

export const AccessCard: React.FC<AccessCardProps> = ({ updatedAt, count }) => {
  const t = useTranslations()
  return (
    <DashboardCard title={t('Access.title')} description={t('Common.updatedRelative', { time: updatedAt })} footer={t('Log.update', { count })}>
      <DashboardCardContent title="title" footer="footer">
        content
      </DashboardCardContent>
    </DashboardCard>
  )
}
