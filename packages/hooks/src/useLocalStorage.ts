import { useEffect, useState } from 'react'

export type HookLocalStorage<T> = [T | void, (item: T) => void]

export const useLocalStorage = <T>(key: string, state?: T): HookLocalStorage<T> => {
  const [mounted, setMounted] = useState(false)
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item)?.value : state
      } catch (err) {
        console.error(err)
      }
    }
    return state
  })
  const setValue = (value: T): void => {
    if (typeof window !== 'undefined') {
      try {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify({ value }))
      } catch (err) {
        console.error(err)
      }
    }
  }
  useEffect(() => {
    setMounted(true)
  }, [])
  return [mounted ? storedValue : state, setValue]
}
