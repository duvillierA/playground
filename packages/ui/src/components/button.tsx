import { Slot } from '@radix-ui/react-slot'
import { cn } from '@repo/lib'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
  variants: {
    variant: {
      default: 'border border-transparent bg-primary text-primary-foreground hover:bg-primary/90',
      destructive: 'border border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      'application-data': 'border border-transparent bg-application-data text-application-data-foreground hover:bg-application-data/90',
      'application-security': 'border border-transparent bg-application-security text-application-security-foreground hover:bg-application-security/90',
      'application-tools': 'border border-transparent bg-application-tools text-application-tools-foreground hover:bg-application-tools/90',
      'application-store': 'border border-transparent bg-application-store text-application-store-foreground hover:bg-application-store/90',
      'application-settings': 'border border-transparent bg-application-settings text-application-settings-foreground hover:bg-application-settings/90'
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      xs: 'h-7 rounded-md px-2',
      lg: 'h-11 rounded-md px-8',
      icon: 'size-10'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
