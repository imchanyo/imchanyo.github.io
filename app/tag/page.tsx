'use client';

import React, { useRef } from 'react';
import { allWritings } from 'contentlayer/generated';
import '~/styles/tag.css';
import { rootUrl } from '~/libs/utils';
import { DateIcon } from '~/components/icons/date-icon';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

export default function Tag() {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const router = useRouter();
  const uniqueTags = [
    ...new Set(allWritings.flatMap((item) => item.tags || [])),
  ];

  const groupedItems = uniqueTags.map((tag) => ({
    tag: tag,
    items: allWritings.filter((item) => item?.tags && item.tags.includes(tag)),
  }));

  const onMoveToElement = (tag: string) => {
    const tagRef = scrollRef.current.find((ref) => ref.id === tag);
    if (tagRef) {
      tagRef.scrollIntoView({ behavior: 'smooth' });

      //   tagRef.classList.add('tag-highlight');

      //   tagRef.addEventListener('transitionend', () => {
      //     tagRef.classList.remove('tag-highlight');
      //   });
    }
  };

  return (
    <>
      {groupedItems?.length > 0 ? <div>test</div> : null}

      {/* <h1>Tag</h1>
      <h3 className="flex justify-end" style={{ fontFamily: 'Tmon' }}>
        Total__{uniqueTags?.length}
      </h3>
      <ul className="tag-box grid grid-cols-3 gap-5 mt-10">
        {groupedItems?.map((tag, index) => (
          <li key={`tag-list_${index}`}>
            <div
              className="cursor-pointer"
              onClick={() => onMoveToElement(tag.tag)}
            >
              <strong>{tag.tag}</strong>
              <span>{tag.items.length}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="tag-sub-container">
        {groupedItems.map((origin, idx) => (
          <div
            ref={(el) => {
              if (
                el &&
                !scrollRef.current.some((ref) => ref.id === origin.tag)
              ) {
                el.id = origin.tag;
                scrollRef.current.push(el);
              }
            }}
            className="tag-sub"
            key={`origin_${idx}`}
          >
            <h2 className="mt-10 pb-2">{origin.tag}</h2>
            <ul>
              {origin.items.map((sub, i) => (
                <li key={`sub_${i}`}>
                  <div className="flex justify-between">
                    <p
                      className="cursor-pointer"
                      onClick={() => {
                        router.push(`${rootUrl()}/posts/${sub.slug}`, {
                          scroll: true,
                        });
                      }}
                    >
                      {sub.title}
                    </p>
                    <div>
                      <time className="text-sm font-light text-gray-400 flex gap-2 items-center">
                        {sub?.tags?.map((tag: string, index: number) => (
                          <span key={`tag${index}`}>{tag}</span>
                        ))}
                        <DateIcon />
                        {format(new Date(sub.date), 'yyyy-MM-dd')}
                      </time>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </>
  );
}
