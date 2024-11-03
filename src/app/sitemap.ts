import type { MetadataRoute } from 'next'
import getAllPosts from 'lib/getAllPosts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.PROD_URL || ''
  const currentDate = new Date()
  const docs = await getAllPosts('documentation')
  const api = await getAllPosts('api')
  const inher = await getAllPosts('inheritance')
  const anima = await getAllPosts('animation')

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: url,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1
    }
  ]

  const documentation: MetadataRoute.Sitemap = docs.map((docs) => ({
    url: `${url}/${docs.slug}`,
    lastModified: currentDate,
    priority: 1
  }))

  const coreapi: MetadataRoute.Sitemap = api.map((api) => ({
    url: `${url}/core-api/${api.slug}`,
    lastModified: currentDate,
    priority: 1
  }))

  const inheritance: MetadataRoute.Sitemap = inher.map((inher) => ({
    url: `${url}/inheritance/${inher.slug}`,
    lastModified: currentDate,
    priority: 1
  }))

  const animation: MetadataRoute.Sitemap = anima.map((anima) => ({
    url: `${url}/animation/${anima.slug}`,
    lastModified: currentDate,
    priority: 1
  }))

  return [...sitemapEntries, ...documentation, ...coreapi, ...inheritance, ...animation]
}
