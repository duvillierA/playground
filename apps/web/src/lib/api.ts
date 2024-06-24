import type { ApplicationRequest } from '@/app/api/applications/route'
import type { LogRequest } from '@/app/api/logs/route'
import { config } from '@/config'

const apiRoute = {
  getLogs: {
    pathname: '/api/logs',
    method: 'GET'
  },
  getApplications: {
    pathname: '/api/applications',
    method: 'GET'
  }
} satisfies Record<string, { pathname: string; method: 'GET' | 'POST' }>

export type ApiRequest = {
  getLogs: LogRequest
  getApplications: ApplicationRequest
}

const fetcher = (pathname: string, method: 'GET' | 'POST', body?: Record<string, unknown>, opts?: RequestInit) => {
  const url = new URL(pathname, config.server.host)
  const options: RequestInit = {
    ...opts,
    method,
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  }

  if (body && Object.keys(body).length > 0) {
    if (method === 'POST') {
      options.body = JSON.stringify(body)
    } else {
      url.pathname = `${url.pathname}?${new URLSearchParams(body as Record<string, string>)}`
    }
  }

  console.log('fetcher', config.server.host, url)
  return fetch(url, options).then((res) => {
    console.log('api response', res.status, res.ok)
    return res.json()
  })
}

export const api = <Action extends keyof ApiRequest>(action: Action, body: ApiRequest[Action]['body'], opts?: RequestInit): Promise<ApiRequest[Action]['response']> => {
  const { pathname, method } = apiRoute[action]
  return fetcher(pathname, method, body, opts)
}
