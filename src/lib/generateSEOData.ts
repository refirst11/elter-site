import SeoData from 'types/SeoData'

const generateSEOData = ({ title, subtitle, date }: SeoData) => {
  const url = process.env.PROD_URL
  return {
    title: title,
    description: subtitle,
    metadataBase: new URL(process.env.PROD_URL as string),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US'
      }
    },
    openGraph: {
      title: title,
      description: subtitle,
      url: process.env.PROD_URL,
      type: 'website',
      images: {
        url: url + '/typedcssx_ogp.png',
        width: 1200,
        height: 600
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: subtitle,
      images: {
        url: url + '/typedcssx_ogp.png',
        width: 1200,
        height: 600
      },
      site: '@refirst11',
      creator: '@refirst11'
    }
  }
}

export default generateSEOData
