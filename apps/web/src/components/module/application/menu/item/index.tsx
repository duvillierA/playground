import React from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import { ApplicationBadge } from '@/components/module/application/badge'
import { Kbd } from '@/components/ui/kbd'
import { cn } from '@/lib/styles'

type ApplicationMenuItemProps = {
  application: ApplicationDocument
  kbd?: string
  onSelect: () => void
  tabIndex?: number
  className?: string
}

export const ApplicationMenuItem: React.FC<ApplicationMenuItemProps> = ({ application, kbd, onSelect, tabIndex, className }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSelect()
    }
  }
  return (
    <div className={cn('group border-y border-transparent flex justify-between items-center py-2 outline-none', 'transition ease-in-out hover:cursor-pointer hover:border-gray-200 hover:bg-white focus:bg-white focus:border-gray-200', className)} onClick={() => onSelect()} onKeyDown={handleKeyDown} role="menuitem" tabIndex={tabIndex}>
      <span className="space-x-2 inline-flex items-center">
        <ApplicationBadge application={application} />
        <span className="flex items-baseline space-x-2">
          <span className="text-foreground/80 group-hover:text-foreground group-focus:text-foreground leading-6 capitalize">{application.code}</span>
          <small className="not-italic text-muted-foreground">Lorem ipsum dolor sit amet</small>
        </span>
      </span>
      {kbd && <Kbd value={application.code.substring(0, 1).toUpperCase()} combo={['alt', 'shift']} />}
    </div>
  )
}
