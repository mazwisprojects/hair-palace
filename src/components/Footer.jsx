import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Hair Palace</h3>
          <p>Your destination for premium hair transformation and luxury styling.</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>?? 123 Luxury Lane, Beauty City, BC 12345</p>
          <p>?? (555) 123-4567</p>
          <p>?? hello@hairpalace.com</p>
          <p>?? Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</p>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe for tips and exclusive offers</p>
          <input type="email" placeholder="Your email" className="newsletter-input" />
          <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Hair Palace. All rights reserved.</p>
      </div>
    </footer>
  );
}
