// Footer.js
import React from 'react';
import '../../styles/Footer.css'; // Import your custom styles for the footer

//add function to get crrent year
function currentYear() {
    const date = new Date();
    return date.getFullYear();
}

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {currentYear()} Your Company. All rights reserved.</p>
        <div className="social-icons">
          {/* Add your social media icons or links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
