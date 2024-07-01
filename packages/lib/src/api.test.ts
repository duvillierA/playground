import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { FetcherProps } from './api'
import { fetcher } from './api'

function createFetchResponse<T extends Record<string, unknown>>(data: T) {
  return { json: () => vi.fn().mockResolvedValue(data) }
}

const host = 'https://example.com'
const pathname = '/api/test'

describe('fetcher', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue(createFetchResponse({}))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch with GET method and query parameters', async () => {
    const params = { search: 'query' }
    const props: FetcherProps = {
      host,
      pathname,
      method: 'GET',
      params
    }

    await fetcher(props)

    expect(fetch).toHaveBeenCalledWith(
      `${host}${pathname}?search=query`,
      expect.objectContaining({
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      })
    )
  })

  it('should fetch with POST method and body parameters', async () => {
    const params = { key: 'value' }
    const props: FetcherProps = {
      host,
      pathname,
      method: 'POST',
      params
    }

    await fetcher(props)

    expect(fetch).toHaveBeenCalledWith(
      `${host}${pathname}`,
      expect.objectContaining({
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(params)
      })
    )
  })

  it('should fetch with GET method without parameters', async () => {
    const props: FetcherProps = {
      host,
      pathname,
      method: 'GET'
    }

    await fetcher(props)

    expect(fetch).toHaveBeenCalledWith(
      `${host}${pathname}`,
      expect.objectContaining({
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      })
    )
  })

  it('should fetch with POST method without parameters', async () => {
    const props: FetcherProps = {
      host,
      pathname,
      method: 'POST'
    }

    await fetcher(props)

    expect(fetch).toHaveBeenCalledWith(
      `${host}${pathname}`,
      expect.objectContaining({
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      })
    )
  })

  it('should handle custom options', async () => {
    const props: FetcherProps = {
      host,
      pathname,
      method: 'GET',
      opts: {
        headers: {
          Authorization: 'Bearer token'
        }
      }
    }

    await fetcher(props)

    expect(fetch).toHaveBeenCalledWith(
      `${host}${pathname}`,
      expect.objectContaining({
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          Authorization: 'Bearer token'
        }
      })
    )
  })
})
