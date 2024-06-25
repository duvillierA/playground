import { useMemo } from 'react'

import type { ApplicationDocument } from '@/app/api/applications/route'
import { useApplicationMenu } from '@/components/module/application/menu/hook'
import { ApplicationMenuItem } from '@/components/module/application/menu/item'
import { cn } from '@/lib/styles'

interface ApplicationMenuProps {
  applications: ApplicationDocument[]
  className?: string
  onSelect: (application: ApplicationDocument) => void
}

type MappedTypeApplication = Record<ApplicationDocument['category'], ApplicationDocument[]>

export const ApplicationMenu: React.FC<ApplicationMenuProps> = ({ applications, className, onSelect }) => {
  const { active } = useApplicationMenu({
    onSelect,
    applications
  })
  const applicationsGroupByCategory = useMemo(
    () =>
      applications.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] ?? []).concat(curr)
        return acc
      }, {} as MappedTypeApplication),
    [applications]
  )
  return (
    <div className={cn('sm:h-[460px] overflow-y-auto', className)} role="listbox">
      <div className="space-y-4 py-1">
        {Object.entries(applicationsGroupByCategory).map(([category, list]) => {
          return (
            <div key={category}>
              <div className="text-muted-foreground capitalize text-sm mb-2 px-2 animate-in fade-in duration-300">{category}</div>
              <ul className="animate-in fade-in duration-700" role="group">
                {list.map((application, i) => {
                  return <ApplicationMenuItem selected={active.code === application.code} key={application.code} application={application} onSelect={() => onSelect(application)} kbd="test" className="px-2" tabIndex={i} />
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
