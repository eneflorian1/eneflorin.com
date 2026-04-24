"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconBook, IconBookOpen, IconSparkles, IconUser } from "../icons";

export function BottomNav() {
    const pathname = usePathname();

    const isHome = pathname === "/";
    const isBooks = pathname?.startsWith("/books");
    const isTutorials = pathname?.startsWith("/tutorials");
    const isAstazi = pathname === "/retea-neuronala";
    const isDespre = pathname === "/despre";

    return (
        <nav className="nav-bottom">
            <div className="nav-bottom__inner">
                <Link href="/" className={`nav-bottom__item ${isHome ? 'nav-bottom__item--active' : ''}`} id="nav-home">
                    <span className="nav-bottom__icon"><IconHome size={22} /></span>
                    <span>Acasă</span>
                </Link>
                <Link href="/books" className={`nav-bottom__item ${isBooks ? 'nav-bottom__item--active' : ''}`} id="nav-books">
                    <span className="nav-bottom__icon"><IconBook size={22} /></span>
                    <span>Cărți</span>
                </Link>
                <Link href="/tutorials" className={`nav-bottom__item ${isTutorials ? 'nav-bottom__item--active' : ''}`} id="nav-tutorials">
                    <span className="nav-bottom__icon"><IconBookOpen size={22} /></span>
                    <span>Tutoriale</span>
                </Link>
                <Link href="/retea-neuronala" className={`nav-bottom__item ${isAstazi ? 'nav-bottom__item--active' : ''}`} id="nav-astazi">
                    <span className="nav-bottom__icon"><IconSparkles size={22} /></span>
                    <span>Astăzi</span>
                </Link>
                <Link href="/despre" className={`nav-bottom__item ${isDespre ? 'nav-bottom__item--active' : ''}`} id="nav-about">
                    <span className="nav-bottom__icon"><IconUser size={22} /></span>
                    <span>Despre</span>
                </Link>
            </div>
        </nav>
    );
}
