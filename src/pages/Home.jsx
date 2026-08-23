import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import GalleryCard from '../components/GalleryCard';
import CTA from '../components/CTA';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { gallery } from '../data/gallery';
import '../styles/home.css';

export default function Home() {
  return (
    <main className="home-page">
      <Hero />

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-subtitle">Premium hair care services tailored for you</p>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <p className="section-subtitle">See our beautiful transformations</p>
          <div className="gallery-grid">
            {gallery.slice(0, 8).map(item => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <p className="section-subtitle">Real reviews from satisfied customers</p>
          <div className="testimonials-grid">
            {testimonials.slice(0, 4).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
