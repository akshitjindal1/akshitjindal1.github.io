// src/lib/types.ts

export interface Link {
  label: string;
  href: string;
}

export type PublicationType = 'conference' | 'journal' | 'workshop' | 'patent';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  note?: string;
  year: number;
  type: PublicationType;
  abstract: string;
  figure?: { src: string; alt: string };
  links: Link[];
  bibtex?: string;
}

export type ProjectCategory = 'Research' | 'Industry' | 'Academic';

export interface Project {
  title: string;
  summary: string;
  category: ProjectCategory;
  period: string;
  image?: { src: string; alt: string };
  topics: string[];
  links: Link[];
}

export interface NewsItem {
  date: string;
  text: string;
  link?: Link;
}

export interface CvEntry {
  period: string;
  title: string;
  org: string;
  location?: string;
  details?: string[];
  links?: Link[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
}
