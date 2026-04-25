"use client";

import Link from "next/link";
import { PageWrapper } from "../components/PageWrapper";
import {
    IconBook,
    IconLink,
    IconCpu,
    IconArrowRight,
    IconSparkles,
    IconUGC,
    IconChart,
    IconRobot,
    IconRuler
} from "../icons";
import type { Category, Tutorial } from "../lib/getContent";

const IconMap: Record<string, any> = {
    ugc: IconUGC,
    chart: IconChart,
    robot: IconRobot,
    ruler: IconRuler,
    link: IconLink,
    cpu: IconCpu
};

export default function TutorialsClient({ categories, tutorials }: { categories: Category[]; tutorials: Tutorial[] }) {
    const enriched = categories.map(cat => ({
        ...cat,
        comingSoon: cat.comingSoon || false,
        Icon: IconMap[cat.icon] || IconLink,
        tutorials: tutorials.filter(t => t.categoryId === cat.id)
    }));

    return (
        <PageWrapper>
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

                        {enriched.map((cat, i) => {
                            const CatIcon = cat.Icon;
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
        </PageWrapper>
    );
}
