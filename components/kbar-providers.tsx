'use client';
import { KBarProvider } from 'kbar';

import dynamic from 'next/dynamic';
import useKBarAction from '~/libs/useKBarAction';

const KBar = dynamic(() => import('~/components/kbar'), { ssr: false });

export default function KBarProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!window) return null;
  const actions = useKBarAction();

  if (actions?.length === 0 || !actions) return null;

  return (
    <KBarProvider actions={actions}>
      <KBar />
      {children}
    </KBarProvider>
  );
}
