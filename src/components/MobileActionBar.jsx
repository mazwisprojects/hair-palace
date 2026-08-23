export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <a href="tel:+1234567890" className="action-btn call-btn">
        <span>📞</span>
        <span>Call</span>
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp-btn">
        <span>💬</span>
        <span>WhatsApp</span>
      </a>
      <a href="#contact" className="action-btn contact-btn">
        <span>📧</span>
        <span>Contact</span>
      </a>
    </div>
  );
}
