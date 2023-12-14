'use client';
import { Writing } from 'contentlayer/generated';
import { format } from 'date-fns';
export function ListCard({ post }: { post: Writing }) {
    return (
        <article className="mb-8 flex flex-col rounded-md p-4 shadow-sm ring-1 ring-gray-200 transition-all hover:-translate-y-1 hover:bg-neutral-50 hover:ring-4 hover:ring-amber-200 active:bg-neutral-100 dark:ring-gray-700 md:flex-row md:items-center md:justify-between md:space-x-2 md:py-8">
            <div className="grow-1 order-1 overflow-hidden rounded-lg shadow-md md:order-2 md:w-60 md:grow-0 md:basis-auto">
                <div className="relative">
                    <img
                        alt="post-thumbnail"
                        src="https://gamguma.dev/_next/image?url=%2F2022%2F04%2Fmongodb_schema_design%2Fimages%2Fthumbnail.png&w=3840&q=75"
                        decoding="async"
                        data-nimg="1"
                    />
                </div>
            </div>
            <div className="order-2 mt-4 flex grow basis-0 flex-col space-y-2 p-2 md:order-1 md:mt-0">
                <h2 className="text-lg font-bold text-gray-700">어떻게 mongoDB 스키마 설계를 해야할까?</h2>
                <div className="md:mr-6">
                    <p className="mb-1 max-h-20 overflow-hidden text-ellipsis text-sm font-medium text-gray-600">
                        스포하자면 만들고자 하는 서비스에 알맞게 만들어야한다(?) 당연한 것 아닙니까?,,
                    </p>
                    <div className="mt-5 flex items-center justify-between space-x-2 md:justify-start">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 overflow-hidden rounded-full">
                                <img
                                    alt="profile_image"
                                    src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
                                    decoding="async"
                                    data-nimg="1"
                                    loading="lazy"
                                />
                            </div>
                            <span className="font-semibold text-gray-700"></span>
                        </div>
                        <time className="text-sm font-light text-gray-400">
                            {format(new Date(post.date), 'yyyy-MM-dd')}
                        </time>
                    </div>
                </div>
            </div>
        </article>
    );
}
