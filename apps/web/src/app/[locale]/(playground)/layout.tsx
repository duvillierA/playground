import type { PropsWithChildren } from 'react'

import type { PageProps } from '@/app/_interfaces/page'
import { Footer } from '@/components/layout/footer'
import { Main } from '@/components/layout/main'
import { Nav } from '@/components/layout/nav'

const PlaygroundLayout: React.FC<PropsWithChildren<PageProps>> = async ({ children }) => {
  return (
    <>
      <Nav />
      <Main asContainer className="grid gap-2 py-3">
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default PlaygroundLayout
