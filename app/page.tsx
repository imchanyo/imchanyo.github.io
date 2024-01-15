import { allWritings } from 'contentlayer/generated';
import Link from 'next/link';

import { GithubIcon, NotionIcon } from '~/components/icons/logo-icon';
import { Badge } from '~/components/badge';
import { categoryInfo } from '~/constant/post';
import { rootUrl } from '~/libs/utils';
import List from '~/components/list';

export default function Home() {
  return (
    <div className="text-tx">
      <div className="md:flex gap-10">
        <div className="flex-1">
          <h1 className="mb-7">ChanYoung KIM</h1>

          <p
            data-animate
            data-animate-stage={1}
            className="leading-8 tracking-wide"
          >
            안녕하세요.
            <br />
            저의 블로그에 와주셔서 진심으로 감사드립니다.
            <br />
            배움의 발자취를 기록하고 있습니다.
          </p>
          <p
            data-animate
            data-animate-stage={2}
            className="mt-7 leading-8 tracking-wide"
          >
            현재{' '}
            <Link
              href="https://megazone.digital/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              메가존
            </Link>
            에서 <br />
            <Link
              href="https://658d172881b19f7cc7db0cc5-rzgrnabuff.chromatic.com/?path=/story/example-header--logged-out"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              web architecture
            </Link>
            를 담당하고 있습니다.
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
              <Link
                href={`${rootUrl()}/category/${category.value}`}
                key={index}
              >
                <Badge category={category} index={index} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div data-animate data-animate-stage={3} className="mt-12 flex flex-wrap">
        <List allWritings={allWritings} />
      </div>
    </div>
  );
}
