import { Home } from 'components/Home'
import generateSEOData from 'lib/generateSEOData'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEOData({
  title: 'documentation | elter',
  subtitle: 'CSS-in-JS library for stably building user interfaces'
})

export default function Page() {
  return <Home />
}
