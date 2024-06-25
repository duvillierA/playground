import type { ApplicationDocument } from '@/app/api/applications/route'
import Icon, { type IconName, type IconProps } from '@/components/common/icon'

export const getCategoryIcon = (category: ApplicationDocument['category']): IconName => {
  switch (category) {
    case 'data':
      return 'database'
    case 'security':
      return 'shield'
    case 'settings':
      return 'settings'
    case 'store':
      return 'store'
    case 'tools':
      return 'pen-tool'
    default:
      return 'circle-help'
  }
}

type CategoryIconProps = Pick<ApplicationDocument, 'category'> & Omit<IconProps, 'name'>

export const CategoryIcon: React.FC<CategoryIconProps> = ({ category, ...props }) => {
  return <Icon {...props} name={getCategoryIcon(category)} />
}
