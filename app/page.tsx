"use client";

import Link from "next/link";
import { Header } from "./components/Header";
import {
  IconHome,
  IconBook,
  IconUser,
  IconHeadphones,
  IconDocument,
  IconSparkles,
  IconCalendar,
  IconLink,
  IconScroll,
  IconCpu,
  IconGlobe,
  IconClock,
  IconArrowRight,
  IconBookOpen,
  IconSearch,
} from "./icons";

/* ---- Inline category icons (same as tutorials page) ---- */
function IconUGC({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 10l4.553-2.276A1 1 0 0021 6.882V17.118a1 1 0 01-1.447.894L15 16v-6z" />
      <rect x="3" y="6" width="12" height="12" rx="2" ry="2" />
    </svg>
  );
}

function IconChart({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function IconRobot({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="8" width="14" height="12" rx="2" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <line x1="12" y1="5" x2="12" y2="8" />
      <circle cx="12" cy="4" r="1" />
      <line x1="3" y1="13" x2="5" y2="13" />
      <line x1="19" y1="13" x2="21" y2="13" />
    </svg>
  );
}

function IconRuler({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

const categories = [
  { id: "ugc", title: "UGC", icon: IconUGC, color: "#ec4899", bgColor: "rgba(236,72,153,0.08)" },
  { id: "web4", title: "Web 4.0", icon: IconLink, color: "#2563eb", bgColor: "rgba(37,99,235,0.08)" },
  { id: "ai-agents", title: "Agenți AI", icon: IconCpu, color: "#06b6d4", bgColor: "rgba(6,182,212,0.08)" },
  { id: "trading", title: "Trading", icon: IconChart, color: "#10b981", bgColor: "rgba(16,185,129,0.08)" },
  { id: "robots", title: "Roboți", icon: IconRobot, color: "#f59e0b", bgColor: "rgba(245,158,11,0.08)" },
  { id: "cad", title: "CAD", icon: IconRuler, color: "#8b5cf6", bgColor: "rgba(139,92,246,0.08)" },
];

const stats = [
  { value: "1+", label: "Tutoriale", icon: IconBookOpen },
  { value: "6", label: "Categorii", icon: IconBook },
  { value: "11+", label: "Min conținut", icon: IconClock },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="page-content">
        {/* ===== HERO ===== */}
        <section className="hero hero--home">
          <div className="container">
            <div className="hero__content">
              <div className="hero__pill animate-in">
                <span className="pill"><IconSparkles size={14} /> Platforma ta de învățare</span>
              </div>
              <h1 className="hero__title animate-in animate-delay-1">
                Învață{" "}
                <span className="gradient-text">tehnologie</span>
                <br />pas cu pas
              </h1>
              <p className="hero__description animate-in animate-delay-2">
                Tutoriale clare în română, cu text și audio.
                Blockchain, AI și multe altele — pe înțelesul tuturor.
              </p>
              <div className="hero__actions animate-in animate-delay-3">
                <Link href="/tutorials" className="btn btn--primary" id="cta-explore">
                  <IconBook size={18} />
                  Explorează Tutorialele
                </Link>
                <Link href="/tutorials/blockchain" className="btn btn--secondary" id="cta-latest">
                  <IconArrowRight size={18} />
                  Cel Mai Nou
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="stats-section animate-in animate-delay-3">
          <div className="container">
            <div className="stats-grid">
              {stats.map((s, i) => {
                const StatIcon = s.icon;
                return (
                  <div key={s.label} className="stats-card" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                    <div className="stats-card__icon">
                      <StatIcon size={20} />
                    </div>
                    <div className="stats-card__info">
                      <span className="stats-card__value">{s.value}</span>
                      <span className="stats-card__label">{s.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SPOTLIGHT: Featured Tutorial ===== */}
        <section className="section">
          <div className="container">
            <div className="section__header animate-in">
              <h2>Tutorial Recomandat</h2>
              <p className="section__subtitle">Începe să înveți acum</p>
            </div>
            <Link href="/tutorials/blockchain" className="spotlight-card animate-in animate-delay-1" id="spotlight-blockchain">
              <div className="spotlight-card__image">
                <img src="/images/blockchain-cover.png" alt="Introducere în Blockchain" />
                <div className="spotlight-card__overlay">
                  <span className="badge badge--new"><IconSparkles size={12} /> Nou</span>
                </div>
              </div>
              <div className="spotlight-card__body">
                <div className="spotlight-card__badges">
                  <span className="badge badge--text"><IconDocument size={12} /> Text</span>
                  <span className="badge badge--audio"><IconHeadphones size={12} /> Audio</span>
                </div>
                <h3 className="spotlight-card__title">
                  <span className="spotlight-card__icon-wrap">
                    <IconLink size={20} />
                  </span>
                  Introducere în Blockchain
                </h3>
                <p className="spotlight-card__description">
                  Ce este blockchain-ul, cum funcționează și de ce contează. Un ghid complet pentru începători.
                </p>
                <div className="spotlight-card__footer">
                  <span className="spotlight-card__duration">
                    <IconClock size={14} /> 8 min lectură · 3 min audio
                  </span>
                  <span className="spotlight-card__cta">
                    Citește acum <IconArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ===== CATEGORIES PREVIEW ===== */}
        <section className="section">
          <div className="container">
            <div className="section__header animate-in">
              <h2>Categorii</h2>
              <p className="section__subtitle">Explorează domeniile disponibile</p>
            </div>
            <div className="categories-preview-grid">
              {categories.map((cat, i) => {
                const CatIcon = cat.icon;
                return (
                  <Link
                    href="/tutorials"
                    key={cat.id}
                    className="cat-preview-card animate-in"
                    style={{ animationDelay: `${0.06 * (i + 1)}s` }}
                    id={`cat-${cat.id}`}
                  >
                    <div
                      className="cat-preview-card__icon"
                      style={{ background: cat.bgColor, color: cat.color }}
                    >
                      <CatIcon size={22} />
                    </div>
                    <span className="cat-preview-card__title">{cat.title}</span>
                  </Link>
                );
              })}
            </div>
            <div className="section__footer animate-in">
              <Link href="/tutorials" className="link-arrow" id="see-all-categories">
                Vezi toate categoriile <IconArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== ABOUT / CTA SECTION ===== */}
        <section className="about-section animate-in">
          <div className="container">
            <div className="about-card">
              <div className="about-card__icon">
                <IconUser size={28} />
              </div>
              <h3 className="about-card__title">Despre Ene Florin</h3>
              <p className="about-card__text">
                Pasionat de tehnologie, blockchain și inteligență artificială.
                Creez tutoriale în limba română pentru a face tehnologia accesibilă tuturor.
              </p>
              <div className="about-card__actions">
                <Link href="/tutorials" className="btn btn--primary btn--sm">
                  <IconBook size={16} /> Începe să Înveți
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Bottom Nav */}
      <nav className="nav-bottom">
        <div className="nav-bottom__inner">
          <a href="/" className="nav-bottom__item nav-bottom__item--active" id="nav-home">
            <span className="nav-bottom__icon"><IconHome size={22} /></span>
            <span>Acasă</span>
          </a>
          <a href="/tutorials" className="nav-bottom__item" id="nav-tutorials">
            <span className="nav-bottom__icon"><IconBook size={22} /></span>
            <span>Tutoriale</span>
          </a>
          <a href="#" className="nav-bottom__item" id="nav-about">
            <span className="nav-bottom__icon"><IconUser size={22} /></span>
            <span>Despre</span>
          </a>
        </div>
      </nav>
    </>
  );
}
