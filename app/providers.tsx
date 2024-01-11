'use client';

import { ThemeProvider } from 'next-themes';
import { KBarProvider } from 'kbar';
import useKBarAction from '~/libs/useKBarAction';
import dynamic from 'next/dynamic';

const KBar = dynamic(() => import('~/components/kbar'), { ssr: false });

export function Providers({ children }: { children: React.ReactNode }) {
  const actions = useKBarAction();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <KBarProvider actions={actions}>
        <KBar />
        {children}
      </KBarProvider>
    </ThemeProvider>
  );
}
