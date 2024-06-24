import { Badge } from '@repo/ui'

import type { ApplicationDocument } from '@/app/api/applications/route'
import { ApplicationIcon } from '@/components/module/application/icon'

export const ApplicationCategoryBadge: React.FC<{
  category: ApplicationDocument['category']
}> = ({ category }) => {
  return (
    <Badge variant={`application-${category}`} className="capitalize font-normal">
      {category}
    </Badge>
  )
}

export const ApplicationBadge: React.FC<{ application: ApplicationDocument }> = ({ application }) => {
  return (
    <Badge variant={`application-${application.category}`} key={application.category} className="size-8 inline-flex rounded-sm p-1">
      <ApplicationIcon code={application.code} className="size-6" strokeWidth={1} />
      <span className="sr-only">{application.code}</span>
    </Badge>
  )
}
