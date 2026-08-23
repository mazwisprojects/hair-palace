import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <main className="home-page">
      <Hero />

      <section className="home-intro">
        <div className="container home-intro-content">
          <p className="eyebrow">The Hair Palace experience</p>
          <h2>Your beauty, beautifully considered.</h2>
          <p>
            Hair Palace is a luxury salon devoted to thoughtful styling, healthy hair,
            and transformations that feel distinctly yours. Explore our world and find
            the service that brings your vision to life.
          </p>
          <div className="home-intro-links">
            <Link to="/services" className="home-intro-link">Explore services</Link>
            <Link to="/gallery" className="home-intro-link">View our gallery</Link>
            <Link to="/about" className="home-intro-link">Meet Hair Palace</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
