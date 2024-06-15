export type Page<
  P extends {
    params?: Record<string, string>
    searchParams?: Record<string, string>
  } = {}
> = P & {
  params: {
    folder: 'en-us' | 'fr-fr'
  }
}
