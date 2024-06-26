import { useLocale } from 'next-intl'

export type UseLinkProps = {
  pathname: string
  query: Record<string, unknown>
}

// Handle 3 types of dynamic routes: https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
// - /[locale]/blog/[slug] segment
// - /[locale]/blog/[...slug] catchAllSegment
// - /[locale]/blog/[[...slug]] optionalCatchAllSegment
export function getLinkPathname(pathname: UseLinkProps['pathname'], query: UseLinkProps['query']) {
  return Object.entries(query).reduce((acc, [key, segment]) => {
    if (typeof segment === 'string') {
      return acc.replace(`[${key}]`, segment)
    }
    if (Array.isArray(segment)) {
      const catchAllSegment = `[...${key}]`
      const optionalCatchAllSegment = `[[...${key}]]`
      if (segment.length === 0) {
        return acc.replace(`/${optionalCatchAllSegment}`, '')
      }
      const slugs = segment.join('/')
      return acc.replace(`${optionalCatchAllSegment}`, slugs).replace(`${catchAllSegment}`, slugs)
    }
    throw new Error('unknown query type')
  }, pathname)
}

export function useLink({ pathname, query }: UseLinkProps) {
  const locale = useLocale()
  const linkPathname = getLinkPathname(pathname, { locale, ...query })
  return {
    pathname: linkPathname
  }
}
