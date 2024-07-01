import { describe, expect, it } from 'vitest'

import { isEmptyObject } from './helpers'

describe('isEmptyObject', () => {
  it('should return true for an empty object', () => {
    const obj = {}
    expect(isEmptyObject(obj)).toBe(true)
  })

  it('should return false for a non-empty object', () => {
    const obj = { key: 'value' }
    expect(isEmptyObject(obj)).toBe(false)
  })

  it('should return false for an object with undefined properties', () => {
    const obj = { key: undefined }
    expect(isEmptyObject(obj)).toBe(false)
  })

  it('should return false for an object with null properties', () => {
    const obj = { key: null }
    expect(isEmptyObject(obj)).toBe(false)
  })

  it('should return true for an object created with null prototype', () => {
    const obj = Object.create(null)
    expect(isEmptyObject(obj)).toBe(true)
  })
})
