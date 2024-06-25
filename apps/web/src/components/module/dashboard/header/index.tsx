import { useTranslations } from 'next-intl'
import React from 'react'

import { Header } from '@/components/layout/header'
import { DashboardDialog } from '@/components/module/dashboard/dialog'

interface DashboardHeaderProps {}

export const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  const t = useTranslations('DashboardPage')
  return (
    <Header title={t('title')} className="container mx-auto h-20">
      <DashboardDialog />
    </Header>
  )
}
