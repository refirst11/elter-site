import getAllPosts from 'lib/getAllPosts'

import MenuList from './MenuList'

async function getDocs() {
  const docs = await getAllPosts('documentation')
  return docs
}

async function getAPI() {
  const core = await getAllPosts('api')
  return core
}

async function getHelper() {
  const helpers = await getAllPosts('helper')
  return helpers
}

async function getHook() {
  const hook = await getAllPosts('hook')
  return hook
}

export const Menu = async () => {
  const docs = await getDocs()
  const api = await getAPI()
  const helper = await getHelper()
  const hook = await getHook()
  return <MenuList docs={docs} apiData={api} helperData={helper} hookData={hook} />
}
