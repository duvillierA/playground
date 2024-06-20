import Link from 'next/link'
import type { PropsWithChildren } from 'react'

import type { Page } from '@/config/sitemap'
import { useLink } from '@/hooks/link'

type PageLinkProps = PropsWithChildren<
  {
    page: Page
  } & Omit<Parameters<typeof Link>[0], 'href'>
>

export const PageLink: React.FC<PageLinkProps> = ({ page, children, ...props }) => {
  const { pathname } = useLink({
    pathname: page.pathname ?? '/',
    query: page.query ?? {}
  })
  return (
    <Link {...props} href={pathname}>
      {children}
    </Link>
  )
}
