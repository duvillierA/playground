import type { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

export type IconName = keyof typeof dynamicIconImports

export interface IconProps extends LucideProps {
  name: IconName
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />
}

export default Icon
