import fs from 'fs';
import path from 'path';
import type { ReturnData, PostData } from 'types/PostData';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Tabs, Tab } from 'components/Tabs';
import rehypePrettyCode from 'rehype-pretty-code';

const Element = {
  Tabs,
  Tab,
};

const getPostMdx = async (slug: string): Promise<ReturnData> => {
  const folder = path.join(process.cwd(), '/src/documentation');
  const fullPath = path.join(folder, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { frontmatter, content } = await compileMDX<PostData>({
    components: Element,
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: 'github-light',
              keepBackground: true,
              onVisitHighlightedLine(node: { properties: { className: string[] } }) {
                node.properties.className.push('highlighted');
              },
            },
          ],
        ],
      },
    },
  });
  return { meta: { ...frontmatter }, content: content };
};

export default getPostMdx;