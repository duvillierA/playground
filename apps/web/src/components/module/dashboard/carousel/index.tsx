'use client'

import { Carousel, CarouselContent, CarouselItem } from '@repo/ui'
import type { PropsWithChildren } from 'react'
import type React from 'react'

export const DashboardCarousel: React.FC<PropsWithChildren> = ({ children }) => {
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
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}

export const DashboardCarouselItem: React.FC<PropsWithChildren> = ({ children }) => {
  return <CarouselItem className="md:basis-1/2 lg:basis-1/2">{children}</CarouselItem>
}
