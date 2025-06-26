// src/components/AboutSection.js
import React from 'react';
import './AboutSection.css'; // Neue CSS-Datei für diese Komponente

const AboutSection = () => {
  const features = [
    { title: "artenreich ist" },
    { title: "gute Bodenqualität aufweist" },
    { title: "schädlingsresistent ist" },
    { title: "verlässliche Erträge liefert" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>Was ist Permakultur?</h2>
          <p>Permakultur ist ein nachhaltiges, naturnahes Konzept für ein sich selbst erhaltendes Ökosystem aus Pflanzen, Tieren und Menschen:</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-content">
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
          
          <p>Permakultur arbeitet stets <strong>mit</strong>, nie <strong>gegen</strong> die geografischen und natürlichen Gegebenheiten eines Ortes. Der Garten passt sich seiner Umgebung an und nicht umgekehrt.</p>
          
          <div className="history-box">
            <h3>Geschichte der Permakultur</h3>
            <p>Der Begriff <em>Permakultur</em> ist ein Kunstwort aus den englischen Begriffen <em>permanent</em> und <em>agriculture</em>. Er wurde in den 1970er Jahren von den Australiern <strong>Bill Mollison</strong> und <strong>David Holmgren</strong> geprägt, die mit ihrem Buch <em>Permaculture One</em> (1978) einen Gegenentwurf zur konventionellen, monokulturell geprägten Landwirtschaft lieferten.</p>
            <p>Seitdem wurde Permakultur weiterentwickelt – zu einer umfassenden <strong>Ethik mit Gestaltungsprinzipien</strong>, die heute in vielen Lebensbereichen Anwendung findet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;