// src/pages/index.tsx
import { GetStaticProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { HeroSection } from '@/components/home/HeroSection';
import { LatestNews } from '@/components/home/LatestNews';
import { PostList } from '@/components/blog/PostList';
import { PublicationCard } from '@/components/publications/PublicationCard';
import { papers } from '@/data/publications';
import { profile } from '@/data/profile';
import { getAllPosts } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';
import { BlogPost } from '@/lib/types';

const EXPERIENCE = [
  { period: '2021 – Present', role: 'PhD Scholar, Machine Learning Security', org: 'IIIT-Delhi, New Delhi' },
  { period: '2024', role: 'Research Intern with Prof. Isao Echizen', org: 'National Institute of Informatics, Tokyo' },
  { period: '2021, 2022, 2024', role: 'Head Teaching Assistant', org: 'IIIT-Delhi, New Delhi' },
  { period: '2018 – 2021', role: 'Software Engineer → Senior Software Engineer', org: 'Samsung Research Institute, Bengaluru' },
];

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_CONFIG.siteUrl,
  image: `${SITE_CONFIG.siteUrl}${profile.photo}`,
  jobTitle: 'PhD Scholar',
  affiliation: { '@type': 'CollegeOrUniversity', name: 'IIIT-Delhi' },
  email: `mailto:${SITE_CONFIG.email}`,
  knowsAbout: profile.interests,
  sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
};

export default function HomePage({ posts }: { posts: BlogPost[] }) {
  return (
    <Layout jsonLd={personJsonLd}>
      <HeroSection />

      <Container>
        <Section title="News">
          <LatestNews />
        </Section>

        <Section title="Selected publications" action={{ label: 'All publications', href: '/publications' }}>
          <div className="space-y-10">
            {papers.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} variant="compact" />
            ))}
          </div>
        </Section>

        <Section title="Experience" action={{ label: 'Full CV', href: '/resume' }}>
          <ol className="divide-y divide-line">
            {EXPERIENCE.map((item) => (
              <li
                key={item.role}
                className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="pt-0.5 font-mono text-xs text-muted">{item.period}</span>
                <div>
                  <p className="font-medium">{item.role}</p>
                  <p className="text-sm text-muted">{item.org}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {posts.length > 0 && (
          <Section title="Writing" action={{ label: 'All posts', href: '/blog' }}>
            <PostList posts={posts.slice(0, 3)} />
          </Section>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { posts: getAllPosts() },
});
