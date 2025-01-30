import React from 'react';
import './Footer.css'; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h3>About Us</h3>
        <p>We are a passionate team providing top-notch services for your kids.</p>
      </div>
      <div className="footer__column">
        <h3>Contact</h3>
        <ul>
          <li>Email: contact@yourdaycare.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Daycare Lane, City, State</li>
        </ul>
      </div>
      <div className="footer__column">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
