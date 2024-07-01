import React from 'react'

import { StoreProvider } from '@/components/common/store/provider'
import type { StoreState } from '@/components/common/store/reducer'
import { Header } from '@/components/layout/header'
import { DashboardDialog } from '@/components/module/dashboard/dialog'

interface DashboardHeaderProps {
  initialState: StoreState
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ initialState }) => {
  return (
    <Header title="Logo" className="container mx-auto h-20">
      <StoreProvider initialState={initialState}>
        <DashboardDialog />
      </StoreProvider>
    </Header>
  )
}
