import type { PropsWithChildren } from 'react'

import type { PageProps } from '@/app/_interfaces/page'
import { Main } from '@/components/layout'
import { DashboardHeader } from '@/components/module/dashboard/header'

const DashboardLayout: React.FC<PropsWithChildren<PageProps>> = async ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white">
        <DashboardHeader />
      </div>
      <Main asContainer className="space-y-6 py-12">
        {children}
      </Main>
    </div>
  )
}

export default DashboardLayout
