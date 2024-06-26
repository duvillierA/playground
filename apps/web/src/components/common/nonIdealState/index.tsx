import type { IconName } from '../icon'
import Icon from '../icon'

export const NonIdealState: React.FC<{
  icon: IconName
  title: React.ReactNode
  description?: React.ReactNode
}> = ({ title, icon, description }) => {
  return (
    <div className="border flex justify-center items-center min-h-20 p-4 mx-2 rounded-md">
      <div className='font-normal text-sm space-y-1 p-2 text-center'>
        <div className='inline-flex items-center'>
          <Icon name={icon} className="size-4 mr-2" /> {title}
        </div>
        <div className="text-muted-foreground text-sm">{description}</div>
      </div>
    </div>
  )
}
