// src/components/AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>Was ist Permakultur?</h2>
          <p>Permakultur ist ein ganzheitliches Konzept für nachhaltige Lebens- und Wirtschaftsweisen. Es versteht sich als ein möglichst naturnah gestaltetes, sich selbst erhaltendes Ökosystem – bestehend aus ein- und mehrjährigen Pflanzen, Tieren und Menschen. Ziel ist ein stabiles System, das:</p>
          
          <ul className="features-list">
            <li><strong>artenreich</strong> ist</li>
            <li><strong>gute Bodenqualität</strong> aufweist</li>
            <li><strong>schädlingsresistent</strong> ist</li>
            <li>und <strong>verlässliche Erträge</strong> liefert</li>
          </ul>
          
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