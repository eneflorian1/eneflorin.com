"use client";

import Link from "next/link";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import {
    IconHome,
    IconBook,
    IconUser,
    IconBookOpen,
    IconArrowRight,
    IconSparkles,
} from "../icons";
import contentData from "../data/content.json";

export default function BooksIndex() {
    const books = contentData.books || [];

    return (
        <>
            <Header />

            <main className="page-content">
                <section className="hero">
                    <div className="container">
                        <div className="hero__content">
                            <div className="hero__pill animate-in">
                                <span className="pill"><IconBook size={14} /> Colecție</span>
                            </div>
                            <h1 className="hero__title animate-in animate-delay-1">
                                Cărți <span className="gradient-text">Generate de AI</span>
                            </h1>
                            <p className="hero__description animate-in animate-delay-2">
                                Explorează cărțile create de agenții noștri autonomi. Cunoaștere la un click distanță.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        {books.length > 0 ? (
                            <div className="books-grid">
                                {books.map((book: any, i) => (
                                    <div
                                        key={book.slug}
                                        className="category-card animate-in"
                                        style={{ animationDelay: `${0.08 * (i + 1)}s` }}
                                    >
                                        <div className="category-card__header">
                                            <div className="category-card__icon" style={{ background: "rgba(236, 72, 153, 0.06)", color: "#ec4899" }}>
                                                <IconBook size={24} />
                                            </div>
                                            <div className="category-card__info">
                                                <h2 className="category-card__title">{book.title}</h2>
                                                <p className="category-card__subtitle">{book.author || "EneFlorin AI"}</p>
                                            </div>
                                        </div>
                                        <p className="category-card__description">{book.description}</p>
                                        <div className="category-card__tutorials">
                                            <Link href={`/books/${book.slug}`} className="category-tutorial-link">
                                                <span className="category-tutorial-link__title">Citește Cartea</span>
                                                <span className="category-tutorial-link__arrow"><IconArrowRight size={14} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-state animate-in">
                                <div className="empty-state__icon">
                                    <IconBookOpen size={48} />
                                </div>
                                <h3>Nicio carte momentan</h3>
                                <p>Agenții lucrează intens la prima ediție. Revino curând!</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <BottomNav />
        </>
    );
}
