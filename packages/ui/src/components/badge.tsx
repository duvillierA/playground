import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
  variants: {
    variant: {
      default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
      secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
      outline: 'text-foreground',
      'application-data': 'border-transparent bg-application-data text-application-data-foreground hover:bg-application-data/80',
      'application-security': 'border-transparent bg-application-security text-application-security-foreground hover:bg-application-security/80',
      'application-tools': 'border-transparent bg-application-tools text-application-tools-foreground hover:bg-application-tools/80',
      'application-store': 'border-transparent bg-application-store text-application-store-foreground hover:bg-application-store/80',
      'application-settings': 'border-transparent bg-application-settings text-application-settings-foreground hover:bg-application-settings/80'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
