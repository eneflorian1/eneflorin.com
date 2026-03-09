"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Quiz, { QuizQuestion } from "../../components/Quiz";
import MermaidDiagram from "../../components/MermaidDiagram";
import LanguageToggle from "../../components/LanguageToggle";
import {
    IconHome,
    IconBook,
    IconUser,
    IconHeadphones,
    IconSparkles,
    IconPlay,
    IconPause,
    IconArrowLeft,
    IconShuffle,
    IconEye,
    IconShield,
    IconLightbulb,
    IconGraduation,
    IconBookOpen,
} from "../../icons";

/* ---- Bilingual content ---- */
const content = {
    ro: {
        backLink: "Înapoi la tutoriale",
        dateLabel: "9 Martie 2026",
        title: "Introducere în",
        titleHighlight: "Blockchain",
        intro: "Ce este blockchain-ul, cum funcționează și de ce va schimba lumea digitală. Un ghid complet pentru începători.",
        audioLabel: "Ascultă tutorialul",
        sections: {
            whatIs: {
                title: "Ce este blockchain-ul?",
                p1: "Blockchain-ul este o tehnologie revoluționară care a schimbat modul în care gândim despre date, încredere și tranzacții digitale. La bază, un blockchain este un registru digital distribuit, care stochează informații în blocuri conectate între ele printr-un lanț criptografic.",
                highlight: "Imaginează-ți un caiet în care scrii fiecare tranzacție. Odată ce o pagină este completată, o sigilezi și o legi de pagina anterioară. Nimeni nu poate modifica o pagină fără să rupă sigiliul. Aceasta este esența blockchain-ului.",
            },
            howWorks: {
                title: "Cum funcționează?",
                intro: "Fiecare bloc conține trei elemente cheie:",
                items: [
                    { bold: "Datele tranzacțiilor", text: "— informațiile propriu-zise stocate în bloc" },
                    { bold: "Un hash unic", text: "— identificatorul blocului, ca o amprentă digitală" },
                    { bold: "Hash-ul blocului anterior", text: "— legătura care formează lanțul" },
                ],
                p2: "Când cineva dorește să adauge o tranzacție nouă, aceasta este verificată de o rețea de computere numite noduri. Dacă majoritatea nodurilor sunt de acord că tranzacția este validă, ea este adăugată într-un bloc nou.",
            },
            whyImportant: {
                title: "De ce este important?",
                decentralization: { title: "Descentralizare", text: "Nu există o autoritate centrală care controlează datele. În schimb, fiecare participant din rețea deține o copie completă a registrului." },
                transparency: { title: "Transparență", text: "Toate tranzacțiile sunt vizibile pentru toți participanții, ceea ce reduce frauda și crește încrederea." },
                security: { title: "Securitate", text: "Datorită criptografiei și distribuției, este extrem de dificil să modifici datele odată înregistrate." },
            },
            applications: {
                title: "Aplicații practice",
                intro: "Bitcoin a fost prima aplicație de succes a blockchain-ului, lansată în 2009 de Satoshi Nakamoto. Dar tehnologia merge mult dincolo de criptomonede.",
                items: [
                    { bold: "Contracte inteligente", text: "— popularizate de Ethereum, permit executarea automată a acordurilor digitale fără intermediari" },
                    { bold: "Lanțuri de aprovizionare", text: "— urmărirea produselor de la producător la consumator" },
                    { bold: "Sănătate", text: "— securizarea datelor medicale ale pacienților" },
                    { bold: "Vot electronic", text: "— asigurarea transparenței alegerilor" },
                ],
            },
            conclusion: {
                title: "Concluzie",
                text: "Blockchain-ul nu este doar o modă trecătoare. Este o tehnologie fundamentală care redefinește încrederea digitală. Înțelegerea principiilor sale de bază este esențială pentru oricine dorește să fie la curent cu viitorul tehnologiei.",
                cta: "Acesta a fost primul nostru tutorial. Te așteptăm și la următoarele lecții! Următorul subiect: Smart Contracts & Ethereum.",
            },
        },
    },
    en: {
        backLink: "Back to tutorials",
        dateLabel: "March 9, 2026",
        title: "Introduction to",
        titleHighlight: "Blockchain",
        intro: "What is blockchain, how it works, and why it will change the digital world. A complete guide for beginners.",
        audioLabel: "Listen to the tutorial",
        sections: {
            whatIs: {
                title: "What is blockchain?",
                p1: "Blockchain is a revolutionary technology that has changed the way we think about data, trust, and digital transactions. At its core, a blockchain is a distributed digital ledger that stores information in blocks connected to each other through a cryptographic chain.",
                highlight: "Imagine a notebook where you write every transaction. Once a page is filled, you seal it and link it to the previous page. Nobody can modify a page without breaking the seal. This is the essence of blockchain.",
            },
            howWorks: {
                title: "How does it work?",
                intro: "Each block contains three key elements:",
                items: [
                    { bold: "Transaction data", text: "— the actual information stored in the block" },
                    { bold: "A unique hash", text: "— the block's identifier, like a digital fingerprint" },
                    { bold: "Previous block's hash", text: "— the link that forms the chain" },
                ],
                p2: "When someone wants to add a new transaction, it is verified by a network of computers called nodes. If the majority of nodes agree the transaction is valid, it is added to a new block.",
            },
            whyImportant: {
                title: "Why is it important?",
                decentralization: { title: "Decentralization", text: "There is no central authority controlling the data. Instead, every participant in the network holds a complete copy of the ledger." },
                transparency: { title: "Transparency", text: "All transactions are visible to all participants, which reduces fraud and increases trust." },
                security: { title: "Security", text: "Due to cryptography and distribution, it is extremely difficult to modify data once recorded." },
            },
            applications: {
                title: "Practical Applications",
                intro: "Bitcoin was the first successful blockchain application, launched in 2009 by Satoshi Nakamoto. But the technology goes far beyond cryptocurrencies.",
                items: [
                    { bold: "Smart contracts", text: "— popularized by Ethereum, they enable automatic execution of digital agreements without intermediaries" },
                    { bold: "Supply chains", text: "— tracking products from producer to consumer" },
                    { bold: "Healthcare", text: "— securing patients' medical data" },
                    { bold: "Electronic voting", text: "— ensuring election transparency" },
                ],
            },
            conclusion: {
                title: "Conclusion",
                text: "Blockchain is not just a passing trend. It is a fundamental technology that redefines digital trust. Understanding its basic principles is essential for anyone who wants to stay current with the future of technology.",
                cta: "This was our first tutorial. We look forward to seeing you at the next lessons! Next topic: Smart Contracts & Ethereum.",
            },
        },
    },
};

