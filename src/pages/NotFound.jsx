import '../styles/globals.css';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" className="back-home-btn">Go Back Home</a>
      </section>
    </main>
  );
}
