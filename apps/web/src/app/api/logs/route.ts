import { sub } from 'date-fns'
import { NextRequest, NextResponse } from 'next/server'

export interface LogDocumentBase {
  type: 'access' | 'sidecar' | 'observability' | 'logs'
  count: number
  updatedAt: string
  createdAt: string
}

export interface LogDocument extends LogDocumentBase {
  type: 'access' | 'sidecar' | 'observability' | 'logs'
  count: number
  updatedAt: string
  createdAt: string
}


export const logRoute = {
  pathname: '/api/logs',
  method: 'GET'
} as const

export type LogRequest = {
  body: Record<string, never>
  response: {
    data: {
      saved: LogDocument[]
      recent: LogDocument[]
    }
  }
}

export async function GET (req: NextRequest): Promise<NextResponse> {
  const data: LogDocument[] = [{
    'type': 'logs',
    'count': Math.floor(Math.random() * (100 - 30 + 1) + 30),
    'updatedAt': sub(new Date(), {
      days: 2
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 3
    }).toISOString()
  }, {
    'type': 'access',
    'count': Math.floor(Math.random() * (100 - 30 + 1) + 30),
    'updatedAt': sub(new Date(), {
      days: 3
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 4
    }).toISOString()
  },
  {
    'type': 'observability',
    'count': Math.floor(Math.random() * (100 - 30 + 1) + 30),
    'updatedAt': sub(new Date(), {
      days: 5
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 6
    }).toISOString()
  },
  {
    'type': 'sidecar',
    'count': Math.floor(Math.random() * (100 - 30 + 1) + 30),
    'updatedAt': sub(new Date(), {
      days: 1
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 2
    }).toISOString()
  }]

  const response = {
    data: {
      recent: data.slice(0, 1),
      saved: data.slice(1)
    }
  } satisfies LogRequest['response']

  return NextResponse.json(response)
}
