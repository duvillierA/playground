import React, { type PropsWithChildren } from 'react'

import { classnames } from '@/lib/styles'

type SectionProps = PropsWithChildren<{
  asContainer?: boolean
}>

export const Section: React.FC<SectionProps> = ({ asContainer, children }) => {
  return (
    <section
      className={classnames({
        'container mx-auto': asContainer
      })}
    >
      {children}
    </section>
  )
}
