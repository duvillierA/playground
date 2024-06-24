import type { ApplicationDocument } from '@/app/api/applications/route'
import Icon, { type IconName, type IconProps } from '@/components/common/icon'

export const getApplicationIcon = (code: ApplicationDocument['code']): IconName => {
  switch (code) {
    case 'access':
      return 'user-cog'
    case 'aws':
      return 'cloud-cog'
    case 'bar':
      return 'rainbow'
    case 'catalog':
      return 'folder'
    case 'datadog':
      return 'dog'
    case 'discovery':
      return 'gauge'
    case 'etl':
      return 'arrow-right-left'
    case 'lineage':
      return 'waypoints'
    case 'logs':
      return 'shield-alert'
    case 'observability':
      return 'scan-eye'
    case 'policies':
      return 'square-gantt-chart'
    case 'sidecar':
      return 'sparkles'
    case 'splunk':
    case 'foo':
    default:
      return 'circle-help'
  }
}

type ApplicationIconProps = Pick<ApplicationDocument, 'code'> & Omit<IconProps, 'name'>

export const ApplicationIcon: React.FC<ApplicationIconProps> = ({ code, ...props }) => {
  return <Icon {...props} name={getApplicationIcon(code)} />
}
