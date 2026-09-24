// src/components/ui/container.tsx
import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-5xl px-5 sm:px-8', className)} {...props}>
      {children}
    </div>
  );
}
