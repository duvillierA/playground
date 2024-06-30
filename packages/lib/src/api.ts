import { addQueryParams } from './url'

type FetchBase = {
  pathname: string
  host: string
  opts?: RequestInit
}

type FetcherOptional =
  | {
      method: 'POST'
      params?: Record<string, unknown>
    }
  | {
      method: 'GET'
      params?: Record<string, unknown>
    }

export type FetcherProps = FetchBase & FetcherOptional

export const fetcher = ({ host, pathname, method, params, opts }: FetcherProps) => {
  const url = new URL(pathname, host)
  const options: RequestInit = {
    ...opts,
    method,
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  }

  if (params && Object.keys(params).length > 0) {
    if (method === 'POST') {
      options.body = JSON.stringify(params)
    } else {
      url.pathname = addQueryParams(url, params).pathname
    }
  }
  return fetch(url, options).then((res) => {
    return res.json()
  })
}
