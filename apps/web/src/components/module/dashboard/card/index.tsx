'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Skeleton } from '@repo/ui'

export type DashboardCardProps = {
  loading?: boolean
  title: React.ReactNode
  description: React.ReactNode
  content: React.ReactNode
  footer: React.ReactNode
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ loading, title, description, content, footer }) => {
  return (
    <Card className="w-[350px] flex-col gap-2">
      <div>
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-full" loading={loading}>
              {title}
            </Skeleton>
          </CardTitle>
          <CardDescription>
            <Skeleton className="w-full" loading={loading}>
              {description}
            </Skeleton>
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Skeleton className="w-full" loading={loading}>
            {footer}
          </Skeleton>
        </CardFooter>
      </div>
      <CardContent>
        <Skeleton className="w-full" loading={loading}>
          {content}
        </Skeleton>
      </CardContent>
    </Card>
  )
}
