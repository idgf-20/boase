import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodForestPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    // Optional: Scrollen zu #gardenForAll (wenn du eine ID setzt)
    // document.getElementById('gardenForAll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="image-detail-page">
      <h1>Unser Food Forest</h1>
      <img src="/FoodForest.jpg" alt="Food Forest" className="detail-image" />
      <div className="detail-content">
        <p>Unser essbarer Waldgarten nach Permakultur-Prinzipien:</p>
        <ul>
          <li>Mehrstufiges Pflanzsystem mit Bäumen, Sträuchern und Bodendeckern</li>
          <li>Über 30 essbare Pflanzenarten in Symbiose</li>
          <li>Selbsterhaltendes Ökosystem mit minimalem Pflegeaufwand</li>
          <li>Jährliche Ernte von Obst, Nüssen und Kräutern</li>
        </ul>
        <button onClick={handleBackClick} className="back-link"> ← Zurück zum Garten </button>
      </div>
    </div>
  );
};

export default FoodForestPage;
