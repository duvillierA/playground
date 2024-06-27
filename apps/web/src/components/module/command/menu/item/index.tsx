import { Badge } from '@repo/ui'
import React, { useEffect, useRef } from 'react'

import type { CommandsDocument } from '@/app/api/commands/route'
import { cn } from '@/lib/styles'

import { CommandBadge } from '../../badge'

type CommandMenuItemProps = {
  data: CommandsDocument
  onSelect: () => void
  tabIndex?: number
  selected?: boolean
  className?: string
}

export const CommandMenuItem: React.FC<CommandMenuItemProps> = ({ data, onSelect, selected, tabIndex, className }) => {
  const menuItemRef = useRef<HTMLDivElement>(null)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSelect()
    }
  }
  useEffect(() => {
    if (selected) {
      menuItemRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      })
    }
  }, [selected])
  return (
    <div
      ref={menuItemRef}
      role="option"
      aria-selected={selected}
      className={cn(
        'group border-y border-transparent flex justify-between items-center py-2 outline-none',
        'transition ease-in-out hover:cursor-pointer hover:border-gray-200 hover:bg-white focus:bg-white focus:border-gray-200',
        {
          'border-gray-200 bg-white cursor-default hover:cursor-default': selected
        },
        className
      )}
      onClick={() => onSelect()}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
    >
      <span className="space-x-2 inline-flex items-center">
        <CommandBadge command={data} />
        <span className="flex items-baseline space-x-2">
          <span
            className={cn('text-foreground/80 group-hover:text-foreground group-focus:text-foreground leading-6 capitalize', {
              'text-foreground': selected
            })}
          >
            {data.name}
          </span>
          <span className="space-x-1">
            {data.tags.map((tag) => (
              <Badge
                variant="outline"
                key={tag}
                className={cn('border-none', {
                  'bg-indigo-100 text-indigo-500 capitalize font-semibold': tag !== 'resource',
                  'bg-teal-100 text-teal-600 capitalize font-semibold': tag === 'resource'
                })}
              >
                {tag}
              </Badge>
            ))}
          </span>
          <small className="not-italic text-muted-foreground">{data.description}</small>
        </span>
      </span>
    </div>
  )
}
