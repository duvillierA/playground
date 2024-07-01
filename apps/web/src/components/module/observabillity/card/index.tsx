import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'
import React from 'react'

import { IntlDateTime } from '@/components/common/intl/date/dateTime'
import { IntlNumber } from '@/components/common/intl/number'
import { DashboardCard, DashboardCardContent, type DashboardCardProps } from '@/components/module/dashboard/card'
import { StatCard } from '@/components/module/dashboard/card/stat'

interface ObservabilityCardProps {
  data: DashboardCardProps['data']
  loading?: DashboardCardProps['loading']
}

export const ObservabilityCard: React.FC<ObservabilityCardProps> = ({ data, loading }) => {
  const t = useTranslations()
  return (
    <DashboardCard title={t('Observability.title')} data={data} loading={loading}>
      <DashboardCardContent
        title={t('Query.database')}
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
              <span className="text-green-600 inline-flex space-x-0.5 items-center">
                <Icon name="trending-up" className="size-6" />
                <span>
                  <IntlNumber
                    value={250 / 100}
                    options={{
                      style: 'percent'
                    }}
                  />
                </span>
              </span>
            }
          />
        </div>
      </DashboardCardContent>
    </DashboardCard>
  )
}
