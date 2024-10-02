import { Headers } from './Headers'
import { NpmPackage } from 'types/NpmPackage'

const getVersion = async (): Promise<NpmPackage> => {
  const url = process.env.VERSION_URL || ''
  const response = await fetch(url, {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache'
    }
  })

  const data: NpmPackage = await response.json()
  return data
}

export const Header = async () => {
  const data = await getVersion()
  const latestVersion = data['dist-tags'].latest

  return <Headers version={latestVersion} />
}
