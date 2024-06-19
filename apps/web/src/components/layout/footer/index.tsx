import { Calendar } from 'lucide-react'
import React from 'react'

import { IntlDateTime } from '@/components/common/intl'
import { classnames } from '@/lib/styles'

type FooterProps = {
  className?: string
}

const now = new Date()

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={classnames('py-4 border-t h-14 flex items-center', className)}>
      <div className="container mx-auto">
        <p className="flex items-center">
          <Calendar className="size-4 text-muted-foreground mr-1" />
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
