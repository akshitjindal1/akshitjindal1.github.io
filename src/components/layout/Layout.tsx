// src/components/layout/Layout.tsx
import React from 'react';
import Head from 'next/head';
import { Navigation } from './Navigation';
import { Footer } from './Footer';  // Make sure this import statement exists
import { SITE_CONFIG } from '@/lib/constants';

interface LayoutProps {
  children: React.ReactNode;
  // Page-specific metadata. Each falls back to the site-wide value in SITE_CONFIG.
  title?: string;
  description?: string;
  image?: string;
}

export function Layout({ children, title, description, image }: LayoutProps) {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.author}` : SITE_CONFIG.title;
  const pageDescription = description || SITE_CONFIG.description;
  const previewImage = `${SITE_CONFIG.siteUrl}${image || '/assets/img/profile.jpg'}`;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content={SITE_CONFIG.author} />
        <link rel="icon" href="/favicon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_CONFIG.author} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={previewImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={previewImage} />
      </Head>
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
