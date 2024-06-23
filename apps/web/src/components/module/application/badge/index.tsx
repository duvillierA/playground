import { Badge } from '@repo/ui'

import type { ApplicationDocument } from '@/app/api/applications/route'

export const ApplicationCategoryBadge: React.FC<{
  category: ApplicationDocument['category']
}> = ({ category }) => {
  return (
    <Badge variant={`application-${category}`} className="capitalize font-normal">
      {category}
    </Badge>
  )
}

export const ApplicationBadge: React.FC<ApplicationDocument> = ({ category, code }) => {
  return (
    <Badge variant="secondary" key={category}>
      {code}
    </Badge>
  )
}
