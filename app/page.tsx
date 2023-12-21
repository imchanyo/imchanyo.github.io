import { allNotes, allWritings } from 'contentlayer/generated';
import Link from 'next/link';

import { GithubIcon, NotionIcon, TwitterXIcon } from '~/components/icons/logo-icon';
import { ListCard } from '~/components/list-card';
import { useRouter } from 'next/router';
import { filterDraft, sortDateDesc } from '~/libs/mdx';
import { Badge } from '~/components/badge';
import { categoryInfo } from '~/constant/post';
import { rootUrl } from '~/libs/utils';

export default function Home() {
    return (
        <div className="text-tx">
            <div className="md:flex gap-10">
                <div className="flex-1">
                    <h1 className="mb-7">ChanYoung KIM</h1>

                    <p data-animate data-animate-stage={1} className="leading-8 tracking-wide">
                        안녕하세요. 꾸준히 성장하고 있는 프론트 주니어 개발자입니다.
                        <br />
                        배운 것을 공유하는 문화를 좋아하는 개발자입니다.
                        <br />
                        배움의 발자취를 기록하고 있습니다
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

                    <div data-animate data-animate-stage={2} className="mt-2 flex gap-2">
                        <Link
                            className="text-gray-12 hover:text-gray-11 text-2xl"
                            href="https://github.com/imchanyo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GithubIcon />
                        </Link>

                        <Link
                            className="flex items-end text-gray-12 hover:text-gray-11 text-2xl"
                            href=""
                            target="_blank"
                        >
                            <NotionIcon />
                            {/* <span className="ml-px text-[6px] leading-tight">(이력서)</span> */}
                        </Link>
                    </div>
                </div>
                <div className="flex-1 maxSm:mt-5">
                    <div className="flex gap-5 flex-wrap">
                        {categoryInfo?.map((category, index) => (
                            <Link href={`${rootUrl()}/category/${category.value}`} key={index}>
                                <Badge category={category} index={index} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div data-animate data-animate-stage={3} className="mt-12 flex flex-wrap">
                {allWritings
                    .filter(filterDraft)
                    .sort(sortDateDesc)
                    .map((post, i) => {
                        return (
                            <Link className="w-full" href={`${rootUrl()}/posts/${post.slug}`} key={i}>
                                <ListCard post={post} />
                            </Link>
                        );
                    })}

                <div className="w-80">
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
                </div>
            </div>
        </div>
    );
}
