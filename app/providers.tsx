'use client';

import { ThemeProvider } from 'next-themes';
import { KBarProvider } from 'kbar';

import dynamic from 'next/dynamic';
import useKBarAction from '~/libs/useKBarAction';
import { Writing } from 'contentlayer/generated';
import { useRouter } from 'next/navigation';
import { rootUrl } from '~/libs/utils';
import { LibBoxIcon } from '~/components/icons/lib-box-icon';
import { useMemo } from 'react';

const KBar = dynamic(() => import('~/components/kbar'), { ssr: false });

export default function Providers({
  children,
  allWritings,
}: {
  children: React.ReactNode;
  allWritings: any;
}) {
  const router = useRouter();
  const actions = useKBarAction();

  // const res = allWritings?.map((el) => {
  //   return {
  //     id: el._id,
  //     name: el.title,
  //     perform: () => router.push(`${rootUrl()}${el.href}`),
  //     section: "Posts",
  //     icon: <LibBoxIcon width={18} />,
  //   };
  // });

  console.log(36, allWritings);
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
