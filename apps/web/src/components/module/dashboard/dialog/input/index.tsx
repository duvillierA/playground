import { Input } from '@repo/ui'
import { useTranslations } from 'next-intl'
import React from 'react'

import Icon from '@/components/common/icon'
import { Kbd } from '@/components/ui/kbd'

export const DashboardDialogInput: React.FC<{
  onChangeValue: (arg: string) => void
  value: string
}> = ({ onChangeValue, value }) => {
  const t = useTranslations('Command')
  return (
    <div className="relative z-10 border-b bg-white rounded-t-sm overflow-hidden flex items-center justify-between px-4">
      <Icon name="search" className="size-5 text-muted-foreground" />
      <Input
        autoFocus
        placeholder={t('title')}
        className="h-12 focus:outline-none focus-within:outline-none outline-none border-0 focus:border-0 focus:ring-0 focus:ring-offset-0 focus:shadow-none focus:shadow-offset-0 rounded-none"
        value={value}
        onChange={(e) => {
          onChangeValue(e.target.value ?? '')
        }}
      />
      <Kbd
        className="whitespace-nowrap"
        value="Slash"
        text="/"
        combo={['shift']}
        description="for commands"
        variant="secondary"
        onCmd={() => {
          onChangeValue(value.startsWith('/') ? '' : '/')
        }}
      />
    </div>
  )
}
