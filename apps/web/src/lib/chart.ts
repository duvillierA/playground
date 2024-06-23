export const generateChartData = (startDate: string, numEntries: number) => {
  const chartData = []
  const baseCount = 10
  const countIncrement = 5

  for (let i = 0; i < numEntries; i++) {
    const date = new Date(startDate)
    date.setMonth(date.getMonth() + i)

    const day = date.toISOString().split('T')[0]
    const count = baseCount + i * countIncrement
    const countColor = `hsl(213, 70%, ${80 - i * 2}%)`

    chartData.push({
      day,
      count,
      countColor
    })
  }

  return chartData
}
