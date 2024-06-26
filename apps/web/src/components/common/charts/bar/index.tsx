'use client'

import { Skeleton } from '@repo/ui'
import dynamic from 'next/dynamic'

const ResponsiveBar = dynamic(() => import('@nivo/bar').then((m) => m.ResponsiveBar), {
  loading: () => <Skeleton loading className="h-100 w-100 block" />
})

export type ChartsBarProps = {
  data: Record<string, string | number>[]
  indexBy: string
  keys: string[]
}

export const ChartsBar: React.FC<ChartsBarProps> = ({ ...props }) => {
  return (
    <ResponsiveBar
      {...props}
      theme={{
        grid: {
          line: {
            strokeWidth: 0
          }
        }
      }}
      groupMode="grouped"
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      minValue={'auto'}
      colors={({ id, data }) => (data as any)[`${id}Color`]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      axisTop={null}
      axisRight={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      animate
    />
  )
}
