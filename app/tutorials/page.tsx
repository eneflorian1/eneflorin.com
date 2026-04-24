"use client";

import Link from "next/link";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import {
    IconHome,
    IconBook,
    IconUser,
    IconLink,
    IconCpu,
    IconGlobe,
    IconShield,
    IconBookOpen,
    IconArrowRight,
    IconSparkles,
} from "../icons";

import contentData from "../data/content.json";

/* ---- Category SVG Icons ---- */
function IconUGC({ size = 24, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M15 10l4.553-2.276A1 1 0 0021 6.882V17.118a1 1 0 01-1.447.894L15 16v-6z" />
            <rect x="3" y="6" width="12" height="12" rx="2" ry="2" />
        </svg>
    );
}

function IconChart({ size = 24, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
            <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
    );
}

function IconRobot({ size = 24, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="5" y="8" width="14" height="12" rx="2" />
            <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
            <line x1="12" y1="5" x2="12" y2="8" />
            <circle cx="12" cy="4" r="1" />
            <line x1="3" y1="13" x2="5" y2="13" />
            <line x1="19" y1="13" x2="21" y2="13" />
        </svg>
    );
}

function IconRuler({ size = 24, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    );
}

const IconMap: Record<string, any> = {
    ugc: IconUGC,
    chart: IconChart,
    robot: IconRobot,
    ruler: IconRuler,
    link: IconLink,
    cpu: IconCpu
};

const categories = contentData.categories.map(cat => ({
    ...cat,
    comingSoon: 'comingSoon' in cat ? (cat as any).comingSoon : false,
    icon: IconMap[cat.icon] || IconLink,
    tutorials: contentData.tutorials.filter(t => t.categoryId === cat.id)
}));


export default function TutorialsIndex() {
    return (
        <>
            {/* Fixed Header */}
            <Header />

            <main className="page-content">
                {/* Page Header */}
                <section className="hero">
                    <div className="container">
                        <div className="hero__content">
                            <div className="hero__pill animate-in">
                                <span className="pill"><IconBook size={14} /> Categorii</span>
                            </div>
                            <h1 className="hero__title animate-in animate-delay-1">
                                Explorează <span className="gradient-text">tutorialele</span>
                            </h1>
                            <p className="hero__description animate-in animate-delay-2">
                                Alege o categorie și descoperă lecții practice despre tehnologiile viitorului.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="section">
                    <div className="container">
                        <div className="categories-grid">
                            {/* Special Card: Books / Library */}
                            <div className="category-card animate-in" style={{ borderColor: 'var(--accent-pink)', background: 'rgba(236, 72, 153, 0.02)' }}>
                                <div className="category-card__header">
                                    <div className="category-card__icon" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>
                                        <IconBook size={24} />
                                    </div>
                                    <div className="category-card__info">
                                        <h2 className="category-card__title">Librărie AI</h2>
                                        <p className="category-card__subtitle">Cărți & Publicații</p>
                                    </div>
                                    <span className="badge badge--new" style={{ fontSize: "0.6rem", background: '#ec4899' }}>Sincronizat</span>
                                </div>
                                <p className="category-card__description">
                                    Acces direct la toate cărțile generate autonom. Documentație extinsă și ghiduri complete sub formă de carte.
                                </p>
                                <div className="category-card__tutorials">
                                    <Link href="/books" className="category-tutorial-link">
                                        <span className="category-tutorial-link__title">Vezi toate cărțile</span>
                                        <span className="category-tutorial-link__arrow"><IconArrowRight size={14} /></span>
                                    </Link>
                                    <Link href="/books" className="category-tutorial-link" style={{ marginTop: '0.5rem', opacity: 0.8, fontSize: '0.8rem' }}>
                                        <span className="category-tutorial-link__title">Status Sincronizare: Activ</span>
                                        <span className="category-tutorial-link__arrow"><IconSparkles size={12} /></span>
                                    </Link>
                                </div>
                            </div>

                            {categories.map((cat, i) => {
                                const CatIcon = cat.icon;
                                return (
                                    <div
                                        key={cat.id}
                                        className={`category-card animate-in`}
                                        style={{ animationDelay: `${0.08 * (i + 1)}s` }}
                                    >
                                        {/* Category Header */}
                                        <div className="category-card__header">
                                            <div
                                                className="category-card__icon"
                                                style={{ background: cat.bgColor, color: cat.color, borderColor: cat.borderColor }}
                                            >
                                                <CatIcon size={24} />
                                            </div>
                                            <div className="category-card__info">
                                                <h2 className="category-card__title">{cat.title}</h2>
                                                <p className="category-card__subtitle">{cat.subtitle}</p>
                                            </div>
                                            {cat.comingSoon && (
                                                <span className="badge badge--new" style={{ fontSize: "0.6rem" }}>În curând</span>
                                            )}
                                        </div>

                                        <p className="category-card__description">{cat.description}</p>

                                        {/* Tutorial Links */}
                                        {cat.tutorials.length > 0 && (
                                            <div className="category-card__tutorials">
                                                {cat.tutorials.map((tut) => (
                                                    <Link
                                                        key={tut.slug}
                                                        href={`/tutorials/${tut.slug}`}
                                                        className="category-tutorial-link"
                                                    >
                                                        <span className="category-tutorial-link__title">{tut.title}</span>
                                                        <span className="category-tutorial-link__arrow">
                                                            <IconArrowRight size={14} />
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}

                                        {/* Empty state */}
                                        {cat.tutorials.length === 0 && (
                                            <div className="category-card__empty">
                                                <span>Tutoriale în pregătire</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <BottomNav />
        </>
    );
}
