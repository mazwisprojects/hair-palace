import '../styles/globals.css';

export default function ProcessTimeline() {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We discuss your hair goals and assess your current hair condition"
    },
    {
      number: 2,
      title: "Treatment Plan",
      description: "Our experts create a personalized treatment plan for you"
    },
    {
      number: 3,
      title: "Service",
      description: "We perform the service using premium products and techniques"
    },
    {
      number: 4,
      title: "Aftercare",
      description: "We provide guidance on maintaining your new look"
    }
  ];

  return (
    <section className="timeline-section">
      <div className="container">
        <h2>Our Process</h2>
        <div className="timeline">
          {steps.map((step) => (
            <div key={step.number} className="timeline-item">
              <div className="timeline-marker">{step.number}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
