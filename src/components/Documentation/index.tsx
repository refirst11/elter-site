import getAllPosts from 'lib/getAllPosts'

import Lists from './List.css'

async function getPosts() {
  const posts = await getAllPosts()
  return posts
}

export const Documentation = async () => {
  const posts = await getPosts()
  return <Lists posts={posts} />
}
