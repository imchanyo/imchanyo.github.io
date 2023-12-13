'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Nav from '~/components/nav';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Sun } from '~/components/icons/sun';
import { Moon } from '~/components/icons/moon';
import { Toggle } from '~/components/icons/toggle';
type Theme = null | 'dark' | 'light';

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const [onToggle, setOnToggle] = useState<boolean>(false);
    const [theme, setTheme] = useState<Theme>(null);

    const handleScrollShadow = () => {
        const shadowColor = theme === 'dark' ? '#ececec' : '#050505';
        if (theme === 'dark') {
            headerRef.current?.classList.remove(`shadow-[0_5px_7px_0px_#050505]`);
            headerRef.current?.classList.add(`shadow-[0_5px_7px_0px_${shadowColor}]`);
        } else {
            headerRef.current?.classList.remove(`shadow-[0_5px_7px_0px_#ececec]`);
            headerRef.current?.classList.add(`shadow-[0_5px_7px_0px_${shadowColor}]`);
        }
    };

    const handleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.body.className = newTheme;

        handleScrollShadow();
    };

    const handleScroll = useCallback(() => {
        const shadowColor = theme === 'dark' ? '#050505' : '#ececec';
        if (window.scrollY > 0) {
            headerRef.current?.classList.add(`shadow-[0_5px_7px_0px_${shadowColor}]`);
            return;
        }
        headerRef.current?.classList.remove(`shadow-[0_5px_7px_0px_${shadowColor}]`);
    }, [theme]);

    const handleToggle = () => {
        if (onToggle) toggleRef.current?.classList.add('hidden');
        else toggleRef.current?.classList.remove('hidden');
        setOnToggle((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setTheme(document.body.className as Theme);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [theme]);

    return (
        <>
            <Head>
                <title>Maintain Hoon</title>
            </Head>
            <header
                ref={headerRef}
                className="sticky top-0 left-0 w-full z-10 h-20 font-mono bg-white dark:bg-[#1a1a1a]"
            >
                <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center justify-evenly m-auto px-8">
                    <Link href="/">
                        {/* {theme === 'dark' ? (
                            <Image src="/images/logoDarkMode.png" alt="profile" width={180} height={30} />
                        ) : (
                            <Image src="/images/logoLightMode.png" alt="profile" width={180} height={30} />
                        )} */}
                    </Link>
                    <div className="flex flex-nowrap gap-8 items-center">
                        <button type="button" className="m-0 p-0" onClick={handleTheme}>
                            {theme === 'dark' ? <Moon /> : <Sun />}
                        </button>
                        <button type="button" className="m-0 p-0 hidden sm:flex" onClick={handleToggle}>
                            <Toggle />
                        </button>
                        <div className="flex flex-nowrap items-center justify-center gap-5 text-center sm:hidden">
                            <Nav type="normal" />
                        </div>
                    </div>
                </div>
                <div
                    ref={toggleRef}
                    className="w-full h-screen absolute top-20 left-0 bg-white flex-col flex-nowrap p-5 flex hidden dark:bg-[#111111]"
                >
                    <Nav type="toggle" onClick={handleToggle} />
                </div>
            </header>
        </>
    );
}
