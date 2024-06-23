import { format, subDays } from 'date-fns'
import { useTranslations } from 'next-intl'
import React from 'react'

import { ChartsTimeRange } from '@/components/common/charts/calendar'
import { DashboardCard, DashboardCardContent, type DashboardCardProps } from '@/components/module/dashboard/card'

interface AccessCardProps {
  data: DashboardCardProps['data']
  loading?: DashboardCardProps['loading']
}

const now = new Date()
const chartData = [...Array(30).keys()].map((i) => ({
  day: format(subDays(now, i), 'yyyy-MM-dd'),
  value: Math.floor(Math.random() * (100 + 1))
}))

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
        <div className="h-[100px]">
          <ChartsTimeRange data={chartData} from={subDays(now, 80).toISOString()} to={now.toISOString()} />
        </div>
      </DashboardCardContent>
    </DashboardCard>
  )
}
