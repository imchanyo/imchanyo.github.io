import { Writing } from 'contentlayer/generated';
import { format } from 'date-fns';
export function ListCard({ post, type }: { post: Writing; type?: string }) {
    return (
        <article className="mb-8 w-full flex flex-col rounded-md p-4 shadow-sm ring-1 ring-gray-200 transition-all hover:-translate-y-1 hover:bg-neutral-50 hover:ring-4 hover:ring-amber-200 active:bg-neutral-100 dark:ring-gray-700 md:flex-row md:items-center md:justify-between md:space-x-2 md:py-6">
            <div className="grow-1 order-1 overflow-hidden rounded-lg shadow-md md:order-2 md:w-60 md:grow-0 md:basis-auto">
                <div className="relative">
                    {post.image && <img alt="post-thumbnail" src={post.image} decoding="async" data-nimg="1" />}
                </div>
            </div>
            <div className="order-2 mt-4 flex grow basis-0 flex-col space-y-2 p-2 md:order-1 md:mt-0">
                <h2 className="text-ellipsis" style={{ fontSize: `${type ? '2rem' : ''}` }}>
                    {post.title}
                </h2>

                <div className="md:mr-6">
                    <p className="mb-1 max-h-20 overflow-hidden text-ellipsis">{post.description}</p>
                    <div className="mt-5 flex items-center justify-between space-x-2 md:justify-start">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 overflow-hidden rounded-full">
                                {post?.subImage && (
                                    <img
                                        alt="profile_image"
                                        src={post?.subImage}
                                        decoding="async"
                                        data-nimg="1"
                                        loading="lazy"
                                    />
                                )}
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
