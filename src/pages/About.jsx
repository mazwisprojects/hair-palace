import '../styles/about.css';

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About Hair Palace</h1>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>Our Story</h2>
            <p>
              Hair Palace was founded on the belief that every client deserves premium hair care
              and exceptional service. For over 10 years, we've been transforming hair and building
              confidence in our community.
            </p>
          </div>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              To provide the highest quality hair services using premium products and expert
              techniques, while creating a luxurious and welcoming environment for every client.
            </p>
          </div>

          <div className="about-team">
            <h2>Our Team</h2>
            <p>
              Our stylists are certified professionals with years of experience in hair styling,
              coloring, and treatment. We continuously update our skills with the latest techniques
              and trends in the beauty industry.
            </p>
          </div>

          <div className="about-values">
            <h3>Our Values</h3>
            <ul>
              <li>Excellence in every service</li>
              <li>Premium products only</li>
              <li>Client satisfaction guaranteed</li>
              <li>Innovation and creativity</li>
              <li>Professional and friendly service</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
