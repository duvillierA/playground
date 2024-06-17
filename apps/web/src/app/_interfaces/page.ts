import type { locale } from '@/config/locale'

export type PageProps<
  P extends {
    params?: Record<string, string>
    searchParams?: Record<string, string>
  } = {}
> = P & {
  params: {
    locale?: (typeof locale.locales)[number]
  }
}
