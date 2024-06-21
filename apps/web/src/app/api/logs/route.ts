import { sub } from 'date-fns'
import { NextRequest, NextResponse } from 'next/server'

interface logsDocument {
  type: 'access' | 'sidecar' | 'observability' | 'logs'
  count: number
  updatedAt: string
  createdAt: string
}

type logsCategory = 'recent' | 'saved'

export async function GET (req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url)
  const category = (searchParams.get('category') || 'recent') as logsCategory

  const data: logsDocument[] = [{
    'type': 'logs',
    'count': 36,
    'updatedAt': sub(new Date(), {
      days: 2
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 4
    }).toISOString()
  }, {
    'type': 'access',
    'count': 36,
    'updatedAt': sub(new Date(), {
      days: 2
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 4
    }).toISOString()
  },
  {
    'type': 'observability',
    'count': 36,
    'updatedAt': sub(new Date(), {
      days: 2
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 4
    }).toISOString()
  },
  {
    'type': 'sidecar',
    'count': 36,
    'updatedAt': sub(new Date(), {
      days: 2
    }).toISOString(),
    'createdAt': sub(new Date(), {
      days: 4
    }).toISOString()
  }]

  return NextResponse.json({
    data: category === 'recent' ? data.slice(0, 1) : data.shift()
  })
}
