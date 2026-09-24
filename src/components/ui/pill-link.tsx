// src/components/ui/pill-link.tsx
import React from 'react';
import { SmartLink } from '@/components/ui/smart-link';
import { cn } from '@/lib/utils';

export function PillLink({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <SmartLink
      href={href}
      className={cn(
        'inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent/60 hover:text-accent',
        className
      )}
    >
      {label}
    </SmartLink>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-line/50 px-2 py-0.5 text-xs text-muted">{children}</span>
  );
}
