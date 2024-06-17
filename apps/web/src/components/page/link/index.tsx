import Link from 'next/link'
import { useLocale } from 'next-intl'
import type { PropsWithChildren } from 'react'

import type { Page } from '@/config/sitemap'
import { useLinkHref } from '@/hooks/link'

type PageLinkProps = PropsWithChildren<{
  page: Page
  query?: Page['query']
}>

export const PageLink: React.FC<PageLinkProps> = ({ page, query = {}, children }) => {
  const locale = useLocale()
  const href = useLinkHref({
    pathname: page.pathname ?? '/',
    query: { locale, ...query }
  })

  return <Link href={href}>{children}</Link>
}
