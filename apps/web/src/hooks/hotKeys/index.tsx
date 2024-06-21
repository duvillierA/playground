import { useEffect } from 'react'

export type HookHotKeyProps = {
  key: string
  onKeyDown: () => void
}

export const useHotKey = ({ key, onKeyDown }: HookHotKeyProps) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      console.log('useHotKey', e)
      if (e.key === key && (e.metaKey || e.ctrlKey || e.shiftKey)) {
        e.preventDefault()
        onKeyDown()
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [key, onKeyDown])
}
