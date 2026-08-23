import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to Hair Palace</h1>
        <p>Experience Luxury Hair Transformation</p>
        <p className="hero-subtitle">Where every strand tells a beautiful story</p>
        <Link to="/quote" className="cta-button">Book Your Appointment</Link>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
}
