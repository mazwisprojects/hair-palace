import { useState } from 'react';
import '../styles/gallery.css';

export default function BeforeAfterSlider({ before, after }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div className="before-after-slider" onMouseMove={handleMouseMove}>
      <img src={after} alt="After" className="after-image" />
      <div className="before-container" style={{ width: `${sliderPosition}%` }}>
        <img src={before} alt="Before" className="before-image" />
      </div>
      <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
        <span>← →</span>
      </div>
    </div>
  );
}
