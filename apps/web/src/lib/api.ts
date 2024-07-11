import { fetcher, type FetcherProps } from '@repo/lib'

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
} satisfies Record<string, Pick<FetcherProps, 'pathname' | 'method'>>

export type ApiRequest = {
  getCategories: CategoriesRequest
  getLogs: LogRequest
  getApplications: ApplicationRequest
  getCommands: CommandsRequest
}

export const api = <Action extends keyof ApiRequest>(action: Action, params: ApiRequest[Action]['body'], opts?: RequestInit): Promise<ApiRequest[Action]['response']> => {
  const { pathname, method } = apiRoute[action]
  return fetcher({
    host: config.server.host,
    pathname,
    method,
    params,
    opts
  })
}
