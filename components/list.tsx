'use client';
import { Writing } from 'contentlayer/generated';
import { filterDraft, sortDateDesc } from '~/libs/mdx';
import { ListCard } from '~/components/list-card';
import { rootUrl } from '~/libs/utils';
import { useRouter } from 'next/navigation';
import useInfiniteScroll from '~/libs/useInfiniteScroll';
import { useEffect, useMemo, useRef } from 'react';
import { cloneDeep } from 'lodash-es';
import { useState } from 'react';

export default function List({ allWritings }: { allWritings: Writing[] }) {
  const router = useRouter();
  const fechMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useInfiniteScroll(fechMoreRef);
  const [page, setPage] = useState(1);

  const postList = useMemo(() => {
    const cloneDeepAll = cloneDeep(allWritings).sort((a, b) => {
      const [dateA, dateB] = [
        new Date(a.date).getFullYear(),
        new Date(b.date).getFullYear(),
      ];

      return dateB - dateA;
    });
    return cloneDeepAll.slice(0, page * 5);
  }, [allWritings, page]);

  useEffect(() => {
    if (page * 5 > postList.length) return;

    if (intersecting) {
      setPage((prev) => prev + 1);
    }
  }, [intersecting]);

  return (
    <>
      {postList && postList?.length > 0
        ? postList
            ?.filter(filterDraft)
            .sort(sortDateDesc)
            .map((post, i) => {
              return (
                <div
                  onClick={() => router.push(`${rootUrl()}/posts/${post.slug}`)}
                  className="w-full"
                  key={i}
                >
                  <ListCard post={post} />
                </div>
              );
            })
        : null}
      <div ref={fechMoreRef} />
    </>
  );
}
