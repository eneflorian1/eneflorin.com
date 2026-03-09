"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageToggle from "../../components/LanguageToggle";
import {
    IconHome,
    IconBook,
    IconUser,
    IconArrowLeft,
    IconSparkles,
    IconVideo,
    IconUsers,
    IconTrendingUp,
    IconBookOpen,
} from "../../icons";

/* ---- Bilingual content ---- */
const content = {
    ro: {
        backLink: "Înapoi la tutoriale",
        dateLabel: "În curând",
        title: "UGC",
        titleHighlight: "User Generated Content",
        price: "199 RON",
        buyButton: "Cumpără cursul",
        intro: "Descoperă cum să creezi, să monetizezi și să distribui conținut generat de utilizatori. Învață tehnicile avansate de producție video, editare și promovare pe platformele sociale.",
        sections: {
            whatYouWillLearn: {
                title: "Ce vei învăța",
                items: [
                    "Strategii de creare a conținutului viral",
                    "Tehnici de filmare și editare video pentru social media",
                    "Cum să construiești o audiență autentică",
                    "Monetizare prin platforme: YouTube, TikTok, Instagram",
                    "Analiza datelor și optimizarea conținutului",
                    "Colaborări și parteneriate cu branduri",
                ],
            },
            whoIsFor: {
                title: "Pentru cine este acest curs",
                text: "Acest curs este ideal pentru creatori de conținut începători și intermediari care doresc să își profesionalizeze activitatea, să crească organic pe platforme sociale și să transforme pasiunea pentru conținut într-o carieră profitabilă.",
            },
            courseStructure: {
                title: "Structura cursului",
                modules: [
                    "Fundamentele UGC și storytelling digital",
                    "Echipament și software pentru crearea de conținut",
                    "Strategii de creștere organică",
                    "Monetizare și brand deals",
                ],
            },
        },
    },
    en: {
        backLink: "Back to tutorials",
        dateLabel: "Coming Soon",
        title: "UGC",
        titleHighlight: "User Generated Content",
        price: "199 RON",
        buyButton: "Buy Course",
        intro: "Discover how to create, monetize, and distribute user-generated content. Learn advanced techniques for video production, editing, and promotion on social platforms.",
        sections: {
            whatYouWillLearn: {
                title: "What You Will Learn",
                items: [
                    "Strategies for creating viral content",
                    "Video filming and editing techniques for social media",
                    "How to build an authentic audience",
                    "Monetization through platforms: YouTube, TikTok, Instagram",
                    "Data analysis and content optimization",
                    "Brand collaborations and partnerships",
                ],
            },
            whoIsFor: {
                title: "Who This Course Is For",
                text: "This course is ideal for beginner and intermediate content creators who want to professionalize their activity, grow organically on social platforms, and transform their passion for content into a profitable career.",
            },
            courseStructure: {
                title: "Course Structure",
                modules: [
                    "UGC fundamentals and digital storytelling",
                    "Equipment and software for content creation",
                    "Organic growth strategies",
                    "Monetization and brand deals",
                ],
            },
        },
    },
};

/* ---- Main Tutorial Page ---- */
export default function UGCTutorial() {
    const [lang, setLang] = useState<"ro" | "en">("ro");
    const t = content[lang];
    const s = t.sections;

    return (
        <>
            {/* Fixed Header */}
            <header className="site-header">
                <div className="site-header__inner">
                    <a href="/" className="site-header__logo" id="header-logo">
                        <IconBookOpen size={22} /> EneFlorin
                    </a>
                    <nav className="site-header__nav">
                        <a href="/" className="site-header__nav-link" id="desktop-nav-home">
                            Acasă
                        </a>
                        <a href="/tutorials" className="site-header__nav-link site-header__nav-link--active" id="desktop-nav-tutorials">
                            Tutoriale
                        </a>
                        <a href="#" className="site-header__nav-link" id="desktop-nav-about">
                            Despre
                        </a>
                    </nav>
                </div>
            </header>

            <main className="page-content">
                <article className="article">
                    <div className="container">
                        {/* Back link */}
                        <Link href="/tutorials" className="article__back" id="back-to-tutorials">
                            <IconArrowLeft size={16} /> {t.backLink}
                        </Link>

                        {/* Header */}
                        <header className="article__header animate-in">
                            <div className="article__meta">
                                <span className="badge badge--new"><IconSparkles size={12} /> {t.dateLabel}</span>
                                <LanguageToggle onChange={(l) => setLang(l)} />
                            </div>
                            <h1 className="article__title">
                                {t.title}{" "}
                                <span className="gradient-text">{t.titleHighlight}</span>
                            </h1>
                        </header>

                        {/* Price Section */}
                        <div className="course-pricing animate-in animate-delay-1">
                            <div className="course-pricing__price">{t.price}</div>
                            <button className="course-pricing__buy-btn">
                                {t.buyButton}
                            </button>
                        </div>

                        {/* Intro */}
                        <div className="article__body animate-in animate-delay-2">
                            <p className="article__intro-large">{t.intro}</p>

                            <h2><IconVideo size={20} /> {s.whatYouWillLearn.title}</h2>
                            <ul>
                                {s.whatYouWillLearn.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <h2><IconUsers size={20} /> {s.whoIsFor.title}</h2>
                            <p>{s.whoIsFor.text}</p>

                            <h2><IconTrendingUp size={20} /> {s.courseStructure.title}</h2>
                            <ul>
                                {s.courseStructure.modules.map((module, i) => (
                                    <li key={i}>{module}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </article>
            </main>

            {/* Fixed Bottom Nav */}
            <nav className="nav-bottom">
                <div className="nav-bottom__inner">
                    <Link href="/" className="nav-bottom__item" id="nav-home">
                        <span className="nav-bottom__icon"><IconHome size={22} /></span>
                        <span>Acasă</span>
                    </Link>
                    <Link href="/tutorials" className="nav-bottom__item nav-bottom__item--active" id="nav-tutorials">
                        <span className="nav-bottom__icon"><IconBook size={22} /></span>
                        <span>Tutoriale</span>
                    </Link>
                    <Link href="/despre" className="nav-bottom__item" id="nav-about">
                        <span className="nav-bottom__icon"><IconUser size={22} /></span>
                        <span>Despre</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}
