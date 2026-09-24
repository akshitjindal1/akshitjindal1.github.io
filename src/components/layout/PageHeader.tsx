// src/components/layout/PageHeader.tsx
import React from 'react';
import { Container } from '@/components/ui/container';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <Container>
      <header className="flex flex-col gap-6 border-b border-line pb-10 pt-14 md:flex-row md:items-end md:justify-between md:pb-12 md:pt-20">
        <div className="max-w-2xl">
          {eyebrow && <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{eyebrow}</p>}
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">{title}</h1>
          {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
        </div>
        {children && <div className="shrink-0">{children}</div>}
      </header>
    </Container>
  );
}
