"use client";

import { useEffect, useState } from 'react';

const stats = [
  { label: 'Taskuri active', value: '14' },
  { label: 'Taskuri finalizate', value: '27' },
  { label: 'Proiecte live', value: '3' },
  { label: 'Aplicații în lucru', value: '2' },
];

const tasks = [
  {
    title: 'LLM imobiliare pentru de-vanzare.ro',
    status: 'În lucru',
    due: '25 Mar',
    tags: ['AI', 'Imobiliare'],
  },
  {
    title: 'API voice pentru dictare anunțuri',
    status: 'De pornit',
    due: '27 Mar',
    tags: ['API', 'Voice'],
  },
  {
    title: 'UI/UX mobile: elimină textul inutil și evidențiază esențialul',
    status: 'De pornit',
    due: '28 Mar',
    tags: ['UI/UX', 'Mobile'],
  },
];

const posts = [
  {
    title: 'Plan de lucru pentru de-vanzare.ro',
    description: 'Structurarea taskurilor mari în livrabile clare pentru web, mobil și automatizări.',
    date: '12 Mar 2025',
  },
  {
    title: 'Hardening backend: priorități',
    description: 'MultiversX login, resetare parolă sigură și control acces pentru /api/transcribe.',
    date: '10 Mar 2025',
  },
  {
    title: 'Automatizări TikTok & notificări',
    description: 'Scheduler cloud, scraping zilnic și sistem complex de notificări push/mobile.',
    date: '7 Mar 2025',
  },
];

const projects = [
  {
    title: 'de-vanzare.ro',
    role: 'Platformă web marketplace',
    summary: 'Publicare anunțuri, promovări plătite din balanță și management utilizatori.',
  },
  {
    title: 'Aplicație mobilă de-vanzare.ro',
    role: 'iOS + Android',
    summary: 'Notificări push, mesagerie și upload rapid de anunțuri din mobil.',
  },
  {
    title: 'Automatizări TikTok',
    role: 'Scheduler & conținut',
    summary: 'Pornire automată, setări autonome și publicare zilnică din cloud.',
  },
];

const quickLinks = [
  { label: 'Adaugă task', sub: 'Task nou', tone: 'primary' },
  { label: 'Scrie articol', sub: 'Draft rapid', tone: 'secondary' },
  { label: 'Proiect nou', sub: 'Brief client', tone: 'ghost' },
];

const weeklyFocus = [
  'Definește scope-ul LLM imobiliare',
  'Rezolvă linkurile de categorii OLX',
  'Prototip pentru API voice și flux dictare',
  'Planifică modul de notificări push/mobile',
];

