import { Button } from '@repo/ui'
import { useTranslations } from 'next-intl'

import { Kbd } from '@/components/ui/kbd'

export const DashboardCommandButton: React.FC<{
  onCmd: () => void
}> = ({ onCmd }) => {
  const t = useTranslations('Command')
  return (
    <Button variant="outline" size="sm" className="min-w-30 md:min-w-60 pr-11 text-muted-foreground justify-start relative focus:outline-none" onClick={() => onCmd()}>
      {t('title')}
      <Kbd combo={['meta']} value="k" variant="secondary" className="absolute right-[0.3rem] top-[0.4rem]" onCmd={onCmd} />
    </Button>
  )
}
