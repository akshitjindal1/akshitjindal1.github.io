// src/lib/types.ts

export type PublicationType = "conference" | "journal" | "workshop" | "patent";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  abstract: string;
  pdf?: string;
  code?: string;
  slides?: string;
  supplemental?: string;
  tags: string[];  // Adding the required tags field
}


// src/lib/types.ts
type ProjectCategory = 'ml-security' | 'adversarial-ml' | 'research';

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;  
  image: string;
  tags: string[];
  readingTime: number;
}

export interface BlogPostFrontMatter {
  title: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  readingTime: number;
}

interface BlogPostProps {
  frontMatter: BlogPostFrontMatter;
  content: any;
  slug: string;
}