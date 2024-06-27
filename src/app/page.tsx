import { Home } from 'components/Home'
import generateSEOData from 'lib/generateSEOData';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOData({ title: 'Home', subtitle: 'typedcssx homepage' });

function Page() {
  return <Home />
}

export default Page
