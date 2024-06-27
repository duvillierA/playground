import { Input } from '@repo/ui'
import { useTranslations } from 'next-intl'
import React from 'react'

import { Kbd } from '@/components/ui/kbd'

export const DashboardDialogInput: React.FC<{
  onChangeValue: (arg: string) => void
  value: string
}> = ({ onChangeValue, value }) => {
  const t = useTranslations('Command')
  return (
    <div className="relative z-10">
      <Input
        autoFocus
        placeholder={t('title')}
        className="focus:outline-none focus-within:outline-none"
        value={value}
        onChange={(e) => {
          onChangeValue(e.target.value ?? '')
        }}
      />
      <Kbd
        value="Slash"
        text="/"
        combo={['shift']}
        description="for commands"
        variant="secondary"
        className="absolute top-2 right-2 z-20"
        onCmd={() => {
          onChangeValue(value.startsWith('/') ? '' : '/')
        }}
      />
    </div>
  )
}
