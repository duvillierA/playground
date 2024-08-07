import { useTranslations } from 'next-intl'
import React from 'react'

import { IntlDateTime } from '@/components/common/intl/date/dateTime'
import { IntlNumber } from '@/components/common/intl/number'
import { DashboardCard, DashboardCardContent, type DashboardCardProps } from '@/components/module/dashboard/card'
import { StatCard } from '@/components/module/dashboard/card/stat'

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
        <div className="grid grid-cols-2 gap-2 items-stretch">
          <StatCard title={t('Query.total')} value={<IntlNumber value={78000} />} />
          <StatCard
            title={t('Query.weeklyTrend')}
            value={
              <IntlNumber
                value={250 / 100}
                options={{
                  style: 'percent'
                }}
              />
            }
          />
        </div>
      </DashboardCardContent>
    </DashboardCard>
  )
}
