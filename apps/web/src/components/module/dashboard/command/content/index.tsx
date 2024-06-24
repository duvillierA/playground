'use client'

import { Badge, Button, Input, ScrollArea } from '@repo/ui'
import { Star } from 'lucide-react'
import React, { useMemo } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import { ApplicationMenu } from '@/components/module/application/menu'
import { APPLICATION_CATEGORIES } from '@/lib/constants'

export const DashboardCommandContent: React.FC<{
  tags: string[]
  applications: ApplicationDocument[]
}> = ({ tags, applications }) => {
  // const t = useTranslations('Common')
  const [category, setCategory] = React.useState<string>('all')
  const applicationsMenuList = useMemo(() => (category === 'all' ? applications : applications.filter((a) => a.category === category)), [applications, category])
  return (
    <div>
      <div className="p-1 m-0">
        <Input placeholder="Find info, Ask questions or run queries" />
      </div>
      <div className="pt-1 space-y-2">
        <div className="overflow-hidden relative px-2">
          <div className="flex flex-nowrap space-x-2 overflow-auto w-full">
            {tags.map((tag) => {
              return (
                <Badge variant="outline" key={tag} className="whitespace-nowrap bg-gray-200 font-normal text-muted-foreground">
                  <Star className="size-2 mr-1" />
                  {tag}
                </Badge>
              )
            })}
          </div>
        </div>
        <div className="flex flex-nowrap space-x-1 px-2">
          <Button variant={category === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setCategory('all')}>
            all
          </Button>
          {APPLICATION_CATEGORIES.map((c) => (
            <Badge variant={category === c ? `application-${c}` : 'outline'} key={c} onClick={() => setCategory(c)} className="cursor-pointer">
              {c}
            </Badge>
          ))}
        </div>
        <ScrollArea className="sm:h-[460px]">
          <ApplicationMenu className="py-1 space-y-4" applications={applicationsMenuList} onSelect={(app) => alert(`${app.category} : ${app.code}`)} />
        </ScrollArea>
      </div>
    </div>
  )
}
