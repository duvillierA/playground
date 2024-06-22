import { useTranslations } from 'next-intl'
import React from 'react'

import { IntlDateTime } from '@/components/common/intl'
import { DashboardCard, DashboardCardContent, type DashboardCardProps } from '@/components/module/dashboard/card'

interface SidecarCardProps {
  data: DashboardCardProps['data']
  loading?: DashboardCardProps['loading']
}

export const SidecarCard: React.FC<SidecarCardProps> = ({ data, loading }) => {
  const t = useTranslations()
  return (
    <DashboardCard title={t('Sidecar.title')} data={data} loading={loading}>
      <DashboardCardContent
        title="title"
        footer={
          <IntlDateTime
            value={new Date(data.createdAt)}
            options={{
              dateStyle: 'medium',
              timeStyle: 'medium'
            }}
          />
        }
      >
        content
      </DashboardCardContent>
    </DashboardCard>
  )
}
