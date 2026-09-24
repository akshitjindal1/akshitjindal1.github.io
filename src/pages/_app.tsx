// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Inter, JetBrains_Mono, Newsreader } from 'next/font/google';
import '../styles/globals.css';

// Fonts are downloaded at build time and self-hosted, so there is no request to Google at runtime.
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  axes: ['opsz'],
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
