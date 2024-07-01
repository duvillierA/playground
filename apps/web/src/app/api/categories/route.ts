import { NextResponse } from 'next/server'

import { CATEGORIES } from '@/lib/constants'

export type CategoriesDocument = (typeof CATEGORIES)[number]

export type CategoriesRequest = {
  body: Record<string, never> // ZOD interface
  response: {
    categories: CategoriesDocument[]
  }
}

export const revalidate = 600
export async function GET(): Promise<NextResponse> {
  const response = {
    categories: [...CATEGORIES]
  } satisfies CategoriesRequest['response']

  return NextResponse.json(response)
}
