'use client'

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Skeleton } from '@repo/ui'
import { useFormatter, useTranslations } from 'next-intl'
import { toast } from 'sonner'

import type { LogDocument } from '@/app/api/logs/route'
import Icon from '@/components/common/icon'

import { ApplicationCategoryBadge } from '../../application/badge'

export type DashboardCardProps = {
  loading?: boolean
  title: React.ReactNode
  children: React.ReactNode
  data: LogDocument
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ loading, title, data, children }) => {
  const t = useTranslations()
  const format = useFormatter()
  return (
    <Card className="grid md:grid-cols-5 gap-4 md:gap-4 p-6">
      <div className="md:col-span-2 flex flex-col justify-between space-y-2">
        <CardHeader className="p-0">
          <CardTitle className="text-foreground/70 font-medium text-xl">
            <Skeleton loading={loading} className="mr-2">
              {title}
            </Skeleton>
            <Skeleton>
              <ApplicationCategoryBadge category={data.category} />
            </Skeleton>
          </CardTitle>
          <CardDescription>
            <Skeleton className="w-full" loading={loading}>
              {t('Common.updatedRelative', { time: format.relativeTime(new Date(data.updatedAt)) })}
            </Skeleton>
          </CardDescription>
        </CardHeader>
        <CardFooter className="block items-center text-muted-foreground p-0">
          <Skeleton className="w-full inline-flex items-center text-xs" loading={loading}>
            <Icon name="info" className="size-4 mr-1" /> {t('Log.update', { count: data.count })}
          </Skeleton>
          <Button
            size="sm"
            variant="default"
            className="w-full"
            onClick={() =>
              toast(data.type, {
                description: <ApplicationCategoryBadge category={data.category} />,
                duration: 1300,
                id: data.type
              })
            }
          >
            {t('Common.viewMore')}
            <Icon name="chevron-right" size={18} />
          </Button>
        </CardFooter>
      </div>
      <div className="md:col-span-3">{children}</div>
    </Card>
  )
}

export type DashboardCardContentProps = {
  loading?: boolean
  footer: React.ReactNode
  children: React.ReactNode
  title: React.ReactNode
}

export const DashboardCardContent: React.FC<DashboardCardContentProps> = ({ loading, title, children, footer }) => {
  return (
    <Card className="min-h-[200px] p-4 flex flex-col space-y-2 justify-between bg-white">
      <CardHeader className="p-0">
        <CardTitle className="text-foreground/70 text-base font-normal">
          <Skeleton className="w-full" loading={loading}>
            {title}
          </Skeleton>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 grow">
        <Skeleton className="size-full block" loading={loading}>
          {children}
        </Skeleton>
      </CardContent>
      <CardFooter className="flex justify-between text-muted-foreground p-0">
        <Skeleton className="w-full inline-flex items-center text-sm" loading={loading}>
          {footer}
        </Skeleton>
      </CardFooter>
    </Card>
  )
}
