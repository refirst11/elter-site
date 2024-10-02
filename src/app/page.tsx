import { Home } from 'components/Home'
import generateSEOData from 'lib/generateSEOData'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEOData({
  title: 'Documentation',
  subtitle: 'TypedCSSX is a CSS-in-JS library for TypeScript that creating performance type-safe styles, high productivity and code quality.'
})

export default function Page() {
  return <Home />
}
