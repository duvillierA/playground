export type Href = {
  readonly exact?: boolean
  readonly pathname?: string
  readonly query?: Record<string, unknown>
}

export type Page = {
  id: keyof IntlMessages
  title: string // keyof IntlMessages
} & Href

export const indexPageUrl = {
  title: 'IndexPage.title',
  pathname: '/[locale]',
  id: 'IndexPage'
} satisfies Page

export const aboutPageUrl = {
  title: 'AboutPage.title',
  pathname: '/[locale]/about',
  id: 'AboutPage'
} satisfies Page

export const intlPageUrl = {
  title: 'IntlPage.title',
  pathname: '/[locale]/intl',
  id: 'IntlPage'
} satisfies Page

export const sitemap = {
  pages: [indexPageUrl, aboutPageUrl, intlPageUrl] satisfies Page[]
} as const
