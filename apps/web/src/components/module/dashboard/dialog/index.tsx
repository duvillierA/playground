'use client'

import { Button, Dialog, DialogContent, DialogTrigger } from '@repo/ui'
import React, { useState } from 'react'

import { DashboardCommandButton } from '@/components/module/dashboard/command/button'
import { Kbd } from '@/components/ui/kbd'
import { APPLICATIONS } from '@/lib/constants'

import { DashboardDialogContent } from './content'

const tags = [...Array(2).keys()].map((i) => `How many times user ${i} has made Y`)

export const DashboardDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <DashboardCommandButton onCmd={() => setIsOpen(!isOpen)} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[680px] p-0 bg-gray-100">
        <div>
          <DashboardDialogContent tags={tags} applications={APPLICATIONS} />
          <div className="flex justify-between items-center p-2 bg-white">
            <div className="flex items-center space-x-2">
              <div className="space-x-1 flex items-center">
                <Kbd value="esc" />
                <span className="text-sm text-muted-foreground">Close</span>
              </div>
              <div className="space-x-1 flex items-center">
                <Kbd value="upDown" />
                <span className="text-sm text-muted-foreground">Navigate</span>
              </div>
              <div className="space-x-1 flex items-center">
                <Kbd value="Enter" />
                <span className="text-sm text-muted-foreground">Open</span>
              </div>
            </div>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}