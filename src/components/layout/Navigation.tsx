// src/components/layout/Navigation.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from '@/components/ui/Icons';
import { Container } from '@/components/ui/container';
import { ThemeToggle } from './ThemeToggle';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navigation() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Close the mobile menu whenever the route changes.
  React.useEffect(() => setIsMenuOpen(false), [router.asPath]);

  const isActive = (path: string) => (path === '/' ? router.pathname === '/' : router.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight text-ink">
          Akshit Jindal
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={isActive(item.path) ? 'page' : undefined}
              className={cn(
                'rounded-md px-3 py-2 text-sm transition-colors',
                isActive(item.path)
                  ? 'font-medium text-ink underline decoration-accent decoration-2 underline-offset-[10px]'
                  : 'text-muted hover:text-ink'
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle className="ml-2" />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-ink"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line md:hidden">
          <Container className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={cn(
                  'rounded-md px-2 py-3 text-base',
                  isActive(item.path) ? 'font-medium text-accent' : 'text-muted hover:text-ink'
                )}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
