import '../styles/whatsapp.css';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsApp} title="Chat with us on WhatsApp">
      <span>💬</span>
    </button>
  );
}
