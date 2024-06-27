import { Home } from 'components/Home'
import generateSEOData from 'lib/generateSEOData';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOData({ title: 'Home', subtitle: 'typedcssx homepage' });

export default function Page() {
  return <Home />
}


