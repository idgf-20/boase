// src/pages/BarfussPfadPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BarfussPfadPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="image-detail-page">
      <h1>Barfußpfad</h1>
      <img src="/Fuss.jpg" alt="Barfußpfad" className="detail-image" />
      <div className="detail-content">
        <p>Sensorische Erfahrung mit verschiedenen Naturmaterialien:</p>
        <ul>
          <li>Fördert die Bodenwahrnehmung und Entspannung</li>
          <li>Materialien: Holz, Steine, Rindenmulch, Wasser</li>
          <li>Besonders beliebt bei Studierenden zur Stressreduktion</li>
          <li>Jahreszeitlich wechselnde Elemente</li>
        </ul>
        <button onClick={handleBackClick} className="back-link">
          ← Zurück zum Garten
        </button>
      </div>
    </div>
  );
};

export default BarfussPfadPage;
