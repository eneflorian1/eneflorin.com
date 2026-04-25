"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { BottomNav } from "../../components/BottomNav";
import { IconArrowLeft, IconBookOpen, IconClock, IconHeadphones, IconDownload, IconSparkles } from "../../icons";
import type { Book } from "../../lib/getContent";

export default function BookReaderClient({ book }: { book: Book | null }) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${(totalScroll / windowHeight) * 100}%`;
            setScrollProgress(parseFloat(scroll));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!book) {
        return (
            <>
                <Header />
                <main className="page-content">
                    <div className="container">
                        <h2>Cartea nu a fost găsită</h2>
                        <Link href="/books">Înapoi la bibliotecă</Link>
                    </div>
                </main>
                <BottomNav />
            </>
        );
    }

    return (
        <>
            <Header />

            {/* Reading Progress */}
            <div className="reader-progress">
                <div
                    className="reader-progress-bar"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            <main className="page-content">
                <article className="reader-view">
                    <div className="container container--narrow">
                        <header className="reader-header animate-in">
                            <Link href="/books" className="back-link">
                                <IconArrowLeft size={16} /> Înapoi la bibliotecă
                            </Link>
                            <h1 className="reader-title">{book.title}</h1>
                            <div className="reader-meta">
                                <span><IconBookOpen size={16} /> {book.author}</span>
                                <span><IconClock size={16} /> {book.date}</span>
                                <span className="pill"><IconSparkles size={12} /> AI Generated</span>
                            </div>
                        </header>

                        <div className="reader-content animate-in animate-delay-1">
                            {book.chapters.map((chapter, idx) => (
                                <section key={idx} className="reader-chapter" id={`chapter-${idx}`}>
                                    <h2 className="reader-chapter__title">{chapter.title}</h2>
                                    <div
                                        className="reader-text"
                                        dangerouslySetInnerHTML={{ __html: chapter.content.replace(/\n/g, '<p>') }}
                                    />
                                </section>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Floating Action Buttons */}
                <div className="reader-actions animate-in animate-delay-2">
                    <button className="action-fab" title="Ascultă Audio">
                        <IconHeadphones size={20} />
                    </button>
                    <button className="action-fab" title="Descarcă PDF">
                        <IconDownload size={20} />
                    </button>
                </div>
            </main>

            <BottomNav />
        </>
    );
}
