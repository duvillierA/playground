import { useTranslations } from 'next-intl'
import React from 'react'

import { DashboardCard, DashboardCardContent, type DashboardCardProps } from '@/components/module/dashboard/card'
import { IntlDateTime } from '@/components/common/intl'

interface LogCardProps {
  data: DashboardCardProps['data']
  loading?: DashboardCardProps['loading']
}

export const LogCard: React.FC<LogCardProps> = ({ data, loading }) => {
  const t = useTranslations()
  return (
    <DashboardCard title={t('Log.title')} data={data} loading={loading}>
      <DashboardCardContent title={
        t('Log.relative')
      } footer={
        <IntlDateTime
        value={new Date(data.createdAt)}
        options={{
          dateStyle: 'medium',
          timeStyle: 'medium'
        }}
      />
      }>
        content
      </DashboardCardContent>
    </DashboardCard>
  )
}
