'use client'

import { Badge, Button, Dialog, DialogContent, DialogTrigger, Input } from '@repo/ui'
import { Search, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

import { Kbd } from '@/components/ui/kbd'
import { APPLICATION_CATEGORIES, APPLICATIONS } from '@/lib/constants'

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
      <DialogContent className="sm:max-w-[600px] p-0 bg-gray-100">
        <div>
          <div className="p-1 m-0">
            <Input placeholder="Find info, Ask questions or run queries" />
          </div>
          <div className="p-1 pt-0 space-y-2">
            <div className="overflow-hidden relative">
              <div className="flex flex-nowrap space-x-2 overflow-auto w-full">
                {tags.map((tag) => {
                  return (
                    <Badge variant="outline" key={tag} className="whitespace-nowrap bg-gray-200 font-normal text-muted-foreground">
                      <Star className="size-2 mr-1" />
                      {tag}
                    </Badge>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-nowrap space-x-1">
              {['all', ...APPLICATION_CATEGORIES].map((c) => (
                <Button variant="outline" key={c} size="sm">
                  {c}
                </Button>
              ))}
            </div>
            <div className="h-[300px] p-2 overflow-y-auto">
              {APPLICATIONS.map(({ category, code }) => {
                return (
                  <div key={code}>
                    {category} {code}
                  </div>
                )
              })}
            </div>
          </div>
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
        </div>
      </DialogContent>
    </Dialog>
  )
}
