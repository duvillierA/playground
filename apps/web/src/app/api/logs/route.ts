import { sub } from 'date-fns'
import { NextResponse } from 'next/server'
import type { ApplicationDocument } from '@/app/api/applications/route'

export interface LogDocumentBase {
  type: ApplicationDocument['code']
  category: ApplicationDocument['category']
  count: number
  updatedAt: string
  createdAt: string
}

export interface LogDocument extends LogDocumentBase {}


export const logRoute = {
  pathname: '/api/logs',
  method: 'GET'
} as const

export type LogRequest = {
  body: Record<string, never> // ZOD interface
  response: {
    data: {
      saved: LogDocument[]
      recent: LogDocument[]
    }
  }
}

export async function GET (): Promise<NextResponse> {
  const data: LogDocument[] = [{
    'type': 'logs',
    'category': 'security',
    'count': Math.floor(Math.random() * (100 - 30 + 1) + 30),
    'updatedAt': sub(new Date(), {
      days: 3
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 3
    }).toISOString()
  }, {
    'type': 'access',
    'category': 'security',
    'count': Math.floor(Math.random() * (100 - 30 + 1) + 30),
    'updatedAt': sub(new Date(), {
      days: 1
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 4
    }).toISOString()
  },
  {
    'type': 'observability',
    'category': 'data',
    'count': Math.floor(Math.random() * (100 - 30 + 1) + 30),
    'updatedAt': sub(new Date(), {
      days: 2
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 6
    }).toISOString()
  },
  {
    'type': 'sidecar',
    'category': 'tools',
    'count': Math.floor(Math.random() * (100 - 30 + 1) + 30),
    'updatedAt': sub(new Date(), {
      days: 3
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 2
    }).toISOString()
  }]

  const response = {
    data: {
      recent: data.slice(0, 1),
      saved: data.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt))
    }
  } satisfies LogRequest['response']

  return NextResponse.json(response)
}
