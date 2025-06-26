// src/pages/HochbeetePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HochbeetePage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="image-detail-page">
      <h1>Unsere Hochbeete</h1>
      <img src="/grauteBett.jpg" alt="Hochbeete" className="detail-image" />
      <div className="detail-content">
        <p>Permakultur-Hochbeete mit besonderen Eigenschaften:</p>
        <ul>
          <li>Schlüsselloch-Design für optimale Bewirtschaftung</li>
          <li>Innenliegende Kompostierung für Nährstoffkreislauf</li>
          <li>Besonders ertragreich und rückenschonend</li>
          <li>Anbau von Gemüse, Kräutern und essbaren Blüten</li>
        </ul>
        <button onClick={handleBackClick} className="back-link">
          ← Zurück zum Garten
        </button>
      </div>
    </div>
  );
};

export default HochbeetePage;
