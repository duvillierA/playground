'use client'

import { Badge, Button, Input, ScrollArea } from '@repo/ui'
import { useTranslations } from 'next-intl'
import React, { useMemo } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import Icon from '@/components/common/icon'
import { ApplicationMenu } from '@/components/module/application/menu'
import { CategoryIcon } from '@/components/module/category/icon'
import { Kbd } from '@/components/ui/kbd'
import { useHotKey } from '@/hooks/hotKeys'
import { CATEGORIES } from '@/lib/constants'

export const DashboardCommandContent: React.FC<{
  tags: string[]
  applications: ApplicationDocument[]
}> = ({ tags, applications }) => {
  const t = useTranslations('Common')
  const [isCmdMode, setIsCmdMode] = React.useState(false)
  const [category, setCategory] = React.useState<string>('all')
  const applicationsMenuList = useMemo(() => (category === 'all' ? applications : applications.filter((a) => a.category === category)), [applications, category])
  useHotKey({
    key: 'c',
    combo: ['meta'],
    onKeyDown: () => {
      const categoryIndex = CATEGORIES.findIndex((value) => value === category)
      setCategory(CATEGORIES[categoryIndex + 1] || CATEGORIES[0])
    }
  })
  useHotKey({
    key: '/',
    combo: ['shift'],
    onKeyDown: () => {
      setIsCmdMode(!isCmdMode)
    }
  })
  return (
    <div>
      <div className="p-1 m-0">
        <div className="relative z-10">
          <Input readOnly placeholder="Find info, Ask questions or run queries" className="outline-0" autoFocus />
          <Kbd value="'/' for commands" variant="secondary" className="absolute top-2 right-2 z-20" />
        </div>
      </div>
      {isCmdMode ? (
        <div className="pt-1 space-y-2">commands list</div>
      ) : (
        <div className="pt-1 space-y-2">
          <div className="overflow-hidden relative px-2">
            <div className="flex flex-nowrap space-x-2 overflow-auto w-full">
              {tags.map((tag) => {
                return (
                  <Badge variant="outline" key={tag} className="whitespace-nowrap bg-gray-200 font-normal text-muted-foreground">
                    <Icon name="star" className="size-2 mr-1" />
                    {tag}
                  </Badge>
                )
              })}
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <div className="flex flex-nowrap space-x-1">
              <Button size="xs" variant={category === 'all' ? 'default' : 'outline'} onClick={() => setCategory('all')}>
                {t('all')}
              </Button>
              {CATEGORIES.map((c) => (
                <Button size="xs" variant={category === c ? `application-${c}` : 'outline'} key={c} onClick={() => setCategory(c)} className="cursor-pointer">
                  <CategoryIcon category={c} className="size-3 mr-1" />
                  {c}
                </Button>
              ))}
            </div>
            <Kbd value="C" combo={['meta']} variant="outline" />
          </div>
          <ScrollArea className="sm:h-[460px]">
            <ApplicationMenu className="py-1 space-y-4" applications={applicationsMenuList} onSelect={(app) => alert(`${app.category} : ${app.code}`)} />
          </ScrollArea>
        </div>
      )}
    </div>
  )
}
