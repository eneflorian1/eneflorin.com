"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageWrapper } from "../../components/PageWrapper";
import { IconArrowLeft, IconBookOpen, IconClock, IconHeadphones, IconPlay, IconPause, IconSparkles } from "../../icons";
import type { Tutorial, Category } from "../../lib/getContent";

export default function TutorialReaderClient({ tutorial, category }: { tutorial: Tutorial | null; category: Category | null }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (windowHeight > 0) {
                const scroll = `${(totalScroll / windowHeight) * 100}%`;
                setScrollProgress(parseFloat(scroll));
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!tutorial) {
        return (
            <PageWrapper>
                <div className="container">
                    <h2>Tutorialul nu a fost găsit</h2>
                    <Link href="/tutorials">Înapoi la tutoriale</Link>
                </div>
            </PageWrapper>
        );
    }

    const hasAudio = tutorial.badges?.includes("audio");

    return (
        <PageWrapper>
            {/* Reading Progress */}
            <div className="reader-progress">
                <div
                    className="reader-progress-bar"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            <article className="reader-view">
                <div className="container container--narrow">
                    <header className="reader-header animate-in">
                        <Link href="/tutorials" className="back-link">
                            <IconArrowLeft size={16} /> Înapoi la tutoriale
                        </Link>

                        <div className="reader-category-badge animate-in animate-delay-1">
                            {category && (
                                <span className="badge" style={{ background: category.bgColor, color: category.color }}>
                                    {category.title}
                                </span>
                            )}
                        </div>

                        <h1 className="reader-title animate-in animate-delay-1">{tutorial.title}</h1>

                        <div className="reader-meta animate-in animate-delay-2">
                            <span><IconClock size={16} /> {tutorial.date || " Recent"}</span>
                            <span><IconBookOpen size={16} /> {tutorial.duration || "Lectură rapidă"}</span>
                        </div>
                    </header>

                    {/* Audio Player Section */}
                    {hasAudio && (
                        <div className="section animate-in animate-delay-2">
                            <div className="audio-player">
                                <div className="audio-player__controls">
                                    <button
                                        className="audio-player__play"
                                        onClick={() => setIsPlaying(!isPlaying)}
                                    >
                                        {isPlaying ? <IconPause size={24} /> : <IconPlay size={24} />}
                                    </button>
                                    <div className="audio-player__info">
                                        <div className="audio-player__title">
                                            <IconHeadphones size={14} /> Ascultă versiunea audio
                                        </div>
                                        <div className="audio-player__time">
                                            {isPlaying ? "Se redă..." : "Gata de ascultat"}
                                        </div>
                                    </div>
                                </div>
                                <div className="audio-player__progress">
                                    <div className="audio-player__progress-bar" style={{ width: isPlaying ? '30%' : '0%' }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="reader-content animate-in animate-delay-3">
                        <div
                            className="reader-text"
                            dangerouslySetInnerHTML={{ __html: tutorial.content || "Conținutul acestui tutorial este în pregătire..." }}
                        />
                    </div>

                    {/* Footer CTA */}
                    <div className="reader-footer-cta animate-in animate-delay-3">
                        <div className="pill"><IconSparkles size={12} /> Actualizat constant</div>
                    </div>
                </div>
            </article>
        </PageWrapper>
    );
}
