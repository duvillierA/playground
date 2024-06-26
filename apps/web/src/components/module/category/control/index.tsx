import { Button } from '@repo/ui'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import type { CategoriesDocument } from '@/app/api/categories/route'
import { useStore } from '@/components/common/store'
import { Kbd } from '@/components/ui/kbd'
import { cn } from '@/lib/styles'

import { CategoryIcon } from '../icon'

type CategoryControlValue = CategoriesDocument | 'all'
export type CategoryControlProps = {
  className?: string
  value?: CategoryControlValue
  onValueChange: (arg: CategoryControlValue) => void
}

export const CategoryControl: React.FC<CategoryControlProps> = ({ value, onValueChange, className }) => {
  const { categories } = useStore()
  const categoryList = ['all', ...categories] as const
  const t = useTranslations('Common')
  const nextCategory = useMemo(() => {
    const currentIndex = categoryList.findIndex((c) => c === value)
    return categoryList[currentIndex + 1] || categoryList[0]
  }, [value])
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <div className="flex flex-nowrap space-x-1">
        <Button size="xs" className={value === 'all' ? 'cursor-default' : ''} variant={value === 'all' ? 'default' : 'outline'} onClick={() => onValueChange('all')}>
          {t('all')}
        </Button>
        {categories.map((c) => (
          <Button size="xs" className={value === c ? 'cursor-default' : ''} variant={value === c ? `application-${c}` : 'outline'} key={c} onClick={() => onValueChange(c)}>
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
