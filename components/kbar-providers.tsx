'use client';
import { KBarProvider } from 'kbar';

import dynamic from 'next/dynamic';
import useKBarAction from '~/libs/useKBarAction';

const KBar = dynamic(() => import('~/components/kbar'), { ssr: false });

export default function KBarProviders({
  children,
  allWritings,
}: {
  children: React.ReactNode;
  allWritings: any;
}) {
  const actions = useKBarAction(allWritings);

  if (actions?.length === 0 || !actions) return null;

  return (
    <KBarProvider actions={actions}>
      <KBar />
      {children}
    </KBarProvider>
  );
}
