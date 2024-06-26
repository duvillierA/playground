import { useMemo } from 'react'

import type { CommandsDocument } from '@/app/api/commands/route'
import { NonIdealState } from '@/components/common/nonIdealState'
import { useCommandMenu } from '@/components/module/command/menu/hook'
import { CommandMenuItem } from '@/components/module/command/menu/item'
import { cn } from '@/lib/styles'

interface CommandMenuProps {
  data: CommandsDocument[]
  className?: string
  onSelect: (Command: CommandsDocument) => void
}

type MappedTypeCommand = Record<CommandsDocument['category'], CommandsDocument[]>

export const CommandMenu: React.FC<CommandMenuProps> = ({ data, className, onSelect }) => {
  const { active } = useCommandMenu({
    onSelect,
    data
  })
  const dataGrouppedByCategory = useMemo(
    () =>
      data.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] ?? []).concat(curr)
        return acc
      }, {} as MappedTypeCommand),
    [data]
  )
  return (
    <div className={cn('sm:h-[460px] overflow-y-auto', className)} role="listbox">
      <div className="divide-y">
        {Object.entries(dataGrouppedByCategory).map(([category, list]) => {
          return (
            <div key={category} className="py-4 first:pt-0 last:pb-0">
              <div className="text-muted-foreground capitalize text-sm mb-2 px-2 animate-in fade-in duration-300">{category}</div>
              <ul className="animate-in fade-in duration-700" role="group">
                {list.map((_data, i) => {
                  return <CommandMenuItem selected={active?.code === _data.code} key={_data.code} data={_data} onSelect={() => onSelect(_data)} className="px-2" tabIndex={i} />
                })}
              </ul>
            </div>
          )
        })}
      </div>
      {data.length === 0 && <NonIdealState title="No commands found" description="Try to search for another command" icon="info" />}
    </div>
  )
}
