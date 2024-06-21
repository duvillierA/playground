'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Skeleton } from '@repo/ui'
import { Info } from 'lucide-react'

export type DashboardCardProps = {
  loading?: boolean
  title: React.ReactNode
  description: React.ReactNode
  children: React.ReactNode
  footer: React.ReactNode
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ loading, title, description, children, footer }) => {
  return (
    <Card className="grid md:grid-cols-2 gap-4 md:gap-2 p-6">
      <div className="flex flex-col justify-between space-y-2">
        <CardHeader className="p-0">
          <CardTitle className="text-foreground/70 font-medium text-xl">
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
        <CardFooter className="flex justify-between text-muted-foreground p-0">
          <Skeleton className="w-full inline-flex items-center text-xs" loading={loading}>
            <Info className="size-4 mr-1" /> {footer}
          </Skeleton>
        </CardFooter>
      </div>
      {children}
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
      <CardContent className="p-0 my-auto">
        <Skeleton className="w-full" loading={loading}>
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
