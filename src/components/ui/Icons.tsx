
import dynamic from 'next/dynamic';

// ...existing code...

export const Download = dynamic(() => import('lucide-react').then(m => m.Download), { ssr: false });
export const Building = dynamic(() => import('lucide-react').then(m => m.Building), { ssr: false });
export const GraduationCap = dynamic(() => import('lucide-react').then(m => m.GraduationCap), { ssr: false });
export const Code = dynamic(() => import('lucide-react').then(m => m.Code), { ssr: false });
export const Book = dynamic(() => import('lucide-react').then(m => m.Book), { ssr: false });
export const Filter = dynamic(() => import('lucide-react').then(m => m.Filter), { ssr: false });
export const Search = dynamic(() => import('lucide-react').then(m => m.Search), { ssr: false });
export const ExternalLink = dynamic(() => import('lucide-react').then(m => m.ExternalLink), { ssr: false });
export const Calendar = dynamic(() => import('lucide-react').then(m => m.Calendar), { ssr: false });
export const Clock = dynamic(() => import('lucide-react').then(m => m.Clock), { ssr: false });
export const ArrowRight = dynamic(() => import('lucide-react').then(m => m.ArrowRight), { ssr: false });
export const ArrowLeft = dynamic(() => import('lucide-react').then(m => m.ArrowLeft), { ssr: false });
export const Menu = dynamic(() => import('lucide-react').then(m => m.Menu), { ssr: false });
export const X = dynamic(() => import('lucide-react').then(m => m.X), { ssr: false });
export const Sun = dynamic(() => import('lucide-react').then(m => m.Sun), { ssr: false });
export const Moon = dynamic(() => import('lucide-react').then(m => m.Moon), { ssr: false });
export const Github = dynamic(() => import('lucide-react').then(m => m.Github), { ssr: false });
export const Linkedin = dynamic(() => import('lucide-react').then(m => m.Linkedin), { ssr: false });
export const Mail = dynamic(() => import('lucide-react').then(m => m.Mail), { ssr: false });
export const Tag = dynamic(() => import('lucide-react').then(m => m.Tag), { ssr: false });
export const Presentation = dynamic(() => import('lucide-react').then(m => m.Presentation), { ssr: false });