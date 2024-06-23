import type { ApplicationRequest } from '@/app/api/applications/route'
import { ApplicationRoute } from '@/app/api/applications/route'
import type { LogRequest } from '@/app/api/logs/route'
import { logRoute } from '@/app/api/logs/route'
import { config } from '@/config'

const apiRoute = {
  getLogs: logRoute,
  getApplications: ApplicationRoute
} as const

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
      'Content-Type': 'application/json'
    }
  }

  if (body && Object.keys(body).length > 0) {
    if (method === 'POST') {
      options.body = JSON.stringify(body)
    } else {
      url.pathname = `${url.pathname}?${new URLSearchParams(body as Record<string, string>)}`
    }
  }

  return fetch(url, options).then((res) => res.json())
}

export const api = <Action extends keyof ApiRequest>(action: Action, body: ApiRequest[Action]['body'], opts?: RequestInit): Promise<ApiRequest[Action]['response']> => {
  const { pathname, method } = apiRoute[action]
  return fetcher(pathname, method, body, opts)
}
