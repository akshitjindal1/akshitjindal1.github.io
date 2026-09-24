// src/pages/404.tsx
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';

export default function NotFoundPage() {
  return (
    <Layout title="Page not found" noindex>
      <Container className="flex flex-col items-start py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">404</p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">This page doesn&apos;t exist.</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          It may have moved when the site was reorganised. Try the homepage or the list of publications.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            Go home
          </Link>
          <Link
            href="/publications"
            className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/60 hover:text-accent"
          >
            Publications
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
