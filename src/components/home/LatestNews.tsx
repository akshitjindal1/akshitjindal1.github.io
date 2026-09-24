// src/components/home/LatestNews.tsx
import React from 'react';
import { SmartLink } from '@/components/ui/smart-link';
import { news } from '@/data/news';

export function LatestNews() {
  return (
    <ol className="space-y-4">
      {news.map((item, i) => (
        <li key={i} className="grid grid-cols-[4.75rem_minmax(0,1fr)] gap-4 sm:grid-cols-[6rem_minmax(0,1fr)]">
          <span className="pt-0.5 font-mono text-xs text-muted">{item.date}</span>
          <p className="text-[0.95rem] leading-relaxed text-ink/85">
            {item.text}
            {item.link && (
              <>
                {' '}
                <SmartLink
                  href={item.link.href}
                  className="whitespace-nowrap text-accent underline-offset-4 hover:underline"
                >
                  {item.link.label} →
                </SmartLink>
              </>
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}
