'use client'

import { Dialog, DialogContent, DialogTrigger } from '@repo/ui'
import React, { useState } from 'react'

import { DashboardCommandButton } from './button'

const tags = [...Array(2).keys()].map((i) => `How many times user ${i} has made Y`)

export const DashboardCommand: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <DashboardCommandButton onCmd={() => setIsOpen(!isOpen)} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[680px] p-0 bg-gray-100" />{' '}
    </Dialog>
  )
}
