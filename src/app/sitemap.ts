import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.PROD_URL || ''
  const currentDate = new Date()

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: url,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${url}/overview`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${url}/installation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/core-api/style/create`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/core-api/style/set`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/core-api/style/global`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/core-api/style/root`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/helpers/breakpoints`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/helpers/keyframes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/helpers/selector`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/helpers/theme`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${url}/hooks/useFiremotion`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ]

  return sitemapEntries
}
