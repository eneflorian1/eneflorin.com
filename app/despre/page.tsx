import Link from "next/link";
import { Header } from "../components/Header";
import {
    IconHome,
    IconBook,
    IconUser,
    IconSparkles,
    IconArrowRight,
} from "../icons";

function IconNetwork({ size = 24, className = "" }: { size?: number, className?: string }) {
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

export default function DespreIndex() {
    return (
        <>
            <Header />

            <main className="page-content">
                {/* Hero Section */}
                <section className="hero">
                    <div className="container">
                        <div className="hero__content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div className="hero__image-wrap animate-in" style={{ marginBottom: '1.5rem', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--accent-primary)', padding: '4px', background: 'var(--bg-secondary)' }}>
                                <img src="/icon-192.png" alt="Ene Florin" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            </div>
                            <h1 className="hero__title animate-in animate-delay-1" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                                Ene <span className="gradient-text">Florin</span>
                            </h1>
                            <p className="hero__description animate-in animate-delay-2" style={{ maxWidth: '500px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Astăzi Neural Network Section */}
                <section className="section animate-in animate-delay-3">
                    <div className="container">
                        <Link href="/retea-neuronala" className="card" style={{
                            display: 'block',
                            textDecoration: 'none',
                            color: 'inherit',
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.08)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Decorative Background Blob */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                                borderRadius: '50%',
                                zIndex: 0
                            }}></div>

                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    color: '#8b5cf6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '0.5rem'
                                }}>
                                    <IconNetwork size={32} className="animate-pulse" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Astăzi — Rețeaua Neuronală</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    În acest modul vom avea o rețea neuronală care va conecta direct toate tutorialele disponibile cu evenimentele actuale și relevante ce se întâmplă zilnic pe glob. Fii la curent cu inovația în timp real.
                                </p>
                                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <span className="badge" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                                        <IconSparkles size={12} /> Live Updates
                                    </span>
                                    <span className="badge badge--new">
                                        În curând
                                    </span>
                                    <span style={{ color: '#8b5cf6', marginLeft: '0.25rem', display: 'flex', alignItems: 'center' }}><IconArrowRight size={14} /></span>
                                </div>
                            </div>
                        </Link>
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
