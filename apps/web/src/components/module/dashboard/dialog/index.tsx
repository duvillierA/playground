'use client'

import { Button, Dialog, DialogContent } from '@repo/ui'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

import { useStore } from '@/components/common/store'
import { DashboardCommandButton } from '@/components/module/dashboard/command/button'
import { Kbd, KbdIcon } from '@/components/ui/kbd'

import { DashboardDialogContent } from './content'

const tags = [...Array(2).keys()].map((i) => `How many times user ${i} has made Y`)

export const DashboardDialog: React.FC = () => {
  const t = useTranslations('Common')
  const [isOpen, setIsOpen] = useState(false)
  const { applications, commands } = useStore()
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DashboardCommandButton onCmd={() => setIsOpen(!isOpen)} />
      <DialogContent className="sm:max-w-[680px] p-0 bg-gray-100">
        <div>
          <DashboardDialogContent tags={tags} applications={applications} commands={commands} />
          <div className="flex justify-between items-center p-2 bg-white rounded-b-sm border-t">
            <div className="flex items-center space-x-3">
              <div className="space-x-1 flex items-center">
                <Kbd className="min-h-6 px-2.5" text="esc" />
                <span className="text-sm text-muted-foreground">{t('close')}</span>
              </div>
              <div className="space-x-1 flex items-center">
                <Kbd className="min-h-6 px-2.5" text={<KbdIcon name="arrow-up-down" />} />
                <span className="text-sm text-muted-foreground">{t('navigate')}</span>
              </div>
              <div className="space-x-1 flex items-center">
                <Kbd className="min-h-6 px-2.5" text={<KbdIcon name="corner-down-left" />} />
                <span className="text-sm text-muted-foreground">{t('open')}</span>
              </div>
            </div>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              {t('close')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
