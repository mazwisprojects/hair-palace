import { Link } from 'react-router-dom';
import '../styles/cta.css';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Transform Your Hair?</h2>
        <p>Book an appointment with our expert stylists today and experience the Hair Palace difference.</p>
        <div className="cta-buttons">
          <Link to="/quote" className="cta-primary">Book Now</Link>
          <Link to="/services" className="cta-secondary">View Pricing</Link>
        </div>
      </div>
    </section>
  );
}
