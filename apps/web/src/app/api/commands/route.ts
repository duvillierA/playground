import { NextResponse } from 'next/server'

import type { CategoriesDocument } from '@/app/api/categories/route'

export type CommandsDocument = {
  name: string
  code: string
  description: string
  category: CategoriesDocument
  tags: ('user' | 'resource' | 'dataset' | 'keyword')[]
}

export type CommandsRequest = {
  body: Record<string, never> // ZOD interface
  response: {
    commands: CommandsDocument[]
  }
}

export const revalidate = 600
export async function GET(): Promise<NextResponse> {
  const response = {
    commands: [
      {
        category: 'data',
        description: 'Search the catalog of dataset using keywords',
        code: 'search-catalog',
        name: 'Catalog search',
        tags: ['keyword']
      },
      {
        category: 'security',
        description: 'Grant access to a specific user for a resource',
        code: 'access-grant',
        name: 'Access grant',
        tags: ['user', 'resource']
      },
      {
        category: 'tools',
        description: 'Create an api key with a given name',
        code: 'api-keys-create',
        name: 'ApiKeys create',
        tags: ['user', 'resource']
      }
    ]
  } satisfies CommandsRequest['response']

  return NextResponse.json(response)
}
