import { Badge, Input } from '@repo/ui'
import React, { useMemo } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import Icon from '@/components/common/icon'
import { ApplicationMenu } from '@/components/module/application/menu'
import { CategoryControl, type CategoryControlProps } from '@/components/module/category/control'
import { Kbd } from '@/components/ui/kbd'

export const DashboardDialogContent: React.FC<{
  tags: string[]
  applications: ApplicationDocument[]
}> = ({ tags, applications }) => {
  const [isCmdMode, setIsCmdMode] = React.useState(false)
  const [category, setCategory] = React.useState<CategoryControlProps['value']>('all')
  const applicationsMenuList = useMemo(() => (category === 'all' ? applications : applications.filter((a) => a.category === category)), [applications, category])
  return (
    <div>
      <div className="p-1 m-0">
        <div className="relative z-10">
          <Input readOnly placeholder="Find info, Ask questions or run queries" className="outline-0" />
          <Kbd value="/" combo={['shift']} description="for commands" variant="secondary" className="absolute top-2 right-2 z-20" onCmd={() => setIsCmdMode(!isCmdMode)} />
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
          <CategoryControl value={category} onValueChange={setCategory} className="px-2" />
          <ApplicationMenu applications={applicationsMenuList} onSelect={(app) => alert(`${app.category} : ${app.code}`)} />
        </div>
      )}
    </div>
  )
}
