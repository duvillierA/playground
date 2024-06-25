import { Button } from '@repo/ui'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { Kbd } from '@/components/ui/kbd'
import { CATEGORIES } from '@/lib/constants'
import { cn } from '@/lib/styles'

import { CategoryIcon } from '../icon'

type CategoryControlValue = (typeof CATEGORIES)[number] | 'all'
export type CategoryControlProps = {
  className?: string
  value?: CategoryControlValue
  onValueChange: (arg: CategoryControlValue) => void
}

const categoryList = ['all', ...CATEGORIES] as const

export const CategoryControl: React.FC<CategoryControlProps> = ({ value, onValueChange, className }) => {
  const t = useTranslations('Common')
  const nextCategory = useMemo(() => {
    const currentIndex = categoryList.findIndex((c) => c === value)
    return categoryList[currentIndex + 1] || categoryList[0]
  }, [value])
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <div className="flex flex-nowrap space-x-1">
        <Button size="xs" variant={value === 'all' ? 'default' : 'outline'} onClick={() => onValueChange('all')}>
          {t('all')}
        </Button>
        {CATEGORIES.map((c) => (
          <Button size="xs" variant={value === c ? `application-${c}` : 'outline'} key={c} onClick={() => onValueChange(c)} className="cursor-pointer">
            <CategoryIcon category={c} className="size-3 mr-1" />
            {c}
          </Button>
        ))}
      </div>
      <Kbd
        value="Tab"
        combo={[]}
        variant="outline"
        onCmd={() => {
          onValueChange(nextCategory)
        }}
      />
    </div>
  )
}
