// src/components/layout/Layout.tsx
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { SITE_CONFIG } from '@/lib/constants';

interface LayoutProps {
  children: React.ReactNode;
  // Page-specific metadata. Each falls back to the site-wide value in SITE_CONFIG.
  title?: string;
  description?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

export function Layout({ children, title, description, image, jsonLd, noindex }: LayoutProps) {
  const router = useRouter();
  const pageTitle = title ? `${title} | ${SITE_CONFIG.author}` : SITE_CONFIG.title;
  const pageDescription = description || SITE_CONFIG.description;
  const previewImage = `${SITE_CONFIG.siteUrl}${image || '/assets/img/profile.jpg'}`;
  const canonical = `${SITE_CONFIG.siteUrl}${router.asPath === '/' ? '' : router.asPath.split(/[?#]/)[0]}`;

  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content={SITE_CONFIG.author} />
        {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={canonical} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_CONFIG.author} />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={previewImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={previewImage} />

        {jsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        )}
      </Head>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
