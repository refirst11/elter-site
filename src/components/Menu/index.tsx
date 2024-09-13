import getAllPosts from 'lib/getAllPosts'

import MenuList from './MenuList'

async function getDocs() {
  const docs = await getAllPosts('documentation')
  return docs
}

async function getCore() {
  const core = await getAllPosts('coreapi')
  return core
}

async function getHelper() {
  const helpers = await getAllPosts('helpers')
  return helpers
}

async function getHooks() {
  const hooks = await getAllPosts('hooks')
  return hooks
}

export const Menu = async () => {
  const docs = await getDocs()
  const core = await getCore()
  const helpers = await getHelper()
  const hooks = await getHooks()
  return <MenuList docs={docs} core={core} helpers={helpers} hooks={hooks} />
}
