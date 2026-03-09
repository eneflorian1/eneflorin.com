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
    IconTrendingUp,
    IconChartBar,
    IconShield,
    IconBookOpen,
} from "../../icons";

/* ---- Bilingual content ---- */
const content = {
    ro: {
        backLink: "Înapoi la tutoriale",
        dateLabel: "În curând",
        title: "Trading Crypto",
        titleHighlight: "Strategii & Analiză",
        price: "299 RON",
        buyButton: "Cumpără cursul",
        intro: "Stăpânește arta tradingului de criptomonede prin strategii dovedite, analiza tehnică și managementul riscului. De la concepte fundamentale la tehnici avansate de trading folosite de profesioniști.",
        sections: {
            whatYouWillLearn: {
                title: "Ce vei învăța",
                items: [
                    "Fundamentele pieței crypto: Bitcoin, Ethereum, altcoins",
                    "Analiza tehnică: chart patterns, indicatori, volume analysis",
                    "Analiza fundamentală: tokenomics, whitepapers, evaluare proiecte",
                    "Strategii de trading: day trading, swing trading, HODLing",
                    "Risk management și poziționare",
                    "Psihologia tradingului și controlul emoțional",
                    "Exchange-uri, wallet-uri și securitate",
                    "Trading automatizat și bots",
                ],
            },
            whoIsFor: {
                title: "Pentru cine este acest curs",
                text: "Acest curs este ideal pentru începători care vor să înțeleagă piața crypto și pentru traderi intermediari care vor să își îmbunătățească strategiile. Nu necesită experiență anterioară în trading, dar cunoștințele de bază despre blockchain sunt utile.",
            },
            courseStructure: {
                title: "Structura cursului",
                modules: [
                    "Introducere în piața crypto și cum să începi",
                    "Analiza tehnică: de la chart-uri la strategii",
                    "Analiza fundamentală și evaluarea proiectelor",
                    "Strategii avansate și managementul portofoliului",
                    "Simulări și practica trading-ului real",
                ],
            },
        },
    },
    en: {
        backLink: "Back to tutorials",
        dateLabel: "Coming Soon",
        title: "Crypto Trading",
        titleHighlight: "Strategies & Analysis",
        price: "299 RON",
        buyButton: "Buy Course",
        intro: "Master the art of cryptocurrency trading through proven strategies, technical analysis, and risk management. From fundamental concepts to advanced trading techniques used by professionals.",
        sections: {
            whatYouWillLearn: {
                title: "What You Will Learn",
                items: [
                    "Crypto market fundamentals: Bitcoin, Ethereum, altcoins",
                    "Technical analysis: chart patterns, indicators, volume analysis",
                    "Fundamental analysis: tokenomics, whitepapers, project evaluation",
                    "Trading strategies: day trading, swing trading, HODLing",
                    "Risk management and position sizing",
                    "Trading psychology and emotional control",
                    "Exchanges, wallets, and security",
                    "Automated trading and bots",
                ],
            },
            whoIsFor: {
                title: "Who This Course Is For",
                text: "This course is ideal for beginners who want to understand the crypto market and intermediate traders who want to improve their strategies. No prior trading experience required, but basic blockchain knowledge is helpful.",
            },
            courseStructure: {
                title: "Course Structure",
                modules: [
                    "Introduction to crypto market and getting started",
                    "Technical analysis: from charts to strategies",
                    "Fundamental analysis and project evaluation",
                    "Advanced strategies and portfolio management",
                    "Simulations and real trading practice",
                ],
            },
        },
    },
};

/* ---- Main Tutorial Page ---- */
export default function TradingCryptoTutorial() {
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

                            <h2><IconChartBar size={20} /> {s.whatYouWillLearn.title}</h2>
                            <ul>
                                {s.whatYouWillLearn.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <h2><IconShield size={20} /> {s.whoIsFor.title}</h2>
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
                    <Link href="/retea-neuronala" className="nav-bottom__item" id="nav-astazi">
                        <span className="nav-bottom__icon"><IconSparkles size={22} /></span>
                        <span>Astăzi</span>
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
