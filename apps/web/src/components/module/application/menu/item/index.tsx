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
    <div className={cn('flex justify-between items-center py-1 hover:cursor-pointer hover:bg-white', className)} onClick={() => onSelect()} onKeyDown={handleKeyDown} role="menuitem" tabIndex={tabIndex}>
      <span className="space-x-2 inline-flex items-center">
        <ApplicationBadge application={application} />
        <span className="flex items-baseline space-x-2">
          <span className="text-foreground/80 leading-6 capitalize">{application.code}</span>
          <small className="not-italic text-muted-foreground">Lorem ipsum dolor sit amet</small>
        </span>
      </span>
      {kbd && <Kbd value={kbd} />}
    </div>
  )
}
