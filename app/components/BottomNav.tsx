"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, isItemActive } from "../lib/navigation";

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="nav-bottom">
            <div className="nav-bottom__inner">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link 
                            key={item.href}
                            href={item.href} 
                            className={`nav-bottom__item ${isItemActive(item.href, pathname) ? 'nav-bottom__item--active' : ''}`} 
                            id={`nav-${item.id}`}
                        >
                            <span className="nav-bottom__icon"><Icon size={22} /></span>
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
