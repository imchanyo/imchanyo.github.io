import Link from 'next/link';
import { rootUrl } from '~/libs/utils';
const nav: { title: string; location: string }[] = [
  { title: 'Home', location: rootUrl() },
  { title: 'About', location: `${rootUrl()}/about` },
];

interface NavProps {
  type: 'toggle' | 'normal';
  onClick?: () => void;
}

export default function Nav({ type, onClick }: NavProps) {
  const defaultStyleString =
    'dark:text-white dark:hover:text-green-500 text-center transition duration-250 hover:scale-125 hover:text-green-500';
  return (
    <>
      {nav.map((item) => {
        const { title, location } = item;
        return (
          <Link
            style={{ fontFamily: 'Tmon', fontSize: '1.3rem' }}
            href={location}
            onClick={onClick}
            key={title}
            className={
              type === 'normal'
                ? defaultStyleString
                : defaultStyleString + ' text-lg py-4'
            }
          >
            {title}
          </Link>
        );
      })}
    </>
  );
}
