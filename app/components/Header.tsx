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
    const isTutorials = pathname?.startsWith("/tutorials");

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
                                href="/tutorials"
                                className={`site-header__nav-link ${isTutorials ? 'site-header__nav-link--active' : ''}`}
                                id="desktop-nav-tutorials"
                            >
                                Tutoriale
                            </Link>
                            <a href="#" className="site-header__nav-link" id="desktop-nav-about">
                                Despre
                            </a>
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
