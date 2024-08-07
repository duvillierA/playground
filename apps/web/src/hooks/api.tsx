import useSWR from 'swr'

import type { ApiRequest } from '@/lib/api'
import { api } from '@/lib/api'

type Action = keyof ApiRequest

export const useApiQuery = <T extends Action>(action: T, body: ApiRequest[T]['body'], opts?: RequestInit) => {
  const { data, error, isLoading, mutate } = useSWR([action, body, opts], () => api(action, body, opts))

  return {
    data,
    error,
    loading: isLoading,
    reload: mutate
  }
}
