import type { ApplicationRequest } from '@/app/api/applications/route'
import type { CategoriesRequest } from '@/app/api/categories/route'
import type { CommandsRequest } from '@/app/api/commands/route'
import type { LogRequest } from '@/app/api/logs/route'
import { config } from '@/config'

const apiRoute = {
  getLogs: {
    pathname: '/api/logs',
    method: 'GET'
  },
  getCategories: {
    pathname: '/api/categories',
    method: 'GET'
  },
  getApplications: {
    pathname: '/api/applications',
    method: 'GET'
  },
  getCommands: {
    pathname: '/api/commands',
    method: 'GET'
  }
} satisfies Record<string, { pathname: string; method: 'GET' | 'POST' }>

export type ApiRequest = {
  getCategories: CategoriesRequest
  getLogs: LogRequest
  getApplications: ApplicationRequest
  getCommands: CommandsRequest
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
  return fetch(url, options).then((res) => {
    return res.json()
  })
}

export const api = <Action extends keyof ApiRequest>(action: Action, body: ApiRequest[Action]['body'], opts?: RequestInit): Promise<ApiRequest[Action]['response']> => {
  const { pathname, method } = apiRoute[action]
  return fetcher(pathname, method, body, opts)
}
