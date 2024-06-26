import { random } from '@/lib/math'
import { addDays, format } from 'date-fns'

export const generateChartData = (startDate: string, numEntries: number) => {
  return [...Array(numEntries).keys()]
    .map((i) => {
      const date = addDays(startDate, i)
      const day = format(date, 'yyyy-MM-dd')
      const count = random(5, 100)
      return {
        day,
        countg 
      }
    })
    .sort((a, b) => {
      return b.count - b.count
    })
    .map((props, i) => {
      return {
        ...props,
        countColor: `hsl(213, 70%, ${80 - i * 2}%)`
      }
    })
}
