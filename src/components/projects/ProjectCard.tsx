// src/components/projects/ProjectCard.tsx
import React from 'react';
import { AudioLines, GraduationCap, ShieldCheck } from '@/components/ui/Icons';
import { PillLink, Tag } from '@/components/ui/pill-link';
import { Project } from '@/lib/types';

const CATEGORY_ICON = {
  Research: ShieldCheck,
  Industry: AudioLines,
  Academic: GraduationCap,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = CATEGORY_ICON[project.category];

  return (
    <article className="grid gap-5 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-7">
      <div className="max-w-[260px] sm:max-w-none">
        {project.image ? (
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border-2 border-edge bg-white p-2 shadow-hard">
            <img src={project.image.src} alt={project.image.alt} loading="lazy" className="max-h-full w-full object-contain" />
          </div>
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-edge bg-accent-soft/60 text-accent shadow-hard">
            <Icon size={30} strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="min-w-0">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">{project.category}</span> · {project.period}
        </p>
        <h3 className="mt-2 font-serif text-xl font-medium leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-2 max-w-prose text-[0.95rem] leading-relaxed text-ink/80">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.topics.map((topic) => (
            <Tag key={topic}>{topic}</Tag>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <PillLink key={link.label} href={link.href} label={link.label} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
