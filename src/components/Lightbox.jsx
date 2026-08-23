import { useState } from 'react';

export default function Lightbox({ images, isOpen, onClose, currentIndex, setCurrentIndex }) {
  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>
        <button className="lightbox-prev" onClick={goToPrevious}>❮</button>
        <img src={images[currentIndex]} alt="Gallery" className="lightbox-image" />
        <button className="lightbox-next" onClick={goToNext}>❯</button>
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
