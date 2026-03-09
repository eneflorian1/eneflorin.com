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
    IconBox,
    IconPencil,
    IconLayers,
    IconBookOpen,
} from "../../icons";

/* ---- Bilingual content ---- */
const content = {
    ro: {
        backLink: "Înapoi la tutoriale",
        dateLabel: "În curând",
        title: "Proiectare CAD",
        titleHighlight: "Design & Modelare 3D",
        price: "279 RON",
        buyButton: "Cumpără cursul",
        intro: "Învață să creezi modele 3D profesionale pentru design industrial, prototipare și fabricație. De la schițe 2D la asamblări complexe - stăpânește instrumentele CAD moderne folosite în industrie.",
        sections: {
            whatYouWillLearn: {
                title: "Ce vei învăța",
                items: [
                    "Fundamentele designului 3D: sketching, constraints, dimensions",
                    "Modelare parametrică și design orientat pe feature-uri",
                    "Asamblări complexe și management de componente",
                    "Tehnici avansate: surface modeling, sheet metal, weldments",
                    "Rendering foto-realist și prezentări tehnice",
                    "Documentație tehnică: desenele de execuție, BOM",
                    "Export pentru fabricație: 3D printing, CNC, laser cutting",
                    "Software: Fusion 360, SolidWorks, AutoCAD",
                ],
            },
            whoIsFor: {
                title: "Pentru cine este acest curs",
                text: "Acest curs este perfect pentru ingineri, designeri de produs, arhitecți și makeri care vor să învețe design 3D profesional. Nu este necesară experiență anterioară - începem de la zero și construim treptat competențe avansate.",
            },
            courseStructure: {
                title: "Structura cursului",
                modules: [
                    "Introducere în CAD și setup-ul workspace-ului",
                    "Modelare de bază: de la schițe la piese 3D",
                    "Tehnici avansate: assemblies, motion studies",
                    "Rendering și prezentări profesionale",
                    "Proiect final: Design complet de produs cu documentație",
                ],
            },
        },
    },
    en: {
        backLink: "Back to tutorials",
        dateLabel: "Coming Soon",
        title: "CAD Design",
        titleHighlight: "Design & 3D Modeling",
        price: "279 RON",
        buyButton: "Buy Course",
        intro: "Learn to create professional 3D models for industrial design, prototyping, and manufacturing. From 2D sketches to complex assemblies - master modern CAD tools used in industry.",
        sections: {
            whatYouWillLearn: {
                title: "What You Will Learn",
                items: [
                    "3D design fundamentals: sketching, constraints, dimensions",
                    "Parametric modeling and feature-based design",
                    "Complex assemblies and component management",
                    "Advanced techniques: surface modeling, sheet metal, weldments",
                    "Photo-realistic rendering and technical presentations",
                    "Technical documentation: working drawings, BOM",
                    "Export for manufacturing: 3D printing, CNC, laser cutting",
                    "Software: Fusion 360, SolidWorks, AutoCAD",
                ],
            },
            whoIsFor: {
                title: "Who This Course Is For",
                text: "This course is perfect for engineers, product designers, architects, and makers who want to learn professional 3D design. No prior experience required - we start from scratch and progressively build advanced skills.",
            },
            courseStructure: {
                title: "Course Structure",
                modules: [
                    "Introduction to CAD and workspace setup",
                    "Basic modeling: from sketches to 3D parts",
                    "Advanced techniques: assemblies, motion studies",
                    "Rendering and professional presentations",
                    "Final project: Complete product design with documentation",
                ],
            },
        },
    },
};

/* ---- Main Tutorial Page ---- */
export default function CADDesignTutorial() {
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

                            <h2><IconBox size={20} /> {s.whatYouWillLearn.title}</h2>
                            <ul>
                                {s.whatYouWillLearn.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <h2><IconPencil size={20} /> {s.whoIsFor.title}</h2>
                            <p>{s.whoIsFor.text}</p>

                            <h2><IconLayers size={20} /> {s.courseStructure.title}</h2>
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
