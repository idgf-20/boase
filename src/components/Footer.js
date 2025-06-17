// src/components/Footer.js
import React from 'react';
import { FaEnvelope, FaSeedling } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <FaSeedling className="logo-icon" />
            <h3>BOase Hochschulgarten</h3>
            <p>Permakultur erleben und gestalten</p>
          </div>
          
          <div className="contact-info">
            <h4>Kontakt:</h4>
            <a href="mailto:hochschulgarten@hs-bochum.de" className="email-link">
              <FaEnvelope className="contact-icon" />
              hochschulgarten@hs-bochum.de
            </a>
          </div>
          
          <div className="social-links">
            <h4>Folge uns:</h4>
            <div className="social-icons">
              <a href="https://instagram.com/boase_hochschulgarten" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://facebook.com/BOaseHochschulgarten" target="_blank" rel="noopener noreferrer" className="social-link">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} BOase Hochschulgarten. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;