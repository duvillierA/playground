import { useFormatter } from 'next-intl'

type LibNumberParameters = Parameters<ReturnType<typeof useFormatter>['number']>

export type IntlNumberProps = {
  value: LibNumberParameters[0]
  options?: LibNumberParameters[1]
}

export const IntlNumber: React.FC<IntlNumberProps> = ({ value, options }) => {
  const format = useFormatter()
  return format.number(value, options)
}
