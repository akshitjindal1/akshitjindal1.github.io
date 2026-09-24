// src/components/blog/PostList.tsx
import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="divide-y divide-line">
      {posts.map((post) => (
        <li key={post.slug} className="py-5 first:pt-0">
          <Link href={`/blog/${post.slug}`} className="group block">
            <p className="font-mono text-xs text-muted">
              {formatDate(post.date)} · {post.readingTime} min read
              {post.published.length > 0 && ` · Also on ${post.published.map((link) => link.label).join(', ')}`}
            </p>
            <h3 className="mt-1.5 font-serif text-xl font-medium tracking-tight transition-colors group-hover:text-accent">
              {post.title}
            </h3>
            <p className="mt-1.5 max-w-prose text-[0.95rem] leading-relaxed text-muted">{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
