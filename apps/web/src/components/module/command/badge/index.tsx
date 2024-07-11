import { cn } from '@repo/lib'
import { Badge, Icon } from '@repo/ui'

import type { CommandsDocument } from '@/app/api/commands/route'

export const CommandBadge: React.FC<{ command: CommandsDocument }> = ({ command }) => {
  return (
    <Badge variant="outline" key={command.category} className={cn(`size-8 inline-flex rounded-sm p-1 text-application-tools bg-white`)}>
      <Icon name="info" className="size-6" strokeWidth={1} />
      <span className="sr-only">{command.code}</span>
    </Badge>
  )
}
