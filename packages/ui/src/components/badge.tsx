import { cn } from '@repo/lib'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva('inline-flex items-center rounded-full border text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
  variants: {
    variant: {
      default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
      secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
      outline: 'text-foreground',
      muted: 'border-muted text-muted-foreground',
      'application-data': 'border-transparent bg-application-data text-application-data-foreground hover:bg-application-data/80',
      'application-security': 'border-transparent bg-application-security text-application-security-foreground hover:bg-application-security/80',
      'application-tools': 'border-transparent bg-application-tools text-application-tools-foreground hover:bg-application-tools/80',
      'application-store': 'border-transparent bg-application-store text-application-store-foreground hover:bg-application-store/80',
      'application-settings': 'border-transparent bg-application-settings text-application-settings-foreground hover:bg-application-settings/80'
    },
    size: {
      default: 'px-2.5 py-0.5',
      sm: 'px-1.5 py-0.5'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
