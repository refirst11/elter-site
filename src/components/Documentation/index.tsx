import getAllPosts from 'lib/getAllPosts';

import Lists from './lists';

async function getPosts() {
  const posts = await getAllPosts();
  return posts;
}

const Documentation = async () => {
  const posts = await getPosts();
  return <Lists posts={posts} />;
};

export default Documentation;
