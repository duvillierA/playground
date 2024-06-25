import { useMemo } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import { ApplicationMenuItem } from '@/components/module/application/menu/item'
import { cn } from '@/lib/styles'

interface ApplicationMenuProps {
  applications: ApplicationDocument[]
  className?: string
  onSelect: (application: ApplicationDocument) => void
}

type MappedTypeApplication = Record<ApplicationDocument['category'], ApplicationDocument[]>

export const ApplicationMenu: React.FC<ApplicationMenuProps> = ({ applications, className, onSelect }) => {
  const applicationsGroupByCategory = useMemo(
    () =>
      applications.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] ?? []).concat(curr)
        return acc
      }, {} as MappedTypeApplication),
    [applications]
  )
  return (
    <div className={cn(className)}>
      {Object.entries(applicationsGroupByCategory).map(([category, _applications]) => {
        return (
          <div key={category}>
            <div className="text-muted-foreground capitalize text-sm mb-2 px-2 animate-in fade-in duration-300">{category}</div>
            <ul className="animate-in fade-in duration-700">
              {_applications.map((application, i) => {
                return <ApplicationMenuItem key={application.code} application={application} onSelect={() => onSelect(application)} kbd="test" className="px-2" tabIndex={i} />
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
