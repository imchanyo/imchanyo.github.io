'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Nav from '~/components/nav';
import { Sun } from '~/components/icons/sun';
import { Moon } from '~/components/icons/moon';
import { Toggle } from '~/components/icons/toggle';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import KBarButton from './k-bar-button';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const toggleRef = useRef<HTMLDivElement>(null);
  const [onToggle, setOnToggle] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const shadowColor = (themeInfo: string) => {
    return themeInfo === 'dark'
      ? 'shadow-[0_5px_7px_0px_#050505]'
      : 'shadow-[0_5px_7px_0px_#c2c2c280]';
  };

  const handleScroll = useCallback(() => {
    if (!theme) return;
    if (window.scrollY > 0) {
      headerRef.current?.classList.add(shadowColor(theme));
      return;
    }
    headerRef.current?.classList.remove(shadowColor(theme));
  }, [theme]);

  const menuRouter = (location: string) => {
    router.push(`${location}`, { scroll: true });
  };

  const handleToggle = (location?: string) => {
    if (onToggle) {
      toggleRef.current?.classList.add('hidden');
      document.body.classList.remove('toggle');
    } else {
      toggleRef.current?.classList.remove('hidden');
      document.body.classList.add('toggle');
    }

    setOnToggle((prev) => !prev);
    if (location) {
      menuRouter(location);
    }
  };

  const initShadowClassList = () => {
    if (currentTheme === 'dark') {
      headerRef.current?.classList.remove(shadowColor('light'));
      headerRef.current?.classList.add(shadowColor('dark'));
    } else {
      headerRef.current?.classList.remove(shadowColor('dark'));
      headerRef.current?.classList.add(shadowColor('light'));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    initShadowClassList();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <>
      {hasMounted && (
        <header
          ref={headerRef}
          className="sticky top-0 left-0 w-full z-10 h-20 transition duration-500 bg-[#ececec] dark:bg-[#1a1a1a]"
        >
          <div className="text-black px-10 max-w-screen-md h-20 flex flex-nowrap items-center justify-between max-w-page mx-auto gap-5">
            <div className="flex flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
              <Nav type="normal" onClick={menuRouter} />
            </div>
            <div className="flex gap-5 maxSm:justify-end maxSm:w-full">
              <KBarButton />

              <div className="flex flex-nowrap gap-2 items-center">
                <button
                  type="button"
                  className="m-0 p-0 hidden maxSm:flex"
                  onClick={() => handleToggle()}
                >
                  <Toggle />
                </button>
                <button
                  type="button"
                  className="m-0 p-0"
                  onClick={() => {
                    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
                  }}
                >
                  {currentTheme === 'dark' ? <Moon /> : <Sun />}
                </button>
              </div>
            </div>
          </div>
          <div
            ref={toggleRef}
            className="w-full h-screen absolute top-20 z-50 left-0 bg-white flex-col flex-nowrap p-5 flex hidden dark:bg-[#111111]"
          >
            <Nav type="toggle" onClick={handleToggle} />
          </div>
        </header>
      )}
    </>
  );
}
