import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import '../styles/services.css';

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Premium hair services for every need</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
