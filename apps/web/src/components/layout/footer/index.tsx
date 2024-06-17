import React from 'react'

import { IntlDateTime } from '@/components/common/intl'
import { classnames } from '@/lib/styles'

type FooterProps = {
  className?: string
}

const now = new Date()

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer>
      <p className={classnames('text-right', className)}>
        Playground{' '}
        <span className="text-muted">
          <IntlDateTime value={now} options="short" />
        </span>
      </p>
    </footer>
  )
}
