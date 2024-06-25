import getAllPosts from 'lib/getAllPosts'

import MenuList from './MenuList'

async function getPosts() {
  const posts = await getAllPosts()
  return posts
}

export const Menu = async () => {
  const posts = await getPosts()
  return <MenuList posts={posts} />
}
