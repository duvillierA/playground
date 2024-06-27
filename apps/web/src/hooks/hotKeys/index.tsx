import { useEffect } from 'react'

import { keyCodeMap } from './codes'

const mappedCombo = {
  ctrl: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey',
  alt: 'altKey'
} as const

export type HookHotKeyProps = {
  key: keyof typeof keyCodeMap
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
      console.log(e, key)
      const comboKeyPressed = combo.every((c) => getEventCombo(e, c))
      const isKey = e.code === keyCodeMap[key]
      if (isKey && comboKeyPressed) {
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
