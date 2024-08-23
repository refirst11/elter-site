'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useVersion = () => {
  const { data, error } = useSWR<{ version: string }>('/api/version', fetcher)

  const version = data?.version || null

  return {
    version,
    isLoading: !error && !data,
    isError: !!error
  }
}
