import { isEmptyObject } from './helpers'

export const addQueryParams = (originUrl: URL, params?: Record<string, unknown> | Record<string, never>) => {
  const url = new URL(originUrl)
  if (params && !isEmptyObject(params)) {
    for (const [name, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          const arr = value
          for (const val of arr) {
            url.searchParams.append(name, String(val))
          }
        } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          url.searchParams.append(name, String(value))
        }
      }
    }
  }
  return url
}
