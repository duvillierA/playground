import { cn } from '@repo/lib'
import React from 'react'

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  loading?: boolean
}

function Skeleton({ className, loading, ...props }: SkeletonProps) {
  return (
    <span
      className={cn(
        'inline-block',
        {
          'animate-pulse rounded-md bg-muted text-transparent shadow-none': loading
        },
        className
      )}
      {...props}
    >
      {props.children}
    </span>
  )
}

export { Skeleton }
