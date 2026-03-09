"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

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
                    {isPlaying ? "⏸" : "▶"}
                </button>
                <div className="audio-player__info">
                    <div className="audio-player__title">🎧 Ascultă tutorialul</div>
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

export default function BlockchainTutorial() {
    return (
        <div className="page-content">
            <article className="article">
                <div className="container">
                    {/* Back link */}
                    <Link href="/" className="article__back" id="back-to-home">
                        ← Înapoi la tutoriale
                    </Link>

                    {/* Header */}
                    <header className="article__header animate-in">
                        <div className="article__meta">
                            <span className="badge badge--new">✨ Nou</span>
                            <span className="badge badge--audio">🎧 Audio</span>
                            <span className="article__date">9 Martie 2026</span>
                        </div>
                        <h1 className="article__title">
                            🔗 Introducere în{" "}
                            <span className="gradient-text">Blockchain</span>
                        </h1>
                        <p className="article__intro">
                            Ce este blockchain-ul, cum funcționează și de ce va schimba lumea
                            digitală. Un ghid complet pentru începători.
                        </p>
                    </header>

                    {/* Audio Player */}
                    <div className="animate-in animate-delay-1" style={{ marginBottom: "2rem" }}>
                        <AudioPlayer />
                    </div>

                    {/* Article Body */}
                    <div className="article__body animate-in animate-delay-2">
                        <h2>Ce este blockchain-ul?</h2>
                        <p>
                            Blockchain-ul este o tehnologie revoluționară care a schimbat modul
                            în care gândim despre date, încredere și tranzacții digitale. La
                            bază, un blockchain este un <strong>registru digital distribuit</strong>,
                            care stochează informații în blocuri conectate între ele printr-un
                            lanț criptografic.
                        </p>
                        <div className="highlight-box">
                            <p>
                                💡 Imaginează-ți un caiet în care scrii fiecare tranzacție. Odată
                                ce o pagină este completată, o sigilezi și o legi de pagina
                                anterioară. Nimeni nu poate modifica o pagină fără să rupă
                                sigiliul. Aceasta este esența blockchain-ului.
                            </p>
                        </div>

                        <h2>Cum funcționează?</h2>
                        <p>
                            Fiecare bloc conține trei elemente cheie:
                        </p>
                        <ul>
                            <li><strong>Datele tranzacțiilor</strong> — informațiile propriu-zise stocate în bloc</li>
                            <li><strong>Un hash unic</strong> — identificatorul blocului, ca o amprentă digitală</li>
                            <li><strong>Hash-ul blocului anterior</strong> — legătura care formează lanțul</li>
                        </ul>
                        <p>
                            Când cineva dorește să adauge o tranzacție nouă, aceasta este
                            verificată de o rețea de computere numite <strong>noduri</strong>.
                            Dacă majoritatea nodurilor sunt de acord că tranzacția este validă,
                            ea este adăugată într-un bloc nou.
                        </p>

                        <h2>De ce este important?</h2>

                        <h3>🔀 Descentralizare</h3>
                        <p>
                            Nu există o autoritate centrală care controlează datele. În schimb,
                            fiecare participant din rețea deține o copie completă a registrului.
                        </p>

                        <h3>👁 Transparență</h3>
                        <p>
                            Toate tranzacțiile sunt vizibile pentru toți participanții, ceea ce
                            reduce frauda și crește încrederea.
                        </p>

                        <h3>🛡 Securitate</h3>
                        <p>
                            Datorită criptografiei și distribuției, este extrem de dificil să
                            modifici datele odată înregistrate.
                        </p>

                        <h2>Aplicații practice</h2>
                        <p>
                            <strong>Bitcoin</strong> a fost prima aplicație de succes a
                            blockchain-ului, lansată în 2009 de Satoshi Nakamoto. Dar
                            tehnologia merge mult dincolo de criptomonede.
                        </p>
                        <ul>
                            <li>
                                <strong>Contracte inteligente</strong> — popularizate de Ethereum,
                                permit executarea automată a acordurilor digitale fără intermediari
                            </li>
                            <li>
                                <strong>Lanțuri de aprovizionare</strong> — urmărirea produselor
                                de la producător la consumator
                            </li>
                            <li>
                                <strong>Sănătate</strong> — securizarea datelor medicale ale
                                pacienților
                            </li>
                            <li>
                                <strong>Vot electronic</strong> — asigurarea transparenței
                                alegerilor
                            </li>
                        </ul>

                        <h2>Concluzie</h2>
                        <p>
                            Blockchain-ul nu este doar o modă trecătoare. Este o{" "}
                            <strong>tehnologie fundamentală</strong> care redefinește încrederea
                            digitală. Înțelegerea principiilor sale de bază este esențială
                            pentru oricine dorește să fie la curent cu viitorul tehnologiei.
                        </p>

                        <div className="highlight-box">
                            <p>
                                🎓 Acesta a fost primul nostru tutorial. Te așteptăm și la
                                următoarele lecții! Următorul subiect: Smart Contracts &
                                Ethereum.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom Nav */}
            <nav className="nav-bottom">
                <div className="nav-bottom__inner">
                    <a href="/" className="nav-bottom__item" id="nav-home">
                        <span className="nav-bottom__icon">🏠</span>
                        <span>Acasă</span>
                    </a>
                    <a href="/tutorials/blockchain" className="nav-bottom__item nav-bottom__item--active" id="nav-tutorials">
                        <span className="nav-bottom__icon">📚</span>
                        <span>Tutoriale</span>
                    </a>
                    <a href="#" className="nav-bottom__item" id="nav-about">
                        <span className="nav-bottom__icon">👤</span>
                        <span>Despre</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}
