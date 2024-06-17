import { config } from '@/config'

export type UseLinkHrefProps = {
  pathname: string
  query: Record<string, string>
}
export function useLinkHref({ pathname, query }: UseLinkHrefProps) {
  const url = new URL(pathname, config.server.host)
  url.pathname = url.pathname.replace(/\[(\w+)\]/g, (_, segment) => {
    const value = query[segment]
    return value
  })
  return url.toString()
}
