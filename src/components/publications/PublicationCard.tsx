// src/components/publications/PublicationCard.tsx
import React from 'react';
import { FileText } from '@/components/ui/Icons';
import { CopyButton } from '@/components/ui/copy-button';
import { PillLink } from '@/components/ui/pill-link';
import { SmartLink } from '@/components/ui/smart-link';
import { Publication } from '@/lib/types';
import { cn } from '@/lib/utils';

const ME = 'Akshit Jindal';

function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="text-sm leading-relaxed text-muted">
      {authors.map((author, i) => (
        <React.Fragment key={author}>
          {author === ME ? <span className="font-medium text-ink">{author}</span> : author}
          {i < authors.length - 1 && ', '}
        </React.Fragment>
      ))}
    </p>
  );
}

function Figure({ publication }: { publication: Publication }) {
  if (publication.figure) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white p-2 ring-1 ring-line">
        <img
          src={publication.figure.src}
          alt={publication.figure.alt}
          loading="lazy"
          className="max-h-full w-full object-contain"
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg bg-accent-soft/60 text-accent ring-1 ring-line">
      <FileText size={28} strokeWidth={1.5} />
      <span className="font-mono text-[11px] tracking-wide">{publication.venueShort}</span>
    </div>
  );
}

function Disclosure({ summary, children }: { summary: string; children: React.ReactNode }) {
  return (
    <details className="group">
      <summary className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-accent">
        <span className="inline-block transition-transform group-open:rotate-90">›</span>
        {summary}
      </summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}

interface PublicationCardProps {
  publication: Publication;
  variant?: 'compact' | 'full';
}

export function PublicationCard({ publication, variant = 'full' }: PublicationCardProps) {
  const primary = publication.links[0]?.href;

  return (
    <article id={publication.id} className="grid scroll-mt-24 gap-5 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-7">
      <div className="max-w-[260px] sm:max-w-none">
        <Figure publication={publication} />
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs font-medium text-accent">
            {publication.venueShort}
          </span>
          {publication.note && <span className="text-xs text-muted">{publication.note}</span>}
        </div>

        <h3 className="mt-2.5 font-serif text-xl font-medium leading-snug tracking-tight">
          {primary ? (
            <SmartLink href={primary} className="transition-colors hover:text-accent">
              {publication.title}
            </SmartLink>
          ) : (
            publication.title
          )}
        </h3>

        <div className="mt-2">
          <Authors authors={publication.authors} />
        </div>

        {variant === 'full' && <p className="mt-1 text-sm italic text-muted">{publication.venue}</p>}

        <div className="mt-4 flex flex-wrap gap-2">
          {publication.links.map((link) => (
            <PillLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>

        {variant === 'full' && (
          <div className={cn('mt-4 flex flex-col gap-3')}>
            <Disclosure summary="Abstract">
              <p className="max-w-prose text-sm leading-relaxed text-ink/80">{publication.abstract}</p>
            </Disclosure>
            {publication.bibtex && (
              <Disclosure summary="BibTeX">
                <div className="relative">
                  <pre className="overflow-x-auto rounded-lg border border-line bg-surface p-4 pr-24 font-mono text-xs leading-relaxed text-ink/85">
                    {publication.bibtex}
                  </pre>
                  <div className="absolute right-2 top-2">
                    <CopyButton text={publication.bibtex} />
                  </div>
                </div>
              </Disclosure>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
