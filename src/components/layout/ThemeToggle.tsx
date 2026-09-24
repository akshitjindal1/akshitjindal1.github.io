// src/components/layout/ThemeToggle.tsx
import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  // The theme is only known on the client; render a placeholder until mounted to avoid a hydration mismatch.
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-ink',
        className
      )}
    >
      {!mounted ? <span className="h-[18px] w-[18px]" /> : isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
