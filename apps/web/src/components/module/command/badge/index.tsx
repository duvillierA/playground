import { Badge } from '@repo/ui'

import type { CommandsDocument } from '@/app/api/commands/route'
import Icon from '@/components/common/icon'
import { cn } from '@/lib/styles'

export const CommandBadge: React.FC<{ command: CommandsDocument }> = ({ command }) => {
  return (
    <Badge variant="outline" key={command.category} className={cn(`size-8 inline-flex rounded-sm p-1 text-application-tools bg-white`)}>
      <Icon name="info" className="size-6" strokeWidth={1} />
      <span className="sr-only">{command.code}</span>
    </Badge>
  )
}
