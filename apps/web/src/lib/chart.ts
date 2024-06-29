import { random } from '@repo/lib'
import { addDays, format } from 'date-fns'

const luminosity = (count: number, min: number, max: number) => ((count - min) / (max - min)) * (35 - 90) + 90

const min = 5
const max = 100
export const generateChartData = (startDate: string, numEntries: number) => {
  return [...Array(numEntries).keys()].map((i) => {
    const date = addDays(startDate, i)
    const day = format(date, 'yyyy-MM-dd')
    const count = random(min, max)
    return {
      day,
      count,
      countColor: `hsl(213, 70%, ${luminosity(count, min, max)}%)`
    }
  })
}
