import fs from 'fs/promises'
import path from 'path'

const getSlugPath = async (sourcePath: string) => {
  const folder = path.join(process.cwd(), `/src/${sourcePath}`)
  const files = await fs.readdir(folder)
  const posts = await Promise.all(
    files.map((fileName) => {
      return {
        slug: fileName.replace(/\.mdx$/, '')
      }
    })
  )
  return posts
}

export default getSlugPath
