// src/components/Common/Slider.js
import React, { useState, useEffect } from 'react';
import '../../styles/Slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slide-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img className='slider-image' src={`${image}`} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={goToPrevSlide}>&lt;</button>
      <button className="arrow right" onClick={goToNextSlide}>&gt;</button>
    </div>
  );
};

export default Slider;
