"use client";

import Link from "next/link";
import { Header } from "../components/Header";
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
} from "../icons";

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

const categories = [
    {
        id: "ugc",
        title: "UGC",
        subtitle: "User Generated Content",
        description: "Cum să creezi conținut viral și să câștigi ca și creator.",
        icon: IconUGC,
        color: "#ec4899",
        bgColor: "rgba(236, 72, 153, 0.06)",
        borderColor: "rgba(236, 72, 153, 0.12)",
        tutorials: [],
        comingSoon: true,
    },
    {
        id: "web4",
        title: "Web 4.0",
        subtitle: "Blockchain & Agenți Blockchain",
        description: "Blockchain, contracte inteligente și agenți autonomi descentralizați.",
        icon: IconLink,
        color: "#2563eb",
        bgColor: "rgba(37, 99, 235, 0.06)",
        borderColor: "rgba(37, 99, 235, 0.12)",
        tutorials: [
            {
                slug: "blockchain",
                title: "Introducere în Blockchain",
                description: "Ce este blockchain-ul, cum funcționează și de ce contează.",
                badges: ["text", "audio"],
            },
        ],
        comingSoon: false,
    },
    {
        id: "ai-agents",
        title: "Agenți AI",
        subtitle: "Inteligență Artificială Aplicată",
        description: "Construiește și folosește agenți AI în proiectele tale.",
        icon: IconCpu,
        color: "#06b6d4",
        bgColor: "rgba(6, 182, 212, 0.06)",
        borderColor: "rgba(6, 182, 212, 0.12)",
        tutorials: [],
        comingSoon: true,
    },
    {
        id: "trading",
        title: "Trading Crypto",
        subtitle: "Strategii și Analiză",
        description: "Învață analiza tehnică, strategii de trading și managementul riscului.",
        icon: IconChart,
        color: "#10b981",
        bgColor: "rgba(16, 185, 129, 0.06)",
        borderColor: "rgba(16, 185, 129, 0.12)",
        tutorials: [],
        comingSoon: true,
    },
    {
        id: "robots",
        title: "Roboți Umanoizi",
        subtitle: "Robotică & Automatizare",
        description: "Proiectarea, construirea și programarea roboților umanoizi.",
        icon: IconRobot,
        color: "#f59e0b",
        bgColor: "rgba(245, 158, 11, 0.06)",
        borderColor: "rgba(245, 158, 11, 0.12)",
        tutorials: [],
        comingSoon: true,
    },
    {
        id: "cad",
        title: "Proiectare CAD",
        subtitle: "Design & Modelare 3D",
        description: "De la schiță la model 3D — proiectare asistată de calculator.",
        icon: IconRuler,
        color: "#8b5cf6",
        bgColor: "rgba(139, 92, 246, 0.06)",
        borderColor: "rgba(139, 92, 246, 0.12)",
        tutorials: [],
        comingSoon: true,
    },
];

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

            {/* Fixed Bottom Nav */}
            <nav className="nav-bottom">
                <div className="nav-bottom__inner">
                    <a href="/" className="nav-bottom__item" id="nav-home">
                        <span className="nav-bottom__icon"><IconHome size={22} /></span>
                        <span>Acasă</span>
                    </a>
                    <a href="/tutorials" className="nav-bottom__item nav-bottom__item--active" id="nav-tutorials">
                        <span className="nav-bottom__icon"><IconBook size={22} /></span>
                        <span>Tutoriale</span>
                    </a>
                    <a href="#" className="nav-bottom__item" id="nav-about">
                        <span className="nav-bottom__icon"><IconUser size={22} /></span>
                        <span>Despre</span>
                    </a>
                </div>
            </nav>
        </>
    );
}
