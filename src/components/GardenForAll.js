// src/components/GardenForAll.js
import React from 'react';
import { FaUsers, FaCalendarAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

const GardenForAll = () => {
  return (
    <section id="garden" className="garden-section">
      <div className="container">
        <div className="garden-content">
          <h2>Der BOase-Garten – Ein Ort für Alle</h2>
          
          <div className="callout-box">
            <div className="callout-icon">
              <FaUsers />
            </div>
            <div className="callout-text">
              <h3>Der Garten ist offen für alle!</h3>
              <p>Egal ob ihr Teil der Hochschule seid oder nicht – <strong>jeder ist herzlich eingeladen mitzumachen.</strong></p>
              <p>Unser Garten ist ein Ort des Austauschs, des Lernens und der Ruhe – mitten auf dem Campus. Hier kann man Nachhaltigkeit direkt erleben.</p>
            </div>
          </div>
          
          <div className="contact-info">
            <h3>Kontakt und Mitmachen:</h3>
            
            <div className="contact-items">
              <div className="contact-item">
                <FaCalendarAlt className="contact-icon" />
                <div>
                  <h4>Treffen</h4>
                  <p>dienstags um 12 Uhr</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>E-Mail</h4>
                  <p><a href="mailto:hochschulgarten@hs-bochum.de">hochschulgarten@hs-bochum.de</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaInstagram className="contact-icon" />
                <div>
                  <h4>Instagram</h4>
                  <p><a href="https://instagram.com/boase_hochschulgarten" target="_blank" rel="noopener noreferrer">@boase_hochschulgarten</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenForAll;