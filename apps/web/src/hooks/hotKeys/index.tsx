import { useEffect } from 'react'

const mappedCombo = {
  ctrl: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey',
  alt: 'altKey'
} as const

export type HookHotKeyProps = {
  key: string
  onKeyDown: () => void
  combo?: (keyof typeof mappedCombo)[]
}

const getEventCombo = (e: KeyboardEvent, combo: keyof typeof mappedCombo) => {
  return !!e[mappedCombo[combo]]
}

export const useHotKey = ({ key, onKeyDown, combo = ['meta'] }: HookHotKeyProps) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const comboKeyPressed = combo.reduce((acc, curr) => {
        return acc || getEventCombo(e, curr)
      }, false)
      console.info('useHotKey', e.key)
      if (e.key === key && (combo.length ? comboKeyPressed : true)) {
        e.preventDefault()
        onKeyDown()
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [key, onKeyDown])
}
