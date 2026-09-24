// src/components/layout/Footer.tsx
import React from 'react';
import { FileDown, Github, Linkedin, Mail } from '@/components/ui/Icons';
import { Container } from '@/components/ui/container';
import { SITE_CONFIG } from '@/lib/constants';

const LINKS = [
  { label: 'Email', href: `mailto:${SITE_CONFIG.email}`, Icon: Mail },
  { label: 'GitHub', href: SITE_CONFIG.github, Icon: Github },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, Icon: Linkedin },
  { label: 'CV (PDF)', href: SITE_CONFIG.cv, Icon: FileDown },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg font-medium">{SITE_CONFIG.author}</p>
          <p className="mt-1 text-sm text-muted">PhD Scholar · IIIT-Delhi, New Delhi, India</p>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="mt-1 inline-block text-sm text-muted underline-offset-4 hover:text-accent hover:underline"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
        <ul className="flex items-center gap-1">
          {LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container className="pb-8">
        <p className="text-xs text-faint">© {new Date().getFullYear()} {SITE_CONFIG.author}</p>
      </Container>
    </footer>
  );
}
