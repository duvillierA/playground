'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@repo/ui'
import type React from 'react'

export const DashboardCarousel: React.FC<{
  children: React.ReactNode[]
}> = ({ children }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      className="w-full"
    >
      <CarouselContent>
        {children.map((child, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
