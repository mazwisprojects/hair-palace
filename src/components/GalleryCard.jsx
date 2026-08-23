import '../styles/gallery.css';

export default function GalleryCard({ item }) {
  return (
    <div className="gallery-card">
      <div className="gallery-image-wrapper">
        <img src={`/images/${item.image}`} alt={item.title} className="gallery-image" />
        <div className="gallery-overlay">
          <span>{item.category}</span>
        </div>
      </div>
      <h3>{item.title}</h3>
    </div>
  );
}
