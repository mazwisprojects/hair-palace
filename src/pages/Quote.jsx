import { useState } from 'react';
import '../styles/quote.css';

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    // Handle quote submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      date: '',
      notes: ''
    });
  };

  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div className="quote-hero-content">
          <h1>Get Your Quote</h1>
          <p>Request a personalized quote for your hair service</p>
        </div>
      </section>

      <section className="quote-content">
        <div className="container">
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="form-group">
                <label htmlFor="serviceType">Service Type *</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="cutting">Hair Cutting & Styling</option>
                  <option value="coloring">Hair Coloring</option>
                  <option value="keratin">Keratin Treatment</option>
                  <option value="extensions">Hair Extensions</option>
                  <option value="bridal">Bridal Hair</option>
                  <option value="spa">Hair Spa Treatment</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="date">Preferred Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us more about what you're looking for..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Request Quote</button>
          </form>
        </div>
      </section>
    </main>
  );
}
