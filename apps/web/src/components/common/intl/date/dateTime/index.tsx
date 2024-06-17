import { useFormatter } from 'next-intl'

type LibDateTimeParameters = Parameters<ReturnType<typeof useFormatter>['dateTime']>

export type IntlDateTimeProps = {
  value: LibDateTimeParameters[0]
  options?: LibDateTimeParameters[1]
}

export const IntlDateTime: React.FC<IntlDateTimeProps> = ({ value, options }) => {
  const format = useFormatter()
  return format.dateTime(value, options)
}
