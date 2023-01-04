import BlogAnimation from '@/components/animations/Blog';

import { getSortedPosts } from '@/lib/posts';

import BlogContents from '@/contents/blog';
import Page from '@/contents-layouts/Page';

import type { BlogContentsProps } from '@/contents/blog';
import type { GetStaticProps } from 'next';

type BlogProps = BlogContentsProps;

function Blog({ posts }: BlogProps) {
  return (
    <Page
      frontMatter={{
        title: 'Personal Blog',
        description: 'Web development thoughts and stories.',
      }}
      headerImage={<BlogAnimation />}
    >
      <BlogContents posts={posts} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData = getSortedPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Blog;
