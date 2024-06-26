import { Badge } from '@repo/ui'

import type { CommandsDocument } from '@/app/api/commands/route'
import Icon from '@/components/common/icon'

export const CommandBadge: React.FC<{ command: CommandsDocument }> = ({ command }) => {
  return (
    <Badge variant={`application-${command.category}`} key={command.category} className="size-8 inline-flex rounded-sm p-1">
      <Icon name="info" className="size-6" />
      <span className="sr-only">{command.code}</span>
    </Badge>
  )
}
