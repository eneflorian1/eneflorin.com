"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBookOpen, IconSearch } from "../icons";
import { SearchModal } from "./SearchModal";
import { NAV_ITEMS, isItemActive } from "../lib/navigation";

export function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className="site-header">
                <div className="site-header__inner">
                    <Link href="/" className="site-header__logo" id="header-logo">
                        <IconBookOpen size={22} /> EneFlorin
                    </Link>

                    <div className="site-header__right">
                        <nav className="site-header__nav">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`site-header__nav-link ${isItemActive(item.href, pathname) ? 'site-header__nav-link--active' : ''}`}
                                    id={`desktop-nav-${item.id}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
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
