// src/pages/Home.js
import React from 'react';
import Slider from '../components/Common/Slider';
import houseImage1 from '../images/House1.jpeg';
import houseImage2 from '../images/House2.jpg';
import houseImage3 from '../images/House3.jpg';
import '../styles/Home.css';

const Home = () => {
  const sliderImages = [houseImage1, houseImage2, houseImage3];

  return (
    <div className="home-container">
        <div className="image-container">
            <Slider images={sliderImages} />
        </div>
      {/* Add other content and sections as needed */}
    </div>
  );
};

export default Home;
