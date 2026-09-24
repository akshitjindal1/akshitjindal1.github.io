// src/pages/blog/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Calendar, Clock, ArrowLeft } from '@/components/ui/Icons';
import { formatDate } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

interface BlogPostProps {
  frontMatter: {
    title: string;
    date: string;
    author: string;
    tags: string[];
    image: string;
    readingTime: number;
    excerpt: string;
  };
  content: any; // MDX content
  slug: string;
}

export default function BlogPost({ frontMatter, content, slug }: BlogPostProps) {
  // Add null checks for frontMatter
  if (!frontMatter) {
    return <div>Loading...</div>;
  }

  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.excerpt}
      image={frontMatter.image}
    >
      {/* Hero Section with Post Image */}
      <div className="relative h-96">
        <img
          src={frontMatter.image}
          alt={frontMatter.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {frontMatter.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {formatDate(frontMatter.date)}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {frontMatter.readingTime} min read
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Post Content */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Back to Blog Link */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {frontMatter.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote {...content} />
            </article>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t dark:border-neutral-800">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/img/profile.jpg"
                  alt={frontMatter.author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{frontMatter.author}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    PhD Scholar at IIIT-Delhi, researching machine learning security
                    and adversarial ML.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

// This function gets called at build time to generate the paths
export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map(filename => ({
    params: { slug: filename.replace('.mdx', '') }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    const filePath = path.join(postsDirectory, `${params?.slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data: frontMatter, content } = matter(fileContents);
    const mdxSource = await serialize(content);

    // Ensure all required fields exist with defaults
    const processedFrontMatter = {
      title: frontMatter.title || 'Untitled Post',
      date: frontMatter.date || new Date().toISOString(),
      author: frontMatter.author || 'Anonymous',
      tags: frontMatter.tags || [],
      image: frontMatter.image || '/assets/img/blog/default.jpg',
      readingTime: frontMatter.readingTime || 5,
      excerpt: frontMatter.excerpt || content.trim().slice(0, 155)
    };

    return {
      props: {
        frontMatter: processedFrontMatter,
        content: mdxSource,
        slug: params?.slug
      }
    };
  } catch (error) {
    console.error('Error loading blog post:', error);
    return {
      notFound: true // This will show the 404 page
    };
  }
};