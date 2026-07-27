function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <main className="container-site section-padding">
        <div className="glass-panel max-w-xl p-8 animate-fade-in">
          <p className="badge mb-4">Milestone 2</p>
          <h1 className="heading-display">David Nissenoff</h1>
          <p className="mt-4 text-lg text-text-muted">
            Tailwind CSS is configured with the portfolio design system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="btn-primary">
              Primary
            </button>
            <button type="button" className="btn-secondary">
              Secondary
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
