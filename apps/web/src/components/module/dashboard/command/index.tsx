'use client'

import { Button, Dialog, DialogContent, DialogTrigger } from '@repo/ui'
import { Search } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

import { DashboardCommandContent } from '@/components/module/dashboard/command/content'
import { Kbd } from '@/components/ui/kbd'
import { APPLICATIONS } from '@/lib/constants'

const tags = [...Array(2).keys()].map((i) => `How many times user ${i} has made Y`)

export const DashboardCommand: React.FC = () => {
  const t = useTranslations('Common')
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <Button>
          <Search className="mr-1 size-4" />
          {t('search')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[680px] p-0 bg-gray-100">
        <DashboardCommandContent tags={tags} applications={APPLICATIONS} />
        <div className="flex justify-between items-center p-2 bg-white">
          <div className="space-x-2">
            <Kbd value="T" description="Move" />
            <Kbd value="B" description="Open" />
            <Kbd value="Esc" description="Close" />
          </div>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