const roadmapItems = [
  'Umplut site cu date reale și conținut complet',
  'Rezolvare UI-backend (aliniere UX, performanță, erori)',
  'Pornit auto TikTok pentru promovare',
  'Setări autonome TikTok scheduler (cloud scrape 1x/zi)',
  'Manage utilizatori, roluri și permisiuni',
  'Dark mode + avataruri AI',
  'Blockchain pentru promovare și balanță',
  'Aplicație Android',
];

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState('');
  const [isLoadingTodos, setIsLoadingTodos] = useState(false);

  const loadTodos = async () => {
    setIsLoadingTodos(true);
    try {
      const response = await fetch('/api/todos');
      if (!response.ok) return;
      const data = (await response.json()) as { todos: Todo[] };
      setTodos(data.todos);
    } finally {
      setIsLoadingTodos(false);
    }
  };

  useEffect(() => {
    void loadTodos();
  }, []);

  const handleAddTodo = async () => {
    const trimmed = todoInput.trim();
    if (!trimmed) return;
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: trimmed }),
    });
    if (!response.ok) return;
    const data = (await response.json()) as { todo: Todo };
    setTodos((current) => [data.todo, ...current]);
    setTodoInput('');
  };

  const handleToggleTodo = async (id: string) => {
    const response = await fetch('/api/todos', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) return;
    const data = (await response.json()) as { todo: Todo };
    setTodos((current) => current.map((todo) => (todo.id === id ? data.todo : todo)));
  };

  const handleDeleteTodo = async (id: string) => {
    const response = await fetch('/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) return;
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  return (
    <main className="page">
      <header className="hero">
        <div className="heroContent">
          <div>
            <p className="pill">de-vanzare.ro • priorități mobile</p>
            <h1>Priorități reale pentru produs și echipă.</h1>
            <p className="subtitle">
              UI/UX pe mobil, LLM imobiliare și API voice. Totul pus în prim plan.
            </p>
          </div>
          <div className="heroActions">
            {quickLinks.map((link) => (
              <button key={link.label} className={link.tone}>
                <span>{link.label}</span>
                <small>{link.sub}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="heroCard">
          <div>
            <h2>Focus astăzi</h2>
            <p>Optimizează UI/UX mobile și accelerează LLM imobiliare.</p>
          </div>
          <div className="progress">
            <span />
          </div>
          <div className="progressMeta">
            <span>5/12 taskuri</span>
            <span>42%</span>
          </div>
          <div className="heroMeta">
            <div>
              <p>Deadline</p>
              <strong>29 Mar</strong>
            </div>
            <div>
              <p>Focus</p>
              <strong>UI/UX mobile</strong>
            </div>
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

      <section className="content">
        <div className="main">
          <div className="panel">
            <div className="panelHeader">
              <div>
                <h2>Taskuri prioritare</h2>
                <p>Top 3 pentru săptămâna curentă</p>
              </div>
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
              <div>
                <h2>Blog</h2>
                <p>Note interne și update-uri</p>
              </div>
              <button className="ghost">Arhivă</button>
            </div>
            <div className="cardList">
              {posts.map((post) => (
                <article key={post.title} className="card">
                  <div className="cardHeader">
                    <p className="meta">{post.date}</p>
                    <span className="badge">Blog</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panelHeader">
              <div>
                <h2>Portofoliu</h2>
                <p>Proiecte active și livrate recent</p>
              </div>
              <button className="ghost">Toate proiectele</button>
            </div>
            <div className="cardList">
              {projects.map((project) => (
                <article key={project.title} className="card">
                  <div className="cardHeader">
                    <p className="meta">{project.role}</p>
                    <span className="badge">Live</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="panel">
            <div className="panelHeader">
              <div>
                <h2>Backlog principal</h2>
                <p>Livrabilele pe care le adaugăm imediat</p>
              </div>
            </div>
            <div className="roadmapList">
              {roadmapItems.map((item) => (
                <div key={item} className="roadmapItem">
                  <span className="dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="sidebar">
          <div className="panel">
            <div className="panelHeader">
              <div>
                <h2>Todo manager</h2>
                <p>Creare și gestionare taskuri</p>
              </div>
              <button className="ghost" onClick={loadTodos}>
                Reîncarcă
              </button>
            </div>
            <div className="todoInput">
              <input
                value={todoInput}
                onChange={(event) => setTodoInput(event.target.value)}
                placeholder="Adaugă un task nou"
                aria-label="Task nou"
              />
              <button className="primary" onClick={handleAddTodo}>
                Adaugă
              </button>
            </div>
            {isLoadingTodos ? (
              <p className="muted">Se încarcă taskurile...</p>
            ) : (
              <div className="todoList">
                {todos.length === 0 ? (
                  <p className="muted">Nu există taskuri încă.</p>
                ) : (
                  todos.map((todo) => (
                    <div key={todo.id} className={`todoItem ${todo.done ? 'done' : ''}`}>
                      <button className="ghost" onClick={() => handleToggleTodo(todo.id)}>
                        {todo.done ? 'Reia' : 'Finalizat'}
                      </button>
                      <p>{todo.title}</p>
                      <button className="ghost" onClick={() => handleDeleteTodo(todo.id)}>
                        Șterge
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
          <div className="panel profile">
            <div>
              <p className="meta">Administrator</p>
              <h2>Ene Florin</h2>
              <p className="muted">Manager de produs & dezvoltator front-end</p>
            </div>
            <div className="profileStats">
              <div>
                <strong>8</strong>
                <span>ani</span>
              </div>
              <div>
                <strong>21</strong>
                <span>clienți</span>
              </div>
              <div>
                <strong>94%</strong>
                <span>review</span>
              </div>
            </div>
            <button className="primary">Actualizează profilul</button>
          </div>

          <div className="panel">
            <div className="panelHeader">
              <div>
                <h2>Agenda săptămânii</h2>
                <p>Obiective și livrabile</p>
              </div>
              <button className="ghost">Planifică</button>
            </div>
            <div className="timeline">
              {weeklyFocus.map((item) => (
                <div key={item} className="timelineItem">
                  <span className="dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel callout">
            <h3>Raport lunar de progres</h3>
            <p>Trimite un update despre livrări, buguri și decizii tehnice importante.</p>
            <button className="secondary">Creează raport</button>
          </div>
        </aside>
      </section>

      <style jsx>{`
        :global(body) {
          background: #f6f4f1;
          color: #1d1b19;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .page {
          max-width: 1160px;
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
          align-items: stretch;
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: 0 18px 45px rgba(15, 15, 15, 0.08);
        }

        .heroContent {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
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
          margin-bottom: 0;
          max-width: 520px;
        }

        .heroActions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 0.75rem;
        }

        button {
          border: none;
          border-radius: 16px;
          padding: 0.8rem 1rem;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.95rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.35rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        button small {
          font-size: 0.75rem;
          font-weight: 500;
          opacity: 0.7;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(15, 15, 15, 0.12);
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
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          align-items: center;
        }

        .ghost:hover {
          transform: none;
          box-shadow: none;
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
          margin: 0 0 0.5rem;
          font-size: 1.3rem;
        }

        .heroCard p {
          margin: 0;
          color: #4f4641;
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
          width: 42%;
          height: 100%;
          background: #1d1b19;
        }

        .progressMeta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #4b443f;
        }

        .heroMeta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 16px;
          padding: 0.8rem 1rem;
        }

        .heroMeta p {
          margin: 0 0 0.2rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
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

        .content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.35fr);
          gap: 1.5rem;
        }

        .main {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
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

        .panelHeader p {
          margin: 0.35rem 0 0;
          color: #7a6f67;
          font-size: 0.9rem;
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
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .cardHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .card h3 {
          margin: 0;
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
          margin: 0;
        }

        .badge {
          background: #fff2d6;
          color: #8f6a2b;
          font-size: 0.65rem;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .profile {
          gap: 1rem;
        }

        .profile h2 {
          margin: 0.3rem 0 0.4rem;
        }

        .profile .muted {
          margin: 0;
          color: #6f665f;
          font-size: 0.9rem;
        }

        .profileStats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .profileStats div {
          background: #faf7f4;
          border-radius: 12px;
          padding: 0.75rem;
          text-align: center;
          border: 1px solid #efe3d7;
        }

        .profileStats strong {
          font-size: 1rem;
          display: block;
        }

        .profileStats span {
          font-size: 0.75rem;
          color: #7a6f67;
        }

        .callout {
          background: linear-gradient(135deg, #fff2d6, #f1e7ff);
        }

        .roadmapList {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .roadmapItem {
          display: flex;
          gap: 0.8rem;
          align-items: flex-start;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid #f0e6db;
        }

        .roadmapItem:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .todoInput {
          display: flex;
          gap: 0.6rem;
        }

        .todoInput input {
          flex: 1;
          border-radius: 12px;
          border: 1px solid #efe3d7;
          padding: 0.65rem 0.75rem;
          font-size: 0.9rem;
        }

        .todoList {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .todoItem {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 0.6rem;
          align-items: center;
          padding: 0.7rem;
          background: #faf7f4;
          border-radius: 12px;
          border: 1px solid #efe3d7;
        }

        .todoItem p {
          margin: 0;
          font-size: 0.9rem;
        }

        .todoItem.done p {
          text-decoration: line-through;
          color: #7a6f67;
        }

        @media (max-width: 980px) {
          .content {
            grid-template-columns: 1fr;
          }

          .sidebar {
            order: -1;
          }
        }

        @media (max-width: 720px) {
          .page {
            padding: 2.5rem 1.2rem 4rem;
          }

          .hero {
            padding: 2rem;
          }

          .pill,
          .subtitle {
            display: none;
          }

          h1 {
            font-size: 1.8rem;
          }

          .task {
            flex-direction: column;
            align-items: flex-start;
          }

          .tags {
            align-self: flex-start;
          }

          .panelHeader {
            flex-direction: column;
            align-items: flex-start;
          }

          button {
            width: 100%;
            align-items: center;
            text-align: center;
          }

          .heroActions {
            grid-template-columns: 1fr;
          }

          .todoInput {
            flex-direction: column;
          }

          .todoItem {
            grid-template-columns: 1fr;
            text-align: left;
          }
        }

        @media (max-width: 520px) {
          .heroMeta {
            grid-template-columns: 1fr;
          }

          .profileStats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
