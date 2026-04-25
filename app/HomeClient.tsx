"use client";

import Link from "next/link";
import { PageWrapper } from "./components/PageWrapper";
import {
  IconBook,
  IconUser,
  IconSparkles,
  IconLink,
  IconCpu,
  IconGlobe,
  IconArrowRight,
  IconBookOpen,
  IconUGC,
  IconChart,
  IconRobot,
  IconRuler
} from "./icons";
import type { Book } from "./lib/getContent";

const categories = [
  { id: "ugc", title: "UGC", icon: IconUGC, color: "#ec4899", bgColor: "rgba(236,72,153,0.08)" },
  { id: "web4", title: "Web 4.0", icon: IconLink, color: "#2563eb", bgColor: "rgba(37,99,235,0.08)" },
  { id: "ai-agents", title: "Agenți AI", icon: IconCpu, color: "#06b6d4", bgColor: "rgba(6,182,212,0.08)" },
  { id: "trading", title: "Trading", icon: IconChart, color: "#10b981", bgColor: "rgba(16,185,129,0.08)" },
  { id: "robots", title: "Roboți", icon: IconRobot, color: "#f59e0b", bgColor: "rgba(245,158,11,0.08)" },
  { id: "cad", title: "CAD", icon: IconRuler, color: "#8b5cf6", bgColor: "rgba(139,92,246,0.08)" },
];

export default function HomeClient({ recentBooks, totalBooks, totalTutorials }: { recentBooks: Book[]; totalBooks: number; totalTutorials: number }) {
  const stats = [
    { value: `${totalTutorials}+`, label: "Tutoriale", icon: IconBookOpen },
    { value: `${totalBooks}+`, label: "Cărți AI", icon: IconBook },
    { value: `${categories.length}`, label: "Categorii", icon: IconGlobe },
  ];

  return (
    <PageWrapper>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-video" style={{ background: 'var(--gradient-hero)' }}>
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

      {/* ===== STATS BAR ===== */}
      <section className="stats-section animate-in">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div key={i} className="stats-card">
                  <div className="stats-card__icon"><StatIcon size={24} /></div>
                  <div className="stats-card__info">
                    <div className="stats-card__value">{stat.value}</div>
                    <div className="stats-card__label">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RECENT BOOKS SECTION ===== */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section__header animate-in">
            <h2>Cărți Recente</h2>
            <p className="section__subtitle">Cele mai noi publicații generate de AI</p>
          </div>
          <div className="books-preview-grid">
            {recentBooks.map((book, i) => (
              <Link
                href={`/books/${book.slug}`}
                key={book.slug}
                className="book-preview-card animate-in"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="book-preview-card__icon">
                  <IconBook size={32} />
                </div>
                <div className="book-preview-card__content">
                  <h3 className="book-preview-card__title">{book.title}</h3>
                  <p className="book-preview-card__description">{book.description}</p>
                  <div className="book-preview-card__footer">
                    <span className="author">{book.author}</span>
                    <span className="date">{book.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="section__footer animate-in">
            <Link href="/books" className="link-arrow">
              Vezi toată biblioteca <IconArrowRight size={14} />
            </Link>
          </div>
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

            {/* Card 3: Books */}
            <div className="service-card-wrapper animate-in animate-delay-3">
              <Link href="/books" className="spotlight-card" id="spotlight-books">
                <div className="spotlight-card__image">
                  <div style={{ background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <IconBook size={64} />
                  </div>
                  <div className="spotlight-card__overlay">
                    <span className="badge badge--new"><IconSparkles size={12} /> Nou</span>
                  </div>
                </div>
                <div className="spotlight-card__body">
                  <h3 className="spotlight-card__title">
                    <span className="spotlight-card__icon-wrap">
                      <IconBookOpen size={20} />
                    </span>
                    Cărți Generate de AI
                  </h3>
                  <p className="spotlight-card__description">
                    Cunoaștere instantanee generată de agenți autonomi. Cărți de specialitate pe teme de tehnologie și viitor.
                  </p>
                </div>
              </Link>
              <div className="service-pricing">
                <div className="price-main">Gratuit <span className="price-unit">/ lectură</span></div>
                <div className="price-crypto">Open Source</div>
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
    </PageWrapper>
  );
}
