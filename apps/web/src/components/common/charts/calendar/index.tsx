'use client'

import { Skeleton } from '@repo/ui'
import dynamic from 'next/dynamic'
import type React from 'react'

type ChartsTimeRangeProps = {
  data: {
    value: number
    day: string // "2018-05-24"
  }[]
  from: string
  to: string
}

const ResponsiveTimeRange = dynamic(() => import('@nivo/calendar').then((m) => m.ResponsiveTimeRange), {
  loading: () => <Skeleton className="h-100 w-100" />
})

// make sure parent container have a defined height when using
export const ChartsTimeRange: React.FC<ChartsTimeRangeProps> = ({ data, from, to }) => {
  return <ResponsiveTimeRange square dayRadius={6} data={data} from={from} align="center" to={to} minValue="auto" emptyColor="#eeeeee" colors={['hsl(213, 70%, 50%)', 'hsl(213, 70%, 60%)', 'hsl(213, 70%, 70%)', 'hsl(213, 70%, 80%)', 'hsl(213, 70%, 90%)'].reverse()} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} dayBorderWidth={2} dayBorderColor="#ffffff" />
}
