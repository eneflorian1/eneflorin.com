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
    IconSettings,
    IconZap,
    IconBookOpen,
} from "../../icons";

/* ---- Bilingual content ---- */
const content = {
    ro: {
        backLink: "Înapoi la tutoriale",
        dateLabel: "În curând",
        title: "Roboți Umanoizi",
        titleHighlight: "Robotică & Automatizare",
        price: "399 RON",
        buyButton: "Cumpără cursul",
        intro: "Explorează fascinanta lume a roboticii umanoide - de la mecanică și electronică până la programare AI și control motor. Învață să construiești și să programezi roboți care pot interacționa natural cu lumea din jur.",
        sections: {
            whatYouWillLearn: {
                title: "Ce vei învăța",
                items: [
                    "Fundamentele roboticii: kinematics, dynamics, control systems",
                    "Hardware: motoare servomotoare, senzori, actuatori",
                    "Programare embedded: Arduino, Raspberry Pi, ROS (Robot Operating System)",
                    "Computer Vision pentru roboți: detectare obiecte, recunoaștere facială",
                    "Sisteme de echilibru și mers biped",
                    "AI și machine learning pentru comportament inteligent",
                    "Interfețe vocale și procesare limbaj natural",
                    "Proiect practic: Construiește un robot umanoid funcțional",
                ],
            },
            whoIsFor: {
                title: "Pentru cine este acest curs",
                text: "Acest curs este pentru pasionații de robotică, ingineri, studenți și makeri care doresc să înțeleagă și să construiască roboți umanoizi. Este recomandat să ai cunoștințe de bază în programare (Python/C++) și electronică, dar nu este obligatoriu - vom acoperi și fundamentele.",
            },
            courseStructure: {
                title: "Structura cursului",
                modules: [
                    "Introducere în robotica umanoidă și istoria sa",
                    "Hardware și componente: de la servomotoare la procesoare",
                    "Programare și control: ROS, kinematics, path planning",
                    "Senzori și percepție: vision, audio, touch",
                    "AI și comportament inteligent",
                    "Proiect final: Robot umanoid complet funcțional",
                ],
            },
        },
    },
    en: {
        backLink: "Back to tutorials",
        dateLabel: "Coming Soon",
        title: "Humanoid Robots",
        titleHighlight: "Robotics & Automation",
        price: "399 RON",
        buyButton: "Buy Course",
        intro: "Explore the fascinating world of humanoid robotics - from mechanics and electronics to AI programming and motor control. Learn to build and program robots that can interact naturally with the world around them.",
        sections: {
            whatYouWillLearn: {
                title: "What You Will Learn",
                items: [
                    "Robotics fundamentals: kinematics, dynamics, control systems",
                    "Hardware: servo motors, sensors, actuators",
                    "Embedded programming: Arduino, Raspberry Pi, ROS (Robot Operating System)",
                    "Computer Vision for robots: object detection, facial recognition",
                    "Balance systems and bipedal walking",
                    "AI and machine learning for intelligent behavior",
                    "Voice interfaces and natural language processing",
                    "Practical project: Build a functional humanoid robot",
                ],
            },
            whoIsFor: {
                title: "Who This Course Is For",
                text: "This course is for robotics enthusiasts, engineers, students, and makers who want to understand and build humanoid robots. Basic knowledge of programming (Python/C++) and electronics is recommended but not required - we'll cover the fundamentals.",
            },
            courseStructure: {
                title: "Course Structure",
                modules: [
                    "Introduction to humanoid robotics and its history",
                    "Hardware and components: from servo motors to processors",
                    "Programming and control: ROS, kinematics, path planning",
                    "Sensors and perception: vision, audio, touch",
                    "AI and intelligent behavior",
                    "Final project: Fully functional humanoid robot",
                ],
            },
        },
    },
};

/* ---- Main Tutorial Page ---- */
export default function HumanoidRobotsTutorial() {
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

                            <h2><IconSettings size={20} /> {s.whoIsFor.title}</h2>
                            <p>{s.whoIsFor.text}</p>

                            <h2><IconZap size={20} /> {s.courseStructure.title}</h2>
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
