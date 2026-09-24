// src/lib/blog.ts
// Server-only helpers: import these from getStaticProps / getStaticPaths, never from components.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/lib/types';
import { calculateReadingTime } from '@/lib/utils';

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog');

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostSource(slug: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(raw);
  const post: BlogPost = {
    slug,
    title: data.title || 'Untitled post',
    date: data.date || '',
    author: data.author || 'Akshit Jindal',
    excerpt: data.excerpt || content.trim().slice(0, 155),
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
    published: (data.published || []).map((p: { label: string; url: string }) => ({
      label: p.label,
      href: p.url,
    })),
  };
  return { post, content };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostSource(slug).post)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
