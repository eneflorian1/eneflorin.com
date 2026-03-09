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
} from "./icons";

const tutorials = [
  {
    slug: "blockchain",
    title: "Introducere în Blockchain",
    description:
      "Ce este blockchain-ul, cum funcționează și de ce contează. Un ghid complet pentru începători.",
    date: "9 Mar 2026",
    duration: "8 min lectură · 3 min audio",
    badges: ["text", "audio", "new"],
    icon: "link" as const,
  },
];

const upcomingTopics = [
  { title: "Smart Contracts & Ethereum", icon: "scroll" as const },
  { title: "Inteligență Artificială — De la zero", icon: "cpu" as const },
  { title: "Web3 & Aplicații Descentralizate", icon: "globe" as const },
];

const iconMap = {
  link: IconLink,
  scroll: IconScroll,
  cpu: IconCpu,
  globe: IconGlobe,
};

const badgeIconMap = {
  audio: { icon: IconHeadphones, label: "Audio" },
  text: { icon: IconDocument, label: "Text" },
  new: { icon: IconSparkles, label: "Nou" },
};

export default function Home() {
  return (
    <>
      {/* Fixed Header — OUTSIDE page-content so position:fixed works on mobile */}
      <Header />

      {/* Scrollable page content */}
      <main className="page-content">
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero__content">
              <div className="hero__pill animate-in">
                <span className="pill"><IconBookOpen size={14} /> Tutoriale Tech</span>
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
              {tutorials.map((t, i) => {
                const TutorialIcon = iconMap[t.icon];
                return (
                  <Link
                    key={t.slug}
                    href={`/tutorials/${t.slug}`}
                    className={`card tutorial-card animate-in animate-delay-${i + 3}`}
                    id={`tutorial-${t.slug}`}
                  >
                    <div className="tutorial-card__meta">
                      {t.badges.map((b) => {
                        const badgeInfo = badgeIconMap[b as keyof typeof badgeIconMap];
                        const BadgeIcon = badgeInfo.icon;
                        return (
                          <span key={b} className={`badge badge--${b}`}>
                            <BadgeIcon size={12} /> {badgeInfo.label}
                          </span>
                        );
                      })}
                    </div>
                    <div>
                      <h3 className="tutorial-card__title">
                        <span className="tutorial-card__icon-wrap">
                          <TutorialIcon size={20} />
                        </span>
                        {t.title}
                      </h3>
                      <p className="tutorial-card__description">{t.description}</p>
                    </div>
                    <div className="tutorial-card__footer">
                      <span className="tutorial-card__duration">
                        <IconClock size={14} /> {t.duration}
                      </span>
                      <span className="tutorial-card__arrow">
                        <IconArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                );
              })}
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
              {upcomingTopics.map((topic, i) => {
                const TopicIcon = iconMap[topic.icon];
                return (
                  <div
                    key={topic.title}
                    className={`card animate-in animate-delay-${i + 1}`}
                    style={{ opacity: 0.6, cursor: "default" }}
                  >
                    <div className="tutorial-card">
                      <div className="tutorial-card__meta">
                        <span className="badge badge--text"><IconCalendar size={12} /> În curând</span>
                      </div>
                      <h3 className="tutorial-card__title">
                        <span className="tutorial-card__icon-wrap">
                          <TopicIcon size={20} />
                        </span>
                        {topic.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Bottom Nav — OUTSIDE page-content so position:fixed works on mobile */}
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
