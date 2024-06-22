import type { LogRequest } from '@/app/api/logs/route'
import { logRoute } from '@/app/api/logs/route'
import { config } from '@/config'

const apiRoute = {
  getLogs: logRoute
} as const

export type ApiRequest = {
  getLogs: LogRequest
}

const fetcher = (pathname: string, method: 'GET' | 'POST', body?: Record<string, unknown>) => {
  const url = new URL(pathname, config.server.host)
  const options: RequestInit = {
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

export const api = <Action extends keyof ApiRequest>(action: Action, body: ApiRequest[Action]['body']): Promise<ApiRequest[Action]['response']> => {
  const { pathname, method } = apiRoute[action]
  return fetcher(pathname, method, body)
}
