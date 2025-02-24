import "~/styles/mdx.css";

import { allDocuments, type DocumentTypes } from "contentlayer/generated";
import { compareAsc, format } from "date-fns";
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Mdx } from "~/components/mdx-components";
import { Giscus } from "~/components/giscus";
import NavHeader from "~/components/nav-header";
import { parseToc } from "~/libs/mdx";

import TableOfContent from "./table-of-content";
import { rootUrl } from "~/libs/utils";
import { DateIcon } from "~/components/icons/date-icon";

interface PageProps {
  params: {
    slug: string[];
  };
}

export function generateStaticParams() {
  return allDocuments.map(({ slug }) => ({ slug: slug.split("/") }));
}

function getDocFromParams({ params }: PageProps) {
  const slug = params.slug.join("/");
  const post = allDocuments.find((doc) => doc.slug === slug);

  if (post) {
    post.date = format(new Date(post.date), "MMMM dd. yyyy");
  }
  return post;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getDocFromParams({ params });

  if (!post) {
    return {};
  }

  return {
    title: {
      absolute: post.title,
    },
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        "https://user-images.githubusercontent.com/65283190/262063367-a7407bba-09a0-420a-ae45-2ed3e6f3e3b8.png",
      ],
      locale: "ko_KR",
      type: "website",
    },
  };
}

type RelatedInfo = {
  prevPost?: {
    title: string;
    href: string;
  };
  nextPost?: {
    title: string;
    href: string;
  };
};

function getReplatedInfo(post: DocumentTypes): RelatedInfo {
  return allDocuments
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
    .reduce<RelatedInfo>((ac, v, index, list) => {
      if (v.slug === post.slug) {
        const prevPost = list
          .slice(0, index)
          .reverse()
          .find((doc) => doc.type === post.type);
        if (prevPost) {
          ac.prevPost = {
            title: prevPost.title,
            href: prevPost.href,
          };
        }

        const nextPost = list
          .slice(index + 1)
          .find((doc) => doc.type === post.type);
        if (nextPost) {
          ac.nextPost = {
            title: nextPost.title,
            href: nextPost.href,
          };
        }
      }
      return ac;
    }, {});
}

export default function WritingPage({ params }: PageProps) {
  const post = getDocFromParams({ params });

  if (!post) {
    notFound();
  }

  const toc = parseToc(post.body.raw);
  const { prevPost, nextPost } = getReplatedInfo(post);

  return (
    <>
      <div className="main-grid">
        <NavHeader href={`${rootUrl()}/category/${post.category}`}>
          <TableOfContent toc={toc} />
        </NavHeader>
        <main>
          {/* header */}
          <div style={{ opacity: 1, willChange: "opacity" }} className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mx-auto mb-4 max-w-3xl text-center">
              {post.title}
            </h1>

            <div className="mt-2 flex w-full gap-2 justify-center items-center">
              <DateIcon />
              <span>{post.date}</span>
            </div>
            <hr className="border-1 w-full border-neutral-300 transition-all dark:border-neutral-700 mt-4 bg-[#1a1a1a]"></hr>
          </div>
          {/* content */}
          <Mdx data-animate-layer code={post.body.code} />
          {/* footer */}
          <hr
            data-animate
            data-animate-stage={2}
            className="mb-10 mt-20 h-[1px] w-full border-gray-5"
          />
          <footer
            data-animate
            data-animate-stage={3}
            className="flex items-stretch justify-between gap-1 text-sm text-tx"
          >
            {!!prevPost && (
              <Link
                className="flex flex-col gap-1"
                href={`${rootUrl()}${prevPost.href}`}
              >
                <div className="text-gray-10">Previous</div>
                <span className="">{prevPost.title}</span>
              </Link>
            )}
            {!!nextPost && (
              <Link
                className="ml-auto flex flex-col gap-1 text-right"
                href={`${rootUrl()}${nextPost.href}`}
              >
                <div className="text-gray-10">Next</div>
                <span className="">{nextPost.title}</span>
              </Link>
            )}
          </footer>
          {/* <Giscus /> */}
        </main>
      </div>
    </>
  );
}
