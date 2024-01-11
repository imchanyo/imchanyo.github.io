'use client';

import { ThemeProvider } from 'next-themes';
import { KBarProvider } from 'kbar';

import dynamic from 'next/dynamic';

const KBar = dynamic(() => import('~/components/kbar'), { ssr: false });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <KBarProvider actions={[]}>
        <KBar />
        {children}
      </KBarProvider>
    </ThemeProvider>
  );
}
