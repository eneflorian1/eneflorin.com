"use client";

import Link from "next/link";

const tutorials = [
  {
    slug: "blockchain",
    title: "Introducere în Blockchain",
    description:
      "Ce este blockchain-ul, cum funcționează și de ce contează. Un ghid complet pentru începători.",
    date: "9 Mar 2026",
    duration: "8 min lectură · 3 min audio",
    badges: ["text", "audio", "new"],
    icon: "🔗",
  },
];

const upcomingTopics = [
  { title: "Smart Contracts & Ethereum", icon: "📜" },
  { title: "Inteligență Artificială — De la zero", icon: "🤖" },
  { title: "Web3 & Aplicații Descentralizate", icon: "🌐" },
];

export default function Home() {
  return (
    <div className="page-content">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__pill animate-in">
              <span className="pill">📚 Tutoriale Tech</span>
            </div>
            <h1 className="hero__title animate-in animate-delay-1">
              Învață <span className="gradient-text">tehnologie</span> pas cu
              pas
            </h1>
            <p className="hero__description animate-in animate-delay-2">
              Tutoriale clare în română, cu text și audio. Blockchain, AI și
              multe altele — pe înțelesul tuturor.
            </p>
          </div>
        </div>
      </section>

      {/* Tutorial List */}
      <section className="section">
        <div className="container">
          <div className="section__header animate-in animate-delay-2">
            <h2>Tutoriale</h2>
            <p className="section__subtitle">Începe să înveți acum</p>
          </div>
          <div className="tutorial-list">
            {tutorials.map((t, i) => (
              <Link
                key={t.slug}
                href={`/tutorials/${t.slug}`}
                className={`card tutorial-card animate-in animate-delay-${i + 3}`}
                id={`tutorial-${t.slug}`}
              >
                <div className="tutorial-card__meta">
                  {t.badges.map((b) => (
                    <span key={b} className={`badge badge--${b}`}>
                      {b === "audio" ? "🎧 Audio" : b === "text" ? "📝 Text" : "✨ Nou"}
                    </span>
                  ))}
                </div>
                <div>
                  <h3 className="tutorial-card__title">
                    {t.icon} {t.title}
                  </h3>
                  <p className="tutorial-card__description">{t.description}</p>
                </div>
                <div className="tutorial-card__footer">
                  <span className="tutorial-card__duration">
                    ⏱ {t.duration}
                  </span>
                  <span className="tutorial-card__arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section">
        <div className="container">
          <div className="section__header animate-in">
            <h2>În curând</h2>
            <p className="section__subtitle">
              Tutoriale la care lucrez acum
            </p>
          </div>
          <div className="tutorial-list">
            {upcomingTopics.map((topic, i) => (
              <div
                key={topic.title}
                className={`card animate-in animate-delay-${i + 1}`}
                style={{ opacity: 0.6, cursor: "default" }}
              >
                <div className="tutorial-card">
                  <div className="tutorial-card__meta">
                    <span className="badge badge--text">📅 În curând</span>
                  </div>
                  <h3 className="tutorial-card__title">
                    {topic.icon} {topic.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <nav className="nav-bottom">
        <div className="nav-bottom__inner">
          <a href="/" className="nav-bottom__item nav-bottom__item--active" id="nav-home">
            <span className="nav-bottom__icon">🏠</span>
            <span>Acasă</span>
          </a>
          <a href="/tutorials/blockchain" className="nav-bottom__item" id="nav-tutorials">
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
