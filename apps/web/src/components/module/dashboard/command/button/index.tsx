import { Button } from '@repo/ui'
import { useTranslations } from 'next-intl'

import { Kbd } from '@/components/ui/kbd'

export const DashboardCommandButton: React.FC<{
  onCmd: () => void
}> = ({ onCmd }) => {
  const t = useTranslations('Common')
  return (
    <Button variant="outline" size="sm" className="min-w-40 text-muted-foreground justify-start relative focus:outline-none" onClick={() => onCmd()}>
      {t('search')}
      <Kbd combo={['meta']} value="k" variant="secondary" className="absolute right-[0.3rem] top-[0.4rem]" onCmd={onCmd} />
    </Button>
  )
}
