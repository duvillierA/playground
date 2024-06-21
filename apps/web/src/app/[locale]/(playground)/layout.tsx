import type { PropsWithChildren } from 'react'

import type { PageProps } from '@/app/_interfaces/page'
import { Footer, Main, Nav } from '@/components/layout'

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
