import { allNotes, allWritings } from 'contentlayer/generated';
import Link from 'next/link';

import { GithubIcon, NotionIcon, TwitterXIcon } from '~/components/icons/logo-icon';
import { BookList } from '~/components/book-list';
import { ListCard } from '~/components/list-card';

import { filterDraft, sortDateDesc } from '~/libs/mdx';

export default function Home() {
    return (
        <div className="text-tx">
            <h1 className="mb-7">Blog</h1>
            <p data-animate data-animate-stage={1} className="leading-8 tracking-wide">
                개발하면서 탐구한 것을 소소하게 기록하는 공간입니다.
                <br />
                시리즈로 연재된 포스트는 아래 시리즈북으로 편리하게 열람할 수 있습니다 🧐
            </p>
            <p data-animate data-animate-stage={2} className="mt-7 leading-8 tracking-wide">
                현재{' '}
                <Link href="https://megazone.digital/" target="_blank" rel="noreferrer" className="link">
                    메가존
                </Link>
                에서 <br />
                <Link href="https://brunch.co.kr/" target="_blank" rel="noreferrer" className="link">
                    웹 아키텍처
                </Link>
                를 개발하고 있습니다.
            </p>
            {/* <div data-animate data-animate-stage={2} className="mt-2 flex gap-2">
                <Link
                    className="text-gray-12 hover:text-gray-11"
                    href="https://github.com/imchanyo"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GithubIcon />
                </Link>

                <Link className="flex items-end text-gray-12 hover:text-gray-11" href="" target="_blank">
                    <NotionIcon />
                    <span className="ml-px text-[6px] leading-tight">(이력서)</span>
                </Link>
            </div> */}

            {/* <BookList /> */}

            <div data-animate data-animate-stage={3} className="mt-12 flex flex-wrap">
                {allWritings
                    .filter(filterDraft)
                    .sort(sortDateDesc)
                    .map((post, i) => {
                        return <ListCard post={post} />;
                    })}

                {/* <div>
                    <h2 className="mb-4">나의 서재</h2>
                    {allWritings
                        .filter(filterDraft)
                        .sort(sortDateDesc)
                        .map((post, i) => {
                            return (
                                <ListCard post={post} />
                                // <div key={i} className="mb-4">
                                //     <Link
                                //         href={`${
                                //             process.env.NODE_ENV === 'production'
                                //                 ? `https://imchanyo.github.io${post.href}`
                                //                 : post.href
                                //         }`}
                                //         className="link"
                                //     >
                                //         {post.title}
                                //     </Link>
                                //     <p className="mt-0.5 text-sm text-gray-11">{post.description}</p>
                                // </div>
                            );
                        })}
                </div> */}

                {/* <div className="w-80">
                    <h2 className="mb-4text-gray-11">수첩1</h2>
                    {allNotes
                        .filter(filterDraft)
                        .sort(sortDateDesc)
                        .slice(0, 5)
                        .map((post, i) => {
                            return (
                                <div key={i} className="mb-1">
                                    <Link href={post.href} className="link">
                                        {post.title}
                                    </Link>
                                </div>
                            );
                        })}
                    <Link href="/note" className="link inline-block text-gray-11">
                        ...
                    </Link>
                </div> */}
            </div>
        </div>
    );
}
