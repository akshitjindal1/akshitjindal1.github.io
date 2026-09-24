// src/pages/blog/index.tsx
import { GetStaticProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PostList } from '@/components/blog/PostList';
import { getAllPosts } from '@/lib/blog';
import { BlogPost } from '@/lib/types';

export default function BlogListPage({ posts }: { posts: BlogPost[] }) {
  return (
    <Layout
      title="Blog"
      description="Writing on machine learning security, model extraction, backdoor attacks and adversarial ML by Akshit Jindal."
    >
      <PageHeader
        eyebrow="Writing"
        title="Blog"
        description="Notes on machine learning security: how models get stolen, backdoored and attacked, and what to do about it."
      />
      <Container>
        <Section>
          <PostList posts={posts} />
        </Section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { posts: getAllPosts() },
});
