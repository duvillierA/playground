import type { PropsWithChildren } from 'react'

import type { PageProps } from '@/app/_interfaces/page'
import { Main } from '@/components/layout/main'
import { DashboardHeader } from '@/components/module/dashboard/header'
import { api } from '@/lib/api'

async function getInitialState() {
  return Promise.all([api('getApplications', {}), api('getCommands', {}), api('getCategories', {})])
}

const DashboardLayout: React.FC<PropsWithChildren<PageProps>> = async ({ children }) => {
  const [applications, commands, categories] = await getInitialState()
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white">
        <DashboardHeader
          initialState={{
            ...applications,
            ...commands,
            ...categories
          }}
        />
      </div>
      <Main asContainer className="space-y-8 py-12">
        {children}
      </Main>
    </div>
  )
}

export default DashboardLayout
