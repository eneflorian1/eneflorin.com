import Link from "next/link";
import { Header } from "../components/Header";
import {
    IconHome,
    IconBook,
    IconUser,
    IconSparkles,
    IconArrowLeft,
} from "../icons";

function IconNetwork({ size = 24, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="18" r="3" />
            <line x1="6" y1="9" x2="6" y2="15" />
            <line x1="18" y1="9" x2="18" y2="15" />
            <line x1="9" y1="6" x2="15" y2="6" />
            <line x1="9" y1="18" x2="15" y2="18" />
            <line x1="8" y1="8" x2="16" y2="16" />
            <line x1="8" y1="16" x2="16" y2="8" />
        </svg>
    );
}

export default function ReteaNeuronala() {
    return (
        <>
            <Header />

            <main className="page-content">
                <section className="hero">
                    <div className="container">
                        <Link href="/despre" className="article__back animate-in" id="back-to-despre">
                            <IconArrowLeft size={16} /> Înapoi
                        </Link>

                        <div className="hero__content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '2rem' }}>
                            {/* Icon */}
                            <div className="animate-in" style={{
                                width: '96px',
                                height: '96px',
                                borderRadius: '24px',
                                background: 'rgba(139, 92, 246, 0.1)',
                                color: '#8b5cf6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.15)',
                            }}>
                                <IconNetwork size={52} className="animate-pulse" />
                            </div>

                            {/* Badges */}
                            <div className="animate-in animate-delay-1" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                <span className="badge" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                                    <IconSparkles size={12} /> Live Updates
                                </span>
                                <span className="badge badge--new">În curând</span>
                            </div>

                            <h1 className="hero__title animate-in animate-delay-2">
                                Astăzi — <span className="gradient-text">Rețeaua Neuronală</span>
                            </h1>

                            <p className="hero__description animate-in animate-delay-3" style={{ maxWidth: '560px' }}>
                                În acest modul vom avea o rețea neuronală care va conecta direct toate tutorialele disponibile cu evenimentele actuale și relevante ce se întâmplă zilnic pe glob. Fii la curent cu inovația în timp real.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Fixed Bottom Nav */}
            <nav className="nav-bottom">
                <div className="nav-bottom__inner">
                    <Link href="/" className="nav-bottom__item" id="nav-home">
                        <span className="nav-bottom__icon"><IconHome size={22} /></span>
                        <span>Acasă</span>
                    </Link>
                    <Link href="/tutorials" className="nav-bottom__item" id="nav-tutorials">
                        <span className="nav-bottom__icon"><IconBook size={22} /></span>
                        <span>Tutoriale</span>
                    </Link>
                    <Link href="/despre" className="nav-bottom__item nav-bottom__item--active" id="nav-about">
                        <span className="nav-bottom__icon"><IconUser size={22} /></span>
                        <span>Despre</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}
