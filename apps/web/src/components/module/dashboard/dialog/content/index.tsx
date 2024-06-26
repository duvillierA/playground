import { Badge } from '@repo/ui'
import React, { useMemo } from 'react'
import { toast } from 'sonner'

import type { ApplicationDocument } from '@/app/api/applications/route'
import type { CommandsDocument } from '@/app/api/commands/route'
import Icon from '@/components/common/icon'
import { ApplicationCategoryBadge } from '@/components/module/application/badge'
import { ApplicationMenu } from '@/components/module/application/menu'
import { CategoryControl, type CategoryControlProps } from '@/components/module/category/control'
import { CommandMenu } from '@/components/module/command/menu'
import { DashboardDialogInput } from '@/components/module/dashboard/dialog/input'

export const DashboardDialogContent: React.FC<{
  tags: string[]
  applications: ApplicationDocument[]
  commands: CommandsDocument[]
}> = ({ tags, applications, commands }) => {
  const [searchValue, setSearchValue] = React.useState('')
  const [isCmdMode, setIsCmdMode] = React.useState(false)
  const [category, setCategory] = React.useState<CategoryControlProps['value']>('all')
  const applicationsMenuList = useMemo(() => {
    if (searchValue) {
      return applications.filter((a) => a.code.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return category === 'all' ? applications : applications.filter((a) => a.category === category)
  }, [applications, category, searchValue])
  const commandsMenuList = useMemo(() => {
    if (searchValue.startsWith('/')) {
      return commands.filter((a) => a.name.toLowerCase().includes(searchValue.replace(/^\//, '').toLowerCase()))
    }
    return commands
  }, [commands, searchValue])
  return (
    <div>
      <div className="p-1 m-0">
        <DashboardDialogInput
          value={searchValue}
          onChangeValue={(v) => {
            setSearchValue(v)
            setCategory('all')
            setIsCmdMode(v.startsWith('/'))
          }}
        />
      </div>
      <div className="pt-2 space-y-3">
        {isCmdMode ? (
          <CommandMenu
            data={commandsMenuList}
            onSelect={(cmd) =>
              toast(cmd.code, {
                description: <ApplicationCategoryBadge category={cmd.category} />,
                duration: 1300,
                id: cmd.code
              })
            }
          />
        ) : (
          <>
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
            <CategoryControl
              value={category}
              onValueChange={(c) => {
                setSearchValue('')
                setCategory(c)
              }}
              className="px-2"
            />
            <ApplicationMenu
              applications={applicationsMenuList}
              onSelect={(app) =>
                toast(app.code, {
                  description: <ApplicationCategoryBadge category={app.category} />,
                  duration: 1300,
                  id: app.code
                })
              }
            />
          </>
        )}
      </div>
    </div>
  )
}
