// src/components/home/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import { FileDown, Github, Linkedin, Mail } from '@/components/ui/Icons';
import { Container } from '@/components/ui/container';
import { profile } from '@/data/profile';
import { SITE_CONFIG } from '@/lib/constants';

const inlineLink = 'text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent';

function Advisors() {
  return (
    <>
      {profile.advisors.map((advisor, i) => (
        <React.Fragment key={advisor.name}>
          <a href={advisor.href} target="_blank" rel="noopener noreferrer" className={inlineLink}>
            {advisor.name}
          </a>
          {i < profile.advisors.length - 2 ? ', ' : i === profile.advisors.length - 2 ? ' and ' : ''}
        </React.Fragment>
      ))}
    </>
  );
}

const ACTIONS = [
  { label: 'Email', href: `mailto:${SITE_CONFIG.email}`, Icon: Mail, primary: true },
  { label: 'CV', href: SITE_CONFIG.cv, Icon: FileDown },
  { label: 'GitHub', href: SITE_CONFIG.github, Icon: Github },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, Icon: Linkedin },
];

export function HeroSection() {
  return (
    <Container>
      <section className="grid items-start gap-10 pb-10 pt-12 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16 md:pb-14 md:pt-20">
        <div className="order-2 md:order-1">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {profile.position} · {profile.affiliation}
          </p>
          <h1 className="mt-3 font-serif text-5xl font-medium tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-xl text-muted">{profile.role}</p>

          <div className="mt-8 max-w-2xl space-y-4 text-[1.0625rem] leading-relaxed text-ink/85">
            <p>
              I&apos;m a PhD scholar at IIIT-Delhi working on the security of machine learning models, advised by{' '}
              <Advisors />. My research looks at what can go wrong once a model is deployed: how it can be stolen
              through its API, how a backdoor can be hidden in a model trained by a third party, and how to detect
              and repair it.
            </p>
            <p>
              My latest work,{' '}
              <Link href="/publications#clip-inspector" className={inlineLink}>
                CLIP-Inspector
              </Link>{' '}
              (CVPR 2026 Findings), detects backdoors in prompt-tuned CLIP models, and{' '}
              <Link href="/publications#army-of-thieves" className={inlineLink}>
                Army of Thieves
              </Link>{' '}
              (WACV 2024) uses an ensemble of thief models to make black-box model extraction more effective. In
              2024 I was a research intern with Prof. Isao Echizen at NII, Tokyo. Before my PhD, I worked at Samsung
              Research Institute, Bengaluru (2018–2021), on text-to-speech and language generation for the Bixby
              voice assistant.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {ACTIONS.map(({ label, href, Icon, primary }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={
                  primary
                    ? 'inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90'
                    : 'inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink/85 transition-colors hover:border-accent/60 hover:text-accent'
                }
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Research interests</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {profile.interests.map((interest) => (
                <li key={interest} className="rounded-md bg-accent-soft px-2 py-1 text-xs text-accent">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={240}
            height={249}
            className="h-36 w-36 rounded-2xl object-cover ring-1 ring-line sm:h-44 sm:w-44 md:h-auto md:w-full"
          />
          <div className="mt-6 hidden md:block">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Research interests</p>
            <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
              {profile.interests.map((interest) => (
                <li key={interest} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}
