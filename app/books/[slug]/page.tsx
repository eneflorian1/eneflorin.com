"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "../../components/Header";
import { BottomNav } from "../../components/BottomNav";
import { IconArrowLeft, IconBookOpen, IconClock } from "../../icons";
import contentData from "../../data/content.json";

export default function BookReader() {
    const params = useParams();
    const slug = params.slug;
    const book = contentData.books.find((b: any) => b.slug === slug);

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
                            </div>
                        </header>

                        <div className="reader-content animate-in animate-delay-1">
                            {book.chapters.map((chapter: any, idx: number) => (
                                <section key={idx} className="reader-chapter">
                                    <h2 className="reader-chapter__title">{chapter.title}</h2>
                                    <div 
                                        className="reader-text"
                                        dangerouslySetInnerHTML={{ __html: chapter.content.replace(/\n/g, '<br/>') }}
                                    />
                                </section>
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            <BottomNav />
        </>
    );
}
