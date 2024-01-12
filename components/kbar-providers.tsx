'use client';
import { KBarProvider } from 'kbar';

import dynamic from 'next/dynamic';
import useKBarAction from '~/libs/useKBarAction';
import { useRouter } from 'next/navigation';

const KBar = dynamic(() => import('~/components/kbar'), { ssr: false });

export default function KBarProviders({
  children,
}: {
  children: React.ReactNode;
}) {
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

  // console.log(36, allWritings);
  return (
    <KBarProvider actions={actions}>
      <KBar />
      {children}
    </KBarProvider>
  );
}
