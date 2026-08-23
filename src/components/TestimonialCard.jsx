import '../styles/testimonials.css';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar">{testimonial.name[0]}</div>
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          <p className="role">{testimonial.role}</p>
        </div>
      </div>
      <div className="stars">
        {'⭐'.repeat(testimonial.rating)}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
    </div>
  );
}
