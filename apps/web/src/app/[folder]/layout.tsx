import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import type { Page } from '@/app/_interfaces/page'

export const metadata: Metadata = {
  description: 'Modern stack',
  title: 'Playground'
}

type RootLayoutProps = PropsWithChildren<Page>

const RootLayout: React.FC<RootLayoutProps> = ({ children, params }) => {
  return (
    <html lang={params.folder}>
      <body className="bg-background">{children}</body>
    </html>
  )
}

export default RootLayout
