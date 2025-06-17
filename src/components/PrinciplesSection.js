// src/components/PrinciplesSection.js
import React from 'react';

const PrinciplesSection = () => {
  const principles = [
    { icon: '🌱', title: 'Reagiere kreativ auf Veränderung' },
    { icon: '🌿', title: 'Nutze Randzonen und schätze das Marginale' },
    { icon: '🌈', title: 'Nutze und schätze Vielfalt' },
    { icon: '🐌', title: 'Setze auf kleine und langsame Lösungen' },
    { icon: '🧩', title: 'Integriere eher, als zu trennen' },
    { icon: '🌀', title: 'Gestalte vom Muster hin zum Detail' },
    { icon: '🌍', title: 'Sorge für die Erde' },
    { icon: '👫', title: 'Sorge für die Menschen' },
    { icon: '⚖️', title: 'Faires Teilen' },
    { icon: '🔋', title: 'Sammle und speichere Energie' },
    { icon: '🥕', title: 'Erziele eine Ernte' },
    { icon: '♻️', title: 'Nutze Selbstregulation & akzeptiere Feedback' },
    { icon: '👁️', title: 'Beobachte und interagiere' },
    { icon: '🌞', title: 'Nutze erneuerbare Ressourcen & Leistungen' },
    { icon: '🚯', title: 'Produziere keinen Abfall' }
  ];

  return (
    <section id="principles" className="principles-section">
      <div className="container">
        <h2>Die Permakultur-Gestaltungsprinzipien</h2>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div className="principle-card" key={index}>
              <div className="principle-icon">{principle.icon}</div>
              <h3>{principle.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;