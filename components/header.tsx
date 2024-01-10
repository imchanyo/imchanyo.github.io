'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Nav from '~/components/nav';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Sun } from '~/components/icons/sun';
import { Moon } from '~/components/icons/moon';
import { Toggle } from '~/components/icons/toggle';
import { useTheme } from 'next-themes';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
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

  const handleToggle = () => {
    if (onToggle) {
      toggleRef.current?.classList.add('hidden');
      document.body.classList.remove('toggle');
    } else {
      toggleRef.current?.classList.remove('hidden');
      document.body.classList.add('toggle');
    }

    setOnToggle((prev) => !prev);
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
      <Head>
        <title>Maintain Hoon</title>
      </Head>

      {hasMounted && (
        <header
          ref={headerRef}
          className="sticky top-0 left-0 w-full z-10 h-20 transition duration-500 bg-[#ececec] dark:bg-[#1a1a1a]"
        >
          <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center justify-end max-w-page mx-auto gap-5">
            <div className="flex flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
              <Nav type="normal" />
            </div>
            <div className="flex flex-nowrap gap-8 items-center">
              <button
                type="button"
                className="m-0 p-0 hidden maxSm:flex"
                onClick={handleToggle}
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
