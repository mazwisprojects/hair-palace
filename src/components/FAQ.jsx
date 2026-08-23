import '../styles/globals.css';

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "How often should I get my hair cut?",
      answer: "For most hair types, every 6-8 weeks is recommended. However, this depends on your hair type and style."
    },
    {
      id: 2,
      question: "How long does hair coloring last?",
      answer: "Depending on the coloring technique, results typically last 4-6 weeks. We recommend maintenance treatments every 6-8 weeks."
    },
    {
      id: 3,
      question: "Are the products used organic?",
      answer: "We use premium, professional-grade products that are safe and effective for all hair types."
    },
    {
      id: 4,
      question: "Do you offer bridal packages?",
      answer: "Yes! We offer special bridal packages. Please contact us for details and to schedule a trial."
    },
    {
      id: 5,
      question: "Can I book same-day appointments?",
      answer: "We do our best to accommodate same-day requests based on availability. Please call us directly."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.id} className="faq-item">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
