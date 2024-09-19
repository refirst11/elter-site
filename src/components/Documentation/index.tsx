import getAllPosts from 'lib/getAllPosts'
import Lists from './List'

async function getDocs() {
  const docs = await getAllPosts('documentation')
  return docs
}

async function getAPI() {
  const api = await getAllPosts('api')
  return api
}

async function getHelper() {
  const helper = await getAllPosts('helper')
  return helper
}

async function getHook() {
  const hook = await getAllPosts('hook')
  return hook
}

export const Documentation = async () => {
  const docs = await getDocs()
  const api = await getAPI()
  const helper = await getHelper()
  const hook = await getHook()
  return <Lists docs={docs} apiData={api} helperData={helper} hookData={hook} />
}
