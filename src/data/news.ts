// src/data/news.ts
import { NewsItem } from '@/lib/types';

export const news: NewsItem[] = [
  {
    date: 'Jun 2026',
    text: 'Presented CLIP-Inspector as a poster at CVPR 2026 (Findings Track).',
    link: { label: 'Paper', href: '/publications#clip-inspector' },
  },
  {
    date: 'Apr 2026',
    text: 'CLIP-Inspector preprint released on arXiv.',
    link: { label: 'arXiv', href: 'https://arxiv.org/abs/2604.09101' },
  },
  {
    date: 'Dec 2024',
    text: 'US Patent 12,164,828 granted for assigning unique voices to electronic devices, from my work at Samsung.',
    link: { label: 'Patent', href: 'https://patents.google.com/patent/US12164828B2/en' },
  },
  {
    date: 'Mar 2024',
    text: 'Joined the National Institute of Informatics, Tokyo, as a research intern with Prof. Isao Echizen (Mar–Jul 2024).',
  },
  {
    date: 'Jan 2024',
    text: 'Army of Thieves published at WACV 2024.',
    link: { label: 'Paper', href: '/publications#army-of-thieves' },
  },
  {
    date: '2023',
    text: 'Student Chair for the 11th International Big Data & AI Conference (BDA 2023) at IIIT-Delhi, leading a team of 17 volunteers.',
  },
  {
    date: '2021',
    text: 'Started my PhD in Machine Learning Security at IIIT-Delhi.',
  },
  {
    date: '2021',
    text: "Won C-LAB 2021, Samsung's internal startup competition.",
  },
];
