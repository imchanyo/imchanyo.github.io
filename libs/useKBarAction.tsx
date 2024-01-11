'use client';
import { Action } from 'kbar';
import { useRouter } from 'next/navigation';
import { ArchiveBoxIcon } from '~/components/icons/archive-box-icon';
import HomeIcon from '~/components/icons/home-icon';
import InBoxIcon from '~/components/icons/in-box-icon';
import InBoxStackIcon from '~/components/icons/in-box-stack-icon';
import GithubIcon from '~/components/icons/github-icon';
import { siteConfig } from '~/config';
import MailIcon from '~/components/icons/mail-icon';
import { allWritings } from 'contentlayer/generated';
import { rootUrl } from './utils';
import { LibBoxIcon } from '~/components/icons/lib-box-icon';
import { AboutBoxIcon } from '~/components/icons/about-box.icon';
import { TagBoxIcon } from '~/components/icons/tag-box-icon';

const icons: { [key in string]: React.ReactNode } = {
  email: <MailIcon />,
  github: <GithubIcon />,
};

export default function useKBarAction(): Action[] {
  const router = useRouter();
  const res: Action[] = allWritings.map((el) => {
    return {
      id: el._id,
      name: el.title,
      perform: () => router.push(`${rootUrl()}${el.href}`),
      section: 'Posts',
      icon: <LibBoxIcon width={18} />,
    };
  });

  return [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['H'],
      keywords: 'profile',
      section: 'Pages',
      icon: <HomeIcon width={20} />,
      perform: () => router.push('/'),
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['A'],
      keywords: 'about',
      section: 'Pages',
      icon: <AboutBoxIcon />,
      perform: () => router.push('/about'),
    },
    {
      id: 'tag',
      name: 'Tags',
      shortcut: ['T'],
      keywords: 'tag',
      section: 'Pages',
      icon: <TagBoxIcon />,
      perform: () => router.push('/tag'),
    },
    {
      id: 'archives',
      name: 'Archives',
      shortcut: ['A'],
      section: 'Pages',
      icon: <ArchiveBoxIcon />,
      perform: () => router.push('/archives'),
    },

    ...(Object.keys(siteConfig.author.contacts)
      .map((sns) => {
        const link =
          siteConfig.author.contacts[
            sns as keyof typeof siteConfig.author.contacts
          ];
        if (!link) return;

        return {
          id: sns,
          name: sns,
          subtitle: link,
          section: 'Social',
          icon: icons?.[sns],
          perform: () => {
            window.open(link);
          },
        };
      })
      .filter(Boolean) as Action[]),
    ...res,
  ];
}
