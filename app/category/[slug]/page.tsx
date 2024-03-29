import { allWritings } from 'contentlayer/generated';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ListCard } from '~/components/list-card';
import { filterDraft, sortDateDesc } from '~/libs/mdx';
import { categoryInfo } from '~/constant/post';
import { Badge } from '~/components/badge';
import { Metadata } from 'next';
import { rootUrl } from '~/libs/utils';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return [
    { slug: 'react' },
    { slug: 'vue' },
    { slug: 'javascript' },
    { slug: 'ts' },
    { slug: 'next' },
    { slug: 'vite' },
    { slug: 'storybook' },
    { slug: 'nuxt' },
    { slug: 'webpack' },
    { slug: 'algorithms' },
    { slug: 'snippet' },
    { slug: 'project' },
  ];
}

function getDocFromParams(slug: string) {
  const categoryId = slug;
  const categoryList = allWritings
    .filter((doc) => doc.category === categoryId)
    .map((cate) => {
      return {
        ...cate,
        date: format(new Date(cate.date), 'MMMM dd. yyyy'),
      };
    });

  return {
    categoryList,
    categoryId,
  };
}
export function generateMetadata({ params }: PageProps): Metadata {
  const { categoryList } = getDocFromParams(params.slug);

  if (!categoryList) {
    return {};
  }

  return {
    title: {
      absolute: categoryList[0]?.title,
    },
    description: categoryList[0]?.description,
    openGraph: {
      title: categoryList[0]?.title,
      description: categoryList[0]?.description,
      images: [
        'https://user-images.githubusercontent.com/65283190/262063367-a7407bba-09a0-420a-ae45-2ed3e6f3e3b8.png',
      ],
      locale: 'ko_KR',
      type: 'website',
    },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const { slug } = params;
  const { categoryList, categoryId } = getDocFromParams(slug);

  const categoryBadgeInfo = categoryInfo.find((cate) => cate.value === slug);

  if (!categoryList) {
    notFound();
  }

  return (
    <>
      <div className="main-grid">
        <div
          data-animate
          data-animate-stage={1}
          className="flex justify-center"
        >
          {categoryBadgeInfo && <Badge category={categoryBadgeInfo} />}
        </div>

        <div className="w-full">
          <div data-animate data-animate-stage={2} className="flex flex-wrap">
            {categoryList
              .filter(filterDraft)
              .sort(sortDateDesc)
              .map((post, i) => {
                return (
                  <Link
                    className="w-full"
                    href={`${rootUrl()}/posts/${post.slug}`}
                    key={i}
                  >
                    <ListCard type={'category'} post={post} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
