// src/pages/blog/index.tsx
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/layout/PageHeader';
import { Calendar, Clock, ArrowRight, Search, Tag } from '@/components/ui/Icons'; 
import { formatDate, calculateReadingTime } from '@/lib/utils';
import { BlogPost } from '@/lib/types';

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('all');

  // Get unique tags from all posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter blog posts based on search and tags
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag === 'all' || post.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <Layout
      title="Blog"
      description="Writing on machine learning security, model extraction, backdoor attacks and adversarial ML by Akshit Jindal."
    >
      <PageHeader
        title="Blog"
        description="Thoughts and insights on machine learning security, adversarial ML, and the intersection of AI and security."
      />

      {/* Search and Filters */}
      <Section className="py-8 border-b dark:border-neutral-800">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-2 border-neutral-200 dark:border-neutral-700 rounded-lg bg-transparent"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag('all')}
                className={`px-4 py-1 rounded-full transition-colors ${
                  activeTag === 'all'
                    ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                    : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300'
                }`}
              >
                All Posts
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1 rounded-full transition-colors ${
                    activeTag === tag
                      ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                      : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="hover:shadow-lg transition-all transform hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Post Image */}
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="p-6">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              {post.readingTime} min read
            </div>
          </div>

          {/* Title and Excerpt */}
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read More Link */}
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Read More
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
    {
      title: "Understanding Model Extraction Attacks",
      slug: "understanding-model-extraction-attacks",
      date: "2024-02-01",
      author: "Akshit Jindal",
      image: "/assets/img/blog/1.jpg",
      excerpt: "An in-depth look at how model extraction attacks work and their implications for ML security.",
      content: "Full content of the blog post goes here...",
      tags: ["ML Security", "Model Extraction", "Research"],
      readingTime: 8
    }
];