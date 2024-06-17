export type Href = {
  readonly exact?: boolean
  readonly pathname?: string
  readonly query?: Record<string, unknown>
}

export type Page = {
  id: 'about' | 'index'
  title: string // keyof IntlMessages
  description?: string // keyof IntlMessages
} & Href

export const indexPageUrl = {
  title: 'index.title',
  description: 'index.description',
  pathname: '/[locale]',
  id: 'index'
} satisfies Page

export const aboutPageUrl = {
  title: 'user.title',
  description: 'index.description',
  pathname: '/[locale]/about',
  id: 'about'
} satisfies Page

export const sitemap = {
  pages: [indexPageUrl, aboutPageUrl] satisfies Page[]
} as const
