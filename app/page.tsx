const stats = [
  { label: 'Taskuri active', value: '12' },
  { label: 'Taskuri finalizate', value: '38' },
  { label: 'Proiecte live', value: '5' },
  { label: 'Articole publicate', value: '14' },
];

const tasks = [
  {
    title: 'Landing page pentru clientul Nordica',
    status: 'In progress',
    due: '12 Oct',
    tags: ['UI', 'Branding'],
  },
  {
    title: 'Audit accesibilitate pentru portofoliu',
    status: 'Review',
    due: '15 Oct',
    tags: ['UX', 'Accessibility'],
  },
  {
    title: 'Wireframe admin pentru taskuri personale',
    status: 'Ready',
    due: '18 Oct',
    tags: ['Admin', 'Productivity'],
  },
];

const posts = [
  {
    title: 'Cum organizez sprinturile personale',
    description: 'Structura săptămânală, ritualuri și tool-uri care mă țin pe drumul cel bun.',
    date: '6 Oct 2024',
  },
  {
    title: 'Checklist pentru lansarea unui produs',
    description: 'De la copy și UX până la tracking și analytics, pas cu pas.',
    date: '28 Sep 2024',
  },
  {
    title: 'Design tokens pentru proiecte scalabile',
    description: 'De ce păstrez culorile și spațierile în sistem, nu în fișiere disparate.',
    date: '19 Sep 2024',
  },
];

const projects = [
  {
    title: 'Solaria Dashboard',
    role: 'Product design + Front-end',
    summary: 'Interfață pentru monitorizarea energiei verzi, cu rapoarte live și alerting.',
  },
  {
    title: 'Atlas CRM',
    role: 'UX strategy',
    summary: 'Refactor complet al pipeline-ului de vânzări, cu onboarding și status logic.',
  },
  {
    title: 'Pulse Studio',
    role: 'Brand + Web',
    summary: 'Identitate vizuală și website pentru un studio de arhitectură contemporan.',
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="pill">Admin personal • Blog • Portofoliu</p>
          <h1>Salut! Aici îmi gestionez taskurile și îmi public proiectele.</h1>
          <p className="subtitle">
            Un hub unic pentru planificare, scris și prezentarea muncii mele. Totul este construit să fie
            clar, responsive și ușor de navigat.
          </p>
          <div className="heroActions">
            <button className="primary">Adaugă task</button>
            <button className="secondary">Scrie articol</button>
          </div>
        </div>
        <div className="heroCard">
          <h2>Focus astăzi</h2>
          <p>Finalizează wireframe-ul pentru dashboardul de taskuri și pregătește brief-ul pentru blog.</p>
          <div className="progress">
            <span />
          </div>
          <div className="progressMeta">
            <span>4/7 taskuri</span>
            <span>58%</span>
          </div>
        </div>
      </header>

      <section className="stats">
        {stats.map((item) => (
          <div className="statCard" key={item.label}>
            <p>{item.label}</p>
            <h3>{item.value}</h3>
          </div>
        ))}
      </section>

      <section className="grid">
        <div className="panel">
          <div className="panelHeader">
            <h2>Taskuri prioritare</h2>
            <button className="ghost">Vezi tot</button>
          </div>
          <div className="taskList">
            {tasks.map((task) => (
              <article className="task" key={task.title}>
                <div>
                  <h3>{task.title}</h3>
                  <p>
                    <span className="status">{task.status}</span>
                    <span className="due">Termen: {task.due}</span>
                  </p>
                </div>
                <div className="tags">
                  {task.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panelHeader">
            <h2>Agenda săptămânii</h2>
            <button className="ghost">Planifică</button>
          </div>
          <div className="timeline">
            {[
              'Luni · Review obiective și prioritizare',
              'Marți · Sprint design + prototip',
              'Joi · Scris pentru blog',
              'Vineri · Demo & retrospective',
            ].map((item) => (
              <div key={item} className="timelineItem">
                <span className="dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="panel">
          <div className="panelHeader">
            <h2>Blog</h2>
            <button className="ghost">Arhivă</button>
          </div>
          <div className="cardList">
            {posts.map((post) => (
              <article key={post.title} className="card">
                <p className="meta">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panelHeader">
            <h2>Portofoliu</h2>
            <button className="ghost">Toate proiectele</button>
          </div>
          <div className="cardList">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <p className="meta">{project.role}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(body) {
          background: #f6f4f1;
          color: #1d1b19;
        }

        .page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          align-items: center;
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: 0 18px 45px rgba(15, 15, 15, 0.08);
        }

        .pill {
          display: inline-flex;
          align-items: center;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          background: #f1e7ff;
          color: #6b3cf0;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        h1 {
          font-size: clamp(2rem, 2.6vw, 2.75rem);
          margin-bottom: 1rem;
          line-height: 1.15;
        }

        .subtitle {
          font-size: 1rem;
          color: #514a45;
          margin-bottom: 1.5rem;
          max-width: 520px;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        button {
          border: none;
          border-radius: 999px;
          padding: 0.7rem 1.4rem;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.95rem;
        }

        .primary {
          background: #1d1b19;
          color: #fff;
        }

        .secondary {
          background: #f1e7ff;
          color: #5b32c7;
        }

        .ghost {
          background: #f4f0ed;
          color: #5d544e;
          font-size: 0.85rem;
        }

        .heroCard {
          background: linear-gradient(135deg, #f1e7ff 0%, #fff2d6 100%);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .heroCard h2 {
          margin: 0;
          font-size: 1.3rem;
        }

        .progress {
          width: 100%;
          height: 10px;
          background: rgba(29, 27, 25, 0.1);
          border-radius: 999px;
          overflow: hidden;
        }

        .progress span {
          display: block;
          width: 58%;
          height: 100%;
          background: #1d1b19;
        }

        .progressMeta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #4b443f;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
        }

        .statCard {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid #eee4da;
        }

        .statCard p {
          margin: 0 0 0.5rem;
          color: #7a6f67;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .statCard h3 {
          margin: 0;
          font-size: 1.6rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .panel {
          background: #ffffff;
          padding: 1.8rem;
          border-radius: 18px;
          border: 1px solid #efe3d7;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .panelHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .panelHeader h2 {
          margin: 0;
          font-size: 1.25rem;
        }

        .taskList {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .task {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #f0e6db;
        }

        .task:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .task h3 {
          margin: 0 0 0.4rem;
          font-size: 1rem;
        }

        .status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          background: #f4f0ed;
          font-size: 0.75rem;
          font-weight: 600;
          margin-right: 0.5rem;
        }

        .due {
          color: #7a6f67;
          font-size: 0.8rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-self: center;
        }

        .tags span {
          background: #f1e7ff;
          color: #5b32c7;
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          font-weight: 600;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .timelineItem {
          display: flex;
          gap: 0.8rem;
          align-items: flex-start;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #1d1b19;
          border-radius: 50%;
          margin-top: 0.35rem;
        }

        .cardList {
          display: grid;
          gap: 1rem;
        }

        .card {
          background: #faf7f4;
          padding: 1rem;
          border-radius: 14px;
          border: 1px solid #efe3d7;
        }

        .card h3 {
          margin: 0.4rem 0 0.5rem;
          font-size: 1rem;
        }

        .card p {
          margin: 0;
          color: #675f59;
          font-size: 0.9rem;
        }

        .meta {
          font-size: 0.75rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #a081ff;
          font-weight: 700;
        }

        @media (max-width: 720px) {
          .hero {
            padding: 2rem;
          }

          .task {
            flex-direction: column;
            align-items: flex-start;
          }

          .tags {
            align-self: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
