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

    const handleScroll = useCallback(() => {
        const shadowColor = theme === 'dark' ? '#050505' : '#ececec';
        if (window.scrollY > 0) {
            headerRef.current?.classList.add(`shadow-[0_5px_7px_0px_${shadowColor}]`);
            return;
        }
        headerRef.current?.classList.remove(`shadow-[0_5px_7px_0px_${shadowColor}]`);
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

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
                <header ref={headerRef} className="sticky top-0 left-0 w-full z-10 h-20">
                    <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center justify-evenly m-auto px-8">
                        <div className="flex flex-nowrap gap-8 items-center">
                            <button
                                type="button"
                                className="m-0 p-0"
                                onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                            >
                                {currentTheme === 'dark' ? <Moon /> : <Sun />}
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
                        className="w-full h-screen absolute top-20 z-50 left-0 bg-white flex-col flex-nowrap p-5 flex hidden dark:bg-[#111111]"
                    >
                        <Nav type="toggle" onClick={handleToggle} />
                    </div>
                </header>
            )}
        </>
    );
}
