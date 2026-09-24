// src/pages/resume.tsx
import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SmartLink } from '@/components/ui/smart-link';
import { FileDown } from '@/components/ui/Icons';
import {
  awards,
  coursework,
  education,
  industryExperience,
  researchExperience,
  service,
  skills,
} from '@/data/cv';
import { publications } from '@/data/publications';
import { SITE_CONFIG } from '@/lib/constants';
import { CvEntry } from '@/lib/types';

function Timeline({ entries }: { entries: CvEntry[] }) {
  return (
    <ol className="divide-y divide-line">
      {entries.map((entry) => (
        <li
          key={`${entry.title}-${entry.period}`}
          className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4"
        >
          <span className="pt-1 font-mono text-xs text-muted">{entry.period}</span>
          <div>
            <h3 className="font-medium">{entry.title}</h3>
            <p className="text-sm text-muted">
              {entry.org}
              {entry.location && `, ${entry.location}`}
            </p>
            {entry.details && (
              <ul className="mt-2 space-y-1 text-[0.95rem] leading-relaxed text-ink/80">
                {entry.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
            {entry.links?.map((link) => (
              <SmartLink
                key={link.href}
                href={link.href}
                className="mt-2 inline-block text-sm text-accent underline-offset-4 hover:underline"
              >
                {link.label} →
              </SmartLink>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Lists({ groups }: { groups: { label: string; items: string[] }[] }) {
  return (
    <dl className="divide-y divide-line">
      {groups.map((group) => (
        <div key={group.label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4">
          <dt className="pt-0.5 font-mono text-xs text-muted">{group.label}</dt>
          <dd className="text-[0.95rem] leading-relaxed text-ink/85">{group.items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ResumePage() {
  return (
    <Layout
      title="CV"
      description="CV of Akshit Jindal: PhD scholar in machine learning security at IIIT-Delhi, former research intern at NII Tokyo and software engineer at Samsung Research Institute."
    >
      <PageHeader
        eyebrow="Curriculum vitae"
        title="CV"
        description="PhD scholar in machine learning security at IIIT-Delhi. Previously a software engineer at Samsung Research Institute, Bengaluru."
      >
        <a
          href={SITE_CONFIG.cv}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          <FileDown size={16} />
          Download PDF
        </a>
      </PageHeader>

      <Container>
        <Section title="Education">
          <Timeline entries={education} />
        </Section>

        <Section title="Research experience">
          <Timeline entries={researchExperience} />
        </Section>

        <Section title="Industry experience">
          <Timeline entries={industryExperience} />
        </Section>

        <Section title="Publications & patents" action={{ label: 'Details', href: '/publications' }}>
          <ol className="divide-y divide-line">
            {publications.map((publication) => (
              <li
                key={publication.id}
                className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="pt-1 font-mono text-xs text-muted">{publication.venueShort}</span>
                <div>
                  <Link
                    href={`/publications#${publication.id}`}
                    className="font-medium transition-colors hover:text-accent"
                  >
                    {publication.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{publication.authors.join(', ')}</p>
                  {publication.note && <p className="text-sm text-muted">{publication.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <div className="grid gap-x-12 md:grid-cols-2">
          <Section title="Service">
            <Timeline entries={service} />
          </Section>
          <Section title="Awards">
            <Timeline entries={awards} />
          </Section>
        </div>

        <Section title="Skills">
          <Lists groups={skills} />
        </Section>

        <Section title="Coursework">
          <Lists groups={coursework} />
        </Section>
      </Container>
    </Layout>
  );
}
