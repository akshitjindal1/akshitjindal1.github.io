// src/components/ui/smart-link.tsx
import Link from 'next/link';
import React from 'react';

interface SmartLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

// Internal paths use client-side navigation; everything else opens in a new tab.
export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  const internal = href.startsWith('/') || href.startsWith('#');
  const isFile = /\.(pdf|png|jpe?g)$/i.test(href);
  if (internal && !isFile) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
