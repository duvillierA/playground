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
  disabled?: boolean
}

const getEventCombo = (e: KeyboardEvent, combo: keyof typeof mappedCombo) => {
  return !!e[mappedCombo[combo]]
}

export const useHotKey = ({ key, onKeyDown, combo = ['meta'], disabled }: HookHotKeyProps) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      console.info('useHotKey#keydown: ', key, e)
      const comboKeyPressed = combo.reduce((acc, curr) => {
        return acc || getEventCombo(e, curr)
      }, false)
      if (e.key === key && (combo.length ? comboKeyPressed : true)) {
        e.preventDefault()
        onKeyDown()
      }
    }
    if (!disabled) {
      document.addEventListener('keydown', down)
    }
    return () => {
      if (!disabled) {
        document.removeEventListener('keydown', down)
      }
    }
  }, [key, onKeyDown, disabled, combo])
}
