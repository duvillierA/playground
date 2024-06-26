import { format, subDays } from 'date-fns'
import { useTranslations } from 'next-intl'
import React from 'react'

import { ChartsTimeRange } from '@/components/common/charts/calendar'
import { DashboardCard, DashboardCardContent, type DashboardCardProps } from '@/components/module/dashboard/card'
import { random } from '@/lib/math'

interface AccessCardProps {
  data: DashboardCardProps['data']
  loading?: DashboardCardProps['loading']
}

const fromDays = 90
const now = new Date()
const chartData = [...Array(fromDays).keys()].map((i) => ({
  day: format(subDays(now, i), 'yyyy-MM-dd'),
  value: random(0, 200)
}))

export const AccessCard: React.FC<AccessCardProps> = ({ data, loading }) => {
  const t = useTranslations()
  return (
    <DashboardCard title={t('Access.title')} data={data} loading={loading}>
      <DashboardCardContent
        title={t('Access.period', { count: fromDays })}
        footer={
          <span className="space-x-1">
            <span>{t('Common.totalViews')}</span>
            <strong>{3500}</strong>
          </span>
        }
      >
        <div className="h-[105px]">
          <ChartsTimeRange data={chartData} from={subDays(now, fromDays).toISOString()} to={now.toISOString()} />
        </div>
      </DashboardCardContent>
    </DashboardCard>
  )
}
