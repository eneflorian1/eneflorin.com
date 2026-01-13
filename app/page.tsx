export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Salut! Site-ul este online.</h1>
      <p>
        Acest site a fost deployat automat pe Hostico folosind <strong>GitHub Actions</strong>.
      </p>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Instrucțiunzzzzzzzzzzzzzzzzzi</h2>
        <p>Orice modificare (push) pe branch-ul <code>main</code> va declanșa un nou deploy.</p>
      </div>
    </main>
  );
}
