import { useTranslations } from 'next-intl'
import React from 'react'

import { ChartsBar } from '@/components/common/charts/bar'
import { IntlDateTime } from '@/components/common/intl'
import { DashboardCard, DashboardCardContent, type DashboardCardProps } from '@/components/module/dashboard/card'
import { generateChartData } from '@/lib/chart'

interface LogCardProps {
  data: DashboardCardProps['data']
  loading?: DashboardCardProps['loading']
}

export const LogCard: React.FC<LogCardProps> = ({ data, loading }) => {
  const t = useTranslations()
  return (
    <DashboardCard title={t('Log.title')} data={data} loading={loading}>
      <DashboardCardContent
        title={t('Log.relative')}
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
        <div className="w-full h-[80px]">
          <ChartsBar data={generateChartData('2024-01-20', 20)} keys={['count']} indexBy="day" />
        </div>
      </DashboardCardContent>
    </DashboardCard>
  )
}
