import { describe, expect, it } from 'vitest'

import { addQueryParams } from './url'

const host = 'https://example.com'

describe('addQueryParams', () => {
  it('should append string parameters', () => {
    const url = new URL(host)
    const params = { search: 'query' }
    const result = addQueryParams(url, params)
    expect(result.toString()).toBe(`${host}/?search=query`)
  })

  it('should append number parameters', () => {
    const url = new URL(host)
    const params = { page: 1 }
    const result = addQueryParams(url, params)
    expect(result.toString()).toBe(`${host}/?page=1`)
  })

  it('should append boolean parameters', () => {
    const url = new URL(host)
    const params = { showDetails: true }
    const result = addQueryParams(url, params)
    expect(result.toString()).toBe(`${host}/?showDetails=true`)
  })

  it('should append array string parameters', () => {
    const url = new URL(host)
    const params = { filters: ['active', 'recent'] }
    const result = addQueryParams(url, params)
    expect(result.toString()).toBe(`${host}/?filters=active&filters=recent`)
  })

  it('should append array number parameters', () => {
    const url = new URL(host)
    const params = { filters: [1, 2] }
    const result = addQueryParams(url, params)
    expect(result.toString()).toBe(`${host}/?filters=1&filters=2`)
  })

  it('should skip null and undefined parameters', () => {
    const url = new URL(host)
    const params = {
      search: 'query',
      emptyValue: null,
      undefinedValue: undefined
    }
    const result = addQueryParams(url, params)
    expect(result.toString()).toBe(`${host}/?search=query`)
  })

  it('should handle mixed parameters', () => {
    const url = new URL(host)
    const params = {
      search: 'query',
      page: 1,
      filters: ['active', 'recent'],
      showDetails: true,
      emptyValue: null,
      undefinedValue: undefined
    }
    const result = addQueryParams(url, params)
    expect(result.toString()).toBe(`${host}/?search=query&page=1&filters=active&filters=recent&showDetails=true`)
  })

  it('should return the original URL if no params are provided', () => {
    const url = new URL(host)
    const result = addQueryParams(url)
    expect(result.toString()).toBe(`${host}/`)
  })

  it('should not modify the original URL', () => {
    const url = new URL(host)
    const params = { search: 'query' }
    const result = addQueryParams(url, params)
    expect(url.toString()).toBe(`${host}/`)
    expect(result.toString()).toBe(`${host}/?search=query`)
  })
})
