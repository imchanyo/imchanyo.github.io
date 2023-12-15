import { allWritings } from 'contentlayer/generated';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ListCard } from '~/components/list-card';
import { filterDraft, sortDateDesc } from '~/libs/mdx';
import { categoryInfo } from '~/constant/post';
import { Badge } from '~/components/badge';

interface PageProps {
    params: {
        slug: string[];
    };
}

export function generateStaticParams() {
    return allWritings.map(({ slug }) => ({ slug: slug.split('/') }));
}

function getDocFromParams({ params }: PageProps) {
    const slug = params.slug.join('/');
    const categoryList = allWritings
        .filter((doc) => doc.category === slug)
        .map((cate) => {
            return {
                ...cate,
                date: format(new Date(cate.date), 'MMMM dd. yyyy'),
            };
        });

    return {
        categoryList,
        slug,
    };
}

export default function CategoryPage({ params }: PageProps) {
    const { categoryList, slug } = getDocFromParams({ params });

    const categoryBadgeInfo = categoryInfo.find((cate) => cate.value === slug);

    if (!categoryList) {
        notFound();
    }

    return (
        <>
            <div className="main-grid">
                <div data-animate data-animate-stage={1} className="flex justify-center">
                    {categoryBadgeInfo && <Badge category={categoryBadgeInfo} />}
                </div>

                <div>
                    <div data-animate data-animate-stage={2} className="flex gap-5 flex-wrap">
                        {categoryList
                            .filter(filterDraft)
                            .sort(sortDateDesc)
                            .map((post, i) => {
                                return (
                                    <Link className="w-full" href={`/posts/${post.slug}`} key={i}>
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
