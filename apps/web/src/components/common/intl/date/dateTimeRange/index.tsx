import { useFormatter } from 'next-intl'

type LibDateTimeParameters = Parameters<ReturnType<typeof useFormatter>['dateTimeRange']>

export type IntlDateTimeRangeProps = {
  start: LibDateTimeParameters[0]
  end: LibDateTimeParameters[1]
  options?: LibDateTimeParameters[2]
}

export const IntlDateTimeRange: React.FC<IntlDateTimeRangeProps> = ({ start, end, options }) => {
  const format = useFormatter()
  return format.dateTimeRange(start, end, options)
}