/* ---- Quiz questions ---- */
const quizQuestions: QuizQuestion[] = [
    {
        question: "Ce este un blockchain la bază?",
        options: [
            "O bază de date centralizată",
            "Un registru digital distribuit",
            "Un limbaj de programare",
            "O aplicație de email",
        ],
        correctIndex: 1,
        explanation: "Blockchain-ul este un registru digital distribuit care stochează informații în blocuri conectate printr-un lanț criptografic.",
    },
    {
        question: "Care sunt cele 3 elemente cheie ale unui bloc?",
        options: [
            "Titlu, descriere, imagine",
            "Username, parolă, email",
            "Date tranzacții, hash unic, hash-ul blocului anterior",
            "Adresă IP, port, protocol",
        ],
        correctIndex: 2,
        explanation: "Fiecare bloc conține datele tranzacțiilor, un hash unic (ca amprentă digitală) și hash-ul blocului anterior (legătura lanțului).",
    },
    {
        question: "Cine verifică tranzacțiile noi într-un blockchain?",
        options: [
            "O singură bancă centrală",
            "Guvernul",
            "O rețea de computere numite noduri",
            "Un singur server",
        ],
        correctIndex: 2,
        explanation: "Tranzacțiile sunt verificate de o rețea descentralizată de noduri — computere care participă la rețea.",
    },
    {
        question: "Care a fost prima aplicație de succes a blockchain-ului?",
        options: [
            "Ethereum",
            "Facebook",
            "Bitcoin",
            "Google",
        ],
        correctIndex: 2,
        explanation: "Bitcoin, lansat în 2009 de Satoshi Nakamoto, a fost prima aplicație de succes a tehnologiei blockchain.",
    },
    {
        question: "Ce sunt contractele inteligente (smart contracts)?",
        options: [
            "Contracte semnate cu pixul digital",
            "Acorduri digitale executate automat, fără intermediari",
            "Contracte de închiriere online",
            "Aplicații de chat",
        ],
        correctIndex: 1,
        explanation: "Contractele inteligente sunt acorduri digitale care se execută automat când condițiile sunt îndeplinite, fără nevoia de intermediari.",
    },
];

/* ---- Mermaid diagram ---- */
const blockchainDiagram = `flowchart LR
    A["Tranzacție Nouă"] --> B["Verificare de Noduri"]
    B --> C{"Validă?"}
    C -->|Da| D["Creare Bloc Nou"]
    C -->|Nu| E["Respinsă"]
    D --> F["Hash Generat"]
    F --> G["Adăugat la Lanț"]
    G --> H["Distribuit în Rețea"]

    style A fill:#dbeafe,stroke:#3b82f6,color:#1e40af
    style B fill:#fef3c7,stroke:#f59e0b,color:#92400e
    style C fill:#fce7f3,stroke:#ec4899,color:#9d174d
    style D fill:#d1fae5,stroke:#10b981,color:#065f46
    style E fill:#fee2e2,stroke:#ef4444,color:#991b1b
    style F fill:#ede9fe,stroke:#8b5cf6,color:#5b21b6
    style G fill:#d1fae5,stroke:#10b981,color:#065f46
    style H fill:#dbeafe,stroke:#3b82f6,color:#1e40af`;

