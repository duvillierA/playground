import { cn } from '@repo/lib'
import React from 'react'

import Icon from '@/components/common/icon'
import { IntlDateTime } from '@/components/common/intl/date/dateTime'

type FooterProps = {
  className?: string
}

const now = new Date()

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('py-4 border-t h-14 flex items-center', className)}>
      <div className="container mx-auto">
        <p className="flex items-center">
          <Icon name="calendar" className="size-4 text-muted-foreground mr-1" />
          <small className="text-muted-foreground">
            <IntlDateTime
              value={now}
              options={{
                dateStyle: 'long',
                timeStyle: 'short'
              }}
            />
          </small>
        </p>
      </div>
    </footer>
  )
}
