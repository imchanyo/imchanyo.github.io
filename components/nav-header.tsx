import Link from 'next/link';
import { UndoIcon } from './icons/undo-icon';

export default function NavHeader({ href, children }: { href: string; children?: React.ReactNode }) {
    return (
        <nav className="sticky top-page font-serif leading-7 maxMd:relative maxMd:top-0 maxMd:static">
            <Link
                href={href}
                className="cursor-pointer flex select-none items-start gap-2 text-gray-11 transition-colors hover:text-gray-12"
            >
                {/* <UndoIcon className="mt-1.5 shrink-0" /> */}
                <span className="hover:scale-110 transition duration-250">
                    <img
                        className="dark:rounded-lg dark:bg-[#ffffff]"
                        style={{ width: '25px' }}
                        src="/img/file.png"
                        alt="home"
                    />
                </span>
            </Link>
            {children}
        </nav>
    );
}