/* ---- Audio Player ---- */
function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [duration, setDuration] = useState("0:00");

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
                setCurrentTime(formatTime(audio.currentTime));
            }
        };

        const handleLoadedMetadata = () => {
            setDuration(formatTime(audio.duration));
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (!audio) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const pct = x / rect.width;
        audio.currentTime = pct * audio.duration;
    };

    return (
        <div className="audio-player">
            <audio ref={audioRef} src="/audio/blockchain-intro.mp3" preload="metadata" />
            <div className="audio-player__controls">
                <button
                    className="audio-player__play"
                    onClick={togglePlay}
                    id="audio-play-btn"
                    aria-label={isPlaying ? "Pauză" : "Redare"}
                >
                    {isPlaying ? <IconPause size={18} /> : <IconPlay size={18} />}
                </button>
                <div className="audio-player__info">
                    <div className="audio-player__title"><IconHeadphones size={14} /> Ascultă tutorialul</div>
                    <div className="audio-player__time">
                        {currentTime} / {duration}
                    </div>
                </div>
            </div>
            <div
                className="audio-player__progress"
                onClick={handleProgressClick}
                role="progressbar"
                aria-valuenow={progress}
            >
                <div
                    className="audio-player__progress-bar"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}

/* ---- Main Tutorial Page ---- */
export default function BlockchainTutorial() {
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
                        <Link href="/" className="article__back" id="back-to-home">
                            <IconArrowLeft size={16} /> {t.backLink}
                        </Link>

                        {/* Cover Image */}
                        <div className="tutorial-cover animate-in">
                            <img
                                src="/images/blockchain-cover.png"
                                alt="Blockchain tutorial cover"
                                loading="eager"
                            />
                            <div className="tutorial-cover__overlay" />
                        </div>

                        {/* Header */}
                        <header className="article__header animate-in animate-delay-1">
                            <div className="article__meta">
                                <span className="badge badge--new"><IconSparkles size={12} /> Nou</span>
                                <span className="badge badge--audio"><IconHeadphones size={12} /> Audio</span>
                                <span className="article__date">{t.dateLabel}</span>
                                <LanguageToggle onChange={(l) => setLang(l)} />
                            </div>
                            <h1 className="article__title">
                                {t.title}{" "}
                                <span className="gradient-text">{t.titleHighlight}</span>
                            </h1>
                            <p className="article__intro">{t.intro}</p>
                        </header>

                        {/* Audio Player */}
                        <div className="animate-in animate-delay-2" style={{ marginBottom: "2rem" }}>
                            <AudioPlayer />
                        </div>

                        {/* Article Body */}
                        <div className="article__body animate-in animate-delay-3">
                            <h2>{s.whatIs.title}</h2>
                            <p>{s.whatIs.p1}</p>
                            <div className="highlight-box">
                                <p>
                                    <span className="highlight-box__icon"><IconLightbulb size={18} /></span>
                                    {s.whatIs.highlight}
                                </p>
                            </div>

                            {/* Diagram */}
                            <h2>{s.howWorks.title}</h2>
                            <p>{s.howWorks.intro}</p>
                            <ul>
                                {s.howWorks.items.map((item, i) => (
                                    <li key={i}><strong>{item.bold}</strong> {item.text}</li>
                                ))}
                            </ul>
                            <p>{s.howWorks.p2}</p>

                            <MermaidDiagram
                                chart={blockchainDiagram}
                                caption={lang === "ro" ? "Fluxul unei tranzacții în blockchain" : "Transaction flow in blockchain"}
                            />

                            <h2>{s.whyImportant.title}</h2>

                            <h3><span className="article__section-icon"><IconShuffle size={18} /></span> {s.whyImportant.decentralization.title}</h3>
                            <p>{s.whyImportant.decentralization.text}</p>

                            <h3><span className="article__section-icon"><IconEye size={18} /></span> {s.whyImportant.transparency.title}</h3>
                            <p>{s.whyImportant.transparency.text}</p>

                            <h3><span className="article__section-icon"><IconShield size={18} /></span> {s.whyImportant.security.title}</h3>
                            <p>{s.whyImportant.security.text}</p>

                            <h2>{s.applications.title}</h2>
                            <p>{s.applications.intro}</p>
                            <ul>
                                {s.applications.items.map((item, i) => (
                                    <li key={i}><strong>{item.bold}</strong> {item.text}</li>
                                ))}
                            </ul>

                            <h2>{s.conclusion.title}</h2>
                            <p>{s.conclusion.text}</p>

                            <div className="highlight-box">
                                <p>
                                    <span className="highlight-box__icon"><IconGraduation size={18} /></span>
                                    {s.conclusion.cta}
                                </p>
                            </div>
                        </div>

                        {/* Quiz Section */}
                        <div className="animate-in" style={{ marginTop: "2rem" }}>
                            <Quiz
                                title={lang === "ro" ? "Testează-ți cunoștințele" : "Test your knowledge"}
                                questions={quizQuestions}
                            />
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
