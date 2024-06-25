import { NextResponse } from 'next/server'

import { APPLICATIONS } from '@/lib/constants'

export type ApplicationDocument = (typeof APPLICATIONS)[number]

export type ApplicationRequest = {
  body: Record<string, never> // ZOD interface
  response: {
    applications: ApplicationDocument[]
  }
}

export const revalidate = 600
export async function GET(): Promise<NextResponse> {
  const response = {
    applications: APPLICATIONS
  } satisfies ApplicationRequest['response']

  return NextResponse.json(response)
}
