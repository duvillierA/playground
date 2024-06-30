import { describe, expect, it } from 'vitest'

import { cn } from './styles'

describe('cn', () => {
  it('should combine multiple class names', () => {
    const result = cn('class1', 'class2', 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('should merge Tailwind CSS classes correctly', () => {
    const result = cn('p-2', 'p-4', 'text-center', 'text-left')
    expect(result).toBe('p-4 text-left')
  })

  it('should handle array of class names', () => {
    const result = cn(['class1', 'class2'], 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('should handle object syntax for conditional classes', () => {
    const result = cn('class1', { class2: true, class3: false })
    expect(result).toBe('class1 class2')
  })

  it('should return an empty string when no classes are provided', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('should handle a mix of all input types', () => {
    const result = cn('class1', ['class2', false && 'class3'], { class4: true, class5: false }, 'class6')
    expect(result).toBe('class1 class2 class4 class6')
  })
})
