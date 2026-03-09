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
    IconCpu,
    IconCode,
    IconRocket,
    IconBookOpen,
} from "../../icons";

/* ---- Bilingual content ---- */
const content = {
    ro: {
        backLink: "Înapoi la tutoriale",
        dateLabel: "În curând",
        title: "Agenți AI",
        titleHighlight: "Construiește Asistenți Inteligenți",
        price: "349 RON",
        buyButton: "Cumpără cursul",
        intro: "Învață să creezi agenți AI autonomi care pot automatiza taskuri complexe, să înțeleagă limbajul natural și să interacționeze inteligent cu utilizatorii. De la concepte fundamentale la implementări practice cu LLM-uri și framework-uri moderne.",
        sections: {
            whatYouWillLearn: {
                title: "Ce vei învăța",
                items: [
                    "Arhitectura agenților AI și sistemele multi-agent",
                    "Integrarea cu API-uri LLM (OpenAI, Anthropic, Claude)",
                    "Prompt engineering avansat și chain-of-thought",
                    "Memory management și context retention",
                    "Tool calling și function execution",
                    "RAG (Retrieval-Augmented Generation) pentru baze de cunoștințe",
                    "Testing, debugging și optimizarea agenților",
                ],
            },
            whoIsFor: {
                title: "Pentru cine este acest curs",
                text: "Acest curs este destinat developerilor cu experiență în programare (Python/JavaScript) care doresc să construiască aplicații AI moderne. Nu este necesar background în machine learning, dar cunoștințele de bază despre API-uri și programare asincronă sunt recomandate.",
            },
            courseStructure: {
                title: "Structura cursului",
                modules: [
                    "Introducere în agenții AI și LLM-uri",
                    "Framework-uri: LangChain, LlamaIndex, AutoGPT",
                    "Construirea primului agent conversațional",
                    "Agenți specializați: coding, research, automation",
                    "Proiect final: Sistem multi-agent complet",
                ],
            },
        },
    },
    en: {
        backLink: "Back to tutorials",
        dateLabel: "Coming Soon",
        title: "AI Agents",
        titleHighlight: "Build Intelligent Assistants",
        price: "349 RON",
        buyButton: "Buy Course",
        intro: "Learn to create autonomous AI agents that can automate complex tasks, understand natural language, and interact intelligently with users. From fundamental concepts to practical implementations with LLMs and modern frameworks.",
        sections: {
            whatYouWillLearn: {
                title: "What You Will Learn",
                items: [
                    "AI agent architecture and multi-agent systems",
                    "Integration with LLM APIs (OpenAI, Anthropic, Claude)",
                    "Advanced prompt engineering and chain-of-thought",
                    "Memory management and context retention",
                    "Tool calling and function execution",
                    "RAG (Retrieval-Augmented Generation) for knowledge bases",
                    "Testing, debugging, and optimizing agents",
                ],
            },
            whoIsFor: {
                title: "Who This Course Is For",
                text: "This course is designed for developers with programming experience (Python/JavaScript) who want to build modern AI applications. No machine learning background is required, but basic knowledge of APIs and asynchronous programming is recommended.",
            },
            courseStructure: {
                title: "Course Structure",
                modules: [
                    "Introduction to AI agents and LLMs",
                    "Frameworks: LangChain, LlamaIndex, AutoGPT",
                    "Building your first conversational agent",
                    "Specialized agents: coding, research, automation",
                    "Final project: Complete multi-agent system",
                ],
            },
        },
    },
};

/* ---- Main Tutorial Page ---- */
export default function AIAgentsTutorial() {
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

                            <h2><IconCpu size={20} /> {s.whatYouWillLearn.title}</h2>
                            <ul>
                                {s.whatYouWillLearn.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <h2><IconCode size={20} /> {s.whoIsFor.title}</h2>
                            <p>{s.whoIsFor.text}</p>

                            <h2><IconRocket size={20} /> {s.courseStructure.title}</h2>
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
