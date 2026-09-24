// src/components/ui/section.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title?: string;
  action?: { label: string; href: string };
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, title, action, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-10 md:py-14', className)}>
      {title && (
        <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <h2 className="font-serif text-2xl font-medium tracking-tight md:text-[1.75rem]">{title}</h2>
          {action && (
            <Link
              href={action.href}
              className="group inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
            >
              {action.label}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
