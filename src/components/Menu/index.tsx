import getAllPosts from 'lib/getAllPosts'

import MenuList from './MenuList'

async function getDocs() {
  const docs = await getAllPosts('documentation')
  return docs
}

async function getAPI() {
  const api = await getAllPosts('api')
  return api
}

async function getInher() {
  const inher = await getAllPosts('inheritance')
  return inher
}

async function getAnima() {
  const anima = await getAllPosts('animation')
  return anima
}

export const Menu = async () => {
  const docs = await getDocs()
  const api = await getAPI()
  const inher = await getInher()
  const anima = await getAnima()
  return <MenuList docs={docs} apiData={api} inherData={inher} animaData={anima} />
}
