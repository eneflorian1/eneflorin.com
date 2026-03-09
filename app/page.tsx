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
        {/* ===== HERO VIDEO ===== */}
        <section className="hero-video">
          <video
            className="hero-video__bg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-video__overlay"></div>
          <div className="hero-video__content animate-in">
            <h1 className="hero-video__title">Viitorul e Aici</h1>
            <p className="hero-video__subtitle">
              Descoperă pachetul complet pentru roboți umanoizi și învață cum să construiești inteligență artificială aplicată.
            </p>
            <Link href="/tutorials/roboti-umanoizi" className="hero-video__btn">
              <span>Pachetul Roboți Umanoizi</span>
              <IconArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* ===== SERVICE CARDS ONLY ===== */}
        <section className="services-home">
          <div className="container">
            <div className="services-grid">
              {/* Card 1: Agents */}
              <div className="service-card-wrapper animate-in animate-delay-1">
                <Link href="/agents" className="spotlight-card" id="spotlight-agents">
                  <div className="spotlight-card__image">
                    <div style={{ background: 'linear-gradient(45deg, #06b6d4, #3b82f6)', height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                      <IconCpu size={64} />
                    </div>
                    <div className="spotlight-card__overlay">
                      <span className="badge badge--new"><IconSparkles size={12} /> Exclusiv</span>
                    </div>
                  </div>
                  <div className="spotlight-card__body">
                    <h3 className="spotlight-card__title">
                      <span className="spotlight-card__icon-wrap">
                        <IconRobot size={20} />
                      </span>
                      Agenți Autonomi AI
                    </h3>
                    <p className="spotlight-card__description">
                      Agenți inteligenți care lucrează pentru tine 24/7. Automatizare, interacțiune și eficiență maximă pentru afacerea ta.
                    </p>
                  </div>
                </Link>
                <div className="service-pricing">
                  <div className="price-main">$499 <span className="price-unit">/ pachet</span></div>
                  <div className="price-crypto">~ 0.007 BTC</div>
                </div>
              </div>

              {/* Card 2: UGC */}
              <div className="service-card-wrapper animate-in animate-delay-2">
                <Link href="/ugc" className="spotlight-card" id="spotlight-ugc">
                  <div className="spotlight-card__image">
                    <div style={{ background: 'linear-gradient(45deg, #ec4899, #8b5cf6)', height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                      <IconUser size={64} />
                    </div>
                  </div>
                  <div className="spotlight-card__body">
                    <h3 className="spotlight-card__title">
                      <span className="spotlight-card__icon-wrap">
                        <IconGlobe size={20} />
                      </span>
                      User Generated Content
                    </h3>
                    <p className="spotlight-card__description">
                      Strategii și conținut UGC pentru a crește încrederea și vizibilitatea brandului tău pe platformele de social media.
                    </p>
                  </div>
                </Link>
                <div className="service-pricing">
                  <div className="price-main">$299 <span className="price-unit">/ campanie</span></div>
                  <div className="price-crypto">~ 0.004 BTC</div>
                </div>
              </div>
            </div>
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
      </main>

      {/* Fixed Bottom Nav */}
      <nav className="nav-bottom">
        <div className="nav-bottom__inner">
          <Link href="/" className="nav-bottom__item nav-bottom__item--active" id="nav-home">
            <span className="nav-bottom__icon"><IconHome size={22} /></span>
            <span>Acasă</span>
          </Link>
          <Link href="/tutorials" className="nav-bottom__item" id="nav-tutorials">
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
