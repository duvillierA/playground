// Unit tests for getLinkHref function
/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, it } from 'vitest'

import { getLinkHref } from '.'

describe('getLinkHref', () => {
  it('should replace a single segment in the pathname', () => {
    const pathname = '/[locale]/blog/[slug]'
    const query = { locale: 'en', slug: 'post-1' }
    const result = getLinkHref(pathname, query)
    expect(result).toEqual('/en/blog/post-1')
  })

  it('should replace a catchAllSegment in the pathname', () => {
    const pathname = '/[locale]/blog/[...slug]'
    const query = { locale: 'en', slug: ['post', '1'] }
    const result = getLinkHref(pathname, query)
    expect(result).toEqual('/en/blog/post/1')
  })

  it('should replace an optionalCatchAllSegment in the pathname', () => {
    const pathname = '/[locale]/blog/[[...slug]]'
    const query = { locale: 'en', slug: ['post', '1'] }
    const result = getLinkHref(pathname, query)
    expect(result).toEqual('/en/blog/post/1')
  })

  it('should remove an optionalCatchAllSegment from the pathname if the value is an empty array', () => {
    const pathname = '/[locale]/blog/[[...slug]]'
    const query = { locale: 'en', slug: [] }
    const result = getLinkHref(pathname, query)
    expect(result).toEqual('/en/blog')
  })

  it('should throw an error if the query value is not a string or an array', () => {
    const pathname = '/[locale]/blog/[slug]'
    const query = { locale: 'en', slug: 123 }
    expect(() => getLinkHref(pathname, query as any)).toThrow('unknown query type')
  })
})
