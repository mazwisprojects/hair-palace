import { useState } from 'react';
import GalleryCard from '../components/GalleryCard';
import { gallery } from '../data/gallery';
import '../styles/gallery.css';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredGallery = filter === 'all'
    ? gallery
    : gallery.filter(item => item.category === filter);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Our Gallery</h1>
          <p>Beautiful transformations that inspire</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'styling' ? 'active' : ''}
              onClick={() => setFilter('styling')}
            >
              Styling
            </button>
            <button
              className={filter === 'coloring' ? 'active' : ''}
              onClick={() => setFilter('coloring')}
            >
              Coloring
            </button>
            <button
              className={filter === 'treatment' ? 'active' : ''}
              onClick={() => setFilter('treatment')}
            >
              Treatment
            </button>
            <button
              className={filter === 'bridal' ? 'active' : ''}
              onClick={() => setFilter('bridal')}
            >
              Bridal
            </button>
          </div>

          <div className="gallery-grid">
            {filteredGallery.map(item => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
