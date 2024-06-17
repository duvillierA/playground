import { useFormatter } from 'next-intl'

type LibDateTimeParameters = Parameters<ReturnType<typeof useFormatter>['relativeTime']>

export type IntlRelativeTimeProps = {
  value: LibDateTimeParameters[0]
  options?: LibDateTimeParameters[1]
}

export const IntlRelativeTime: React.FC<IntlRelativeTimeProps> = ({ value, options }) => {
  const format = useFormatter()
  return format.relativeTime(value, options)
}
