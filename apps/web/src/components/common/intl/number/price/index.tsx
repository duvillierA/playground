import { IntlNumber } from '@/components/common/intl/number/default'

export type IntlPriceProps = {
  asCents?: boolean
  value: number
  currency: string
}

export const IntlPrice: React.FC<IntlPriceProps> = ({ asCents, value, currency }) => {
  return (
    <IntlNumber
      value={asCents ? value * 100 : value}
      options={{
        style: 'currency',
        currency
      }}
    />
  )
}
