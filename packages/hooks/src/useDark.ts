import { useMediaQuery } from './useMediaQuery'

export const useDarkMode = (): boolean => {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')
  return isDark
}
