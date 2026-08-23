import '../styles/globals.css';

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <span>✨</span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <div className="service-meta">
        <span className="price">{service.price}</span>
        <span className="duration">{service.duration}</span>
      </div>
      <button className="service-btn">Learn More</button>
    </div>
  );
}
