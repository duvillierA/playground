'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@repo/ui'
import type { PropsWithChildren } from 'react'
import type React from 'react'

export const DashboardCarousel: React.FC<
  PropsWithChildren<{
    showNavigation?: boolean
  }>
> = ({ children, showNavigation = true }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
        breakpoints: {
          '340': {
            active: false
          }
        }
      }}
      // eslint-disable-next-line tailwindcss/enforces-shorthand
      className="w-full -left-0 -right-0"
    >
      <CarouselContent>{children}</CarouselContent>
      {showNavigation && <CarouselPrevious />}
      {showNavigation && <CarouselNext />}
    </Carousel>
  )
}

export const DashboardCarouselItem: React.FC<PropsWithChildren> = ({ children }) => {
  return <CarouselItem className="lg:basis-1/2">{children}</CarouselItem>
}
