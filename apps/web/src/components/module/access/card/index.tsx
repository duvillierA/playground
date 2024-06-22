import { useTranslations } from 'next-intl'
import React from 'react'

import { DashboardCard, DashboardCardContent, type DashboardCardProps } from '@/components/module/dashboard/card'

interface AccessCardProps {
  data: DashboardCardProps['data']
  loading?: DashboardCardProps['loading']
}

export const AccessCard: React.FC<AccessCardProps> = ({ data, loading }) => {
  const t = useTranslations()
  return (
    <DashboardCard title={t('Access.title')} data={data} loading={loading}>
      <DashboardCardContent
        title={t('Access.period', { count: 30 })}
        footer={
          <span className="space-x-1">
            <span>{t('Common.totalViews')}</span>
            <strong>{3500}</strong>
          </span>
        }
      >
        content
      </DashboardCardContent>
    </DashboardCard>
  )
}
