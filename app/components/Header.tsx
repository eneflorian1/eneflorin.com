"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBookOpen, IconSearch } from "../icons";
import { SearchModal } from "./SearchModal";

export function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";
    const isBooks = pathname?.startsWith("/books");
    const isTutorials = pathname?.startsWith("/tutorials");
    const isAstazi = pathname === "/retea-neuronala";
    const isDespre = pathname === "/despre";

    return (
        <>
            <header className="site-header">
                <div className="site-header__inner">
                    <Link href="/" className="site-header__logo" id="header-logo">
                        <IconBookOpen size={22} /> EneFlorin
                    </Link>

                    <div className="site-header__right">
                        <nav className="site-header__nav">
                            <Link
                                href="/"
                                className={`site-header__nav-link ${isHome ? 'site-header__nav-link--active' : ''}`}
                                id="desktop-nav-home"
                            >
                                Acasă
                            </Link>
                            <Link
                                href="/books"
                                className={`site-header__nav-link ${isBooks ? 'site-header__nav-link--active' : ''}`}
                                id="desktop-nav-books"
                            >
                                Cărți
                            </Link>
                            <Link
                                href="/tutorials"
                                className={`site-header__nav-link ${isTutorials ? 'site-header__nav-link--active' : ''}`}
                                id="desktop-nav-tutorials"
                            >
                                Tutoriale
                            </Link>
                            <Link
                                href="/retea-neuronala"
                                className={`site-header__nav-link ${isAstazi ? 'site-header__nav-link--active' : ''}`}
                                id="desktop-nav-astazi"
                            >
                                Astăzi
                            </Link>
                            <Link
                                href="/despre"
                                className={`site-header__nav-link ${isDespre ? 'site-header__nav-link--active' : ''}`}
                                id="desktop-nav-about"
                            >
                                Despre
                            </Link>
                        </nav>

                        <button
                            className="site-header__search-btn"
                            onClick={() => setIsSearchOpen(true)}
                            aria-label="Caută tutoriale"
                        >
                            <IconSearch size={22} />
                        </button>
                    </div>
                </div>
            </header>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
