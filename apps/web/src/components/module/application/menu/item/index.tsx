import { cn } from '@repo/lib'
import React, { useEffect, useRef } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import { ApplicationBadge } from '@/components/module/application/badge'
import { Kbd, type KbdProps } from '@/components/ui/kbd'

type ApplicationMenuItemProps = {
  application: ApplicationDocument
  kbd?: {
    combo: NonNullable<KbdProps['combo']>
    value: NonNullable<KbdProps['value']>
  }
  onSelect: () => void
  tabIndex?: number
  selected?: boolean
  className?: string
}

export const ApplicationMenuItem: React.FC<ApplicationMenuItemProps> = ({ application, kbd, onSelect, selected, tabIndex, className }) => {
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
        <ApplicationBadge application={application} />
        <span className="flex items-baseline space-x-2">
          <span
            className={cn('text-foreground/80 group-hover:text-foreground group-focus:text-foreground leading-6 capitalize', {
              'text-foreground': selected
            })}
          >
            {application.code}
          </span>
          <small className="not-italic text-muted-foreground">Lorem ipsum dolor sit amet</small>
        </span>
      </span>
      {kbd && <Kbd onCmd={onSelect} {...kbd} />}
    </div>
  )
}
