import { useTranslations } from 'next-intl'
import React from 'react'

import { Header } from '@/components/layout'
import { DashboardCommand } from '@/components/module/dashboard/command'

interface DashboardHeaderProps {}

export const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  const t = useTranslations('DashboardPage')
  return (
    <Header title={t('title')} className="container mx-auto h-20">
      <DashboardCommand />
    </Header>
  )
}
