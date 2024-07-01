import { useEffect, useState } from 'react'

export const useDidMount = (): boolean => {
  const [didMount, setDidMount] = useState<boolean>(false)
  useEffect(() => {
    setDidMount(true)
  }, [])
  return didMount
}
