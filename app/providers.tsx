'use client';

import { ThemeProvider } from 'next-themes';
import { KBarProvider } from 'kbar';
import useKBarAction from '~/libs/useKBarAction';
import dynamic from 'next/dynamic';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <KBarProvider>{children}</KBarProvider>
    </ThemeProvider>
  );
}
