// src/components/ThanksSection.js
import React from 'react';
import { FaHandshake, FaTools, FaTree, FaGift, FaHeart } from 'react-icons/fa';

const ThanksSection = () => {
  const thanksItems = [
    { icon: <FaHandshake />, text: 'Herrn Nachtigal für die ständige Unterstützung' },
    { icon: <FaTools />, text: 'der Hochschul-Tischlerei für die Realisierung des Schaukastens' },
    { icon: <FaTree />, text: 'dem Botanischen Garten der RUB für zahlreiche Holzspenden' },
    { icon: <FaGift />, text: 'der Grünen Schule für Materialspenden' },
    { icon: <FaHeart />, text: 'und ganz besonders Johannes Tangen vom Hof Bergmann e. V. für sein großartiges Engagement!' }
  ];

  return (
    <section id="thanks" className="thanks-section">
      <div className="container">
        <h2>Wir danken herzlich:</h2>
        
        <div className="thanks-list">
          {thanksItems.map((item, index) => (
            <div className="thanks-item" key={index}>
              <div className="thanks-icon">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        
        <div className="final-thanks">
          <p>Ihr alle macht unser Projekt erst möglich. <span className="heart">💚</span></p>
        </div>
      </div>
    </section>
  );
};

export default ThanksSection;