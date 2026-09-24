// src/pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';
import { Tag } from '@/components/ui/pill-link';
import { ArrowLeft } from '@/components/ui/Icons';
import { profile } from '@/data/profile';
import { getPostSlugs, getPostSource } from '@/lib/blog';
import { BlogPost } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  post: BlogPost;
  source: MDXRemoteSerializeResult;
}

export default function BlogPostPage({ post, source }: BlogPostPageProps) {
  return (
    <Layout title={post.title} description={post.excerpt}>
      <Container className="max-w-3xl">
        <article className="pb-6 pt-10 md:pt-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          <header className="mt-8 border-b border-line pb-8">
            <p className="font-mono text-xs text-muted">
              {formatDate(post.date)} · {post.readingTime} min read
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>
            {post.excerpt && <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>}
            {post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg mt-8">
            <MDXRemote {...source} />
          </div>

          <footer className="mt-14 flex items-center gap-4 border-t border-line pt-8">
            <img src={profile.photo} alt="" className="h-14 w-14 rounded-full object-cover ring-1 ring-line" />
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-muted">
                PhD scholar at IIIT-Delhi, researching machine learning security.
              </p>
            </div>
          </footer>
        </article>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getPostSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const { post, content } = getPostSource(params?.slug as string);
  return { props: { post, source: await serialize(content) } };
};
