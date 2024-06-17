import createMiddleware from 'next-intl/middleware'

import { locale } from '@/config/locale'

export default createMiddleware({
  // A list of all locales that are supported
  locales: locale.locales,

  // Used when no locale matches
  defaultLocale: locale.defaultLocale
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico|manifest|sitemap).*)']
}
