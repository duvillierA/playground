import { Icon, type IconName, type IconProps } from '@repo/ui'

import type { CategoriesDocument } from '@/app/api/categories/route'

export const getCategoryIcon = (category: CategoriesDocument): IconName => {
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
      return 'wrench'
    default:
      return 'circle-help'
  }
}

type CategoryIconProps = { category: CategoriesDocument } & Omit<IconProps, 'name'>

export const CategoryIcon: React.FC<CategoryIconProps> = ({ category, ...props }) => {
  return <Icon {...props} name={getCategoryIcon(category)} />
}
