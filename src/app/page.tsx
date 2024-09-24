import { Home } from 'components/Home'
import generateSEOData from 'lib/generateSEOData'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEOData({ title: 'Documentation', subtitle: 'Typed CSS X - The Future of Styling with TypeScript and CSS' })

export default function Page() {
  return <Home />
}
