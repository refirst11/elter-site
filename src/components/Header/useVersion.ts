'use client'

import useSWR from 'swr'
import { NpmPackage } from 'types/NpmPackage'

const fetcher = (url: string): Promise<NpmPackage> => fetch(url).then((res) => res.json())

export const useVersion = () => {
  const url = process.env.VERSION || ''
  const { data, error } = useSWR<NpmPackage>(url, fetcher)

  const version = data?.['dist-tags'].latest || null

  return {
    version,
    isLoading: !error && !data,
    isError: !!error
  }
}
