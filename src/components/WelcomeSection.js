// src/components/WelcomeSection.js
import React from 'react';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          <h2>Willkommen in der BOase – dem grünen Herzen des Campus!</h2>
          
          <div className="welcome-text">
            <p>Seit 2018 gestalten und pflegen wir als studentisches Projekt unseren Permakulturgarten – einen Ort zum Gärtnern, Lernen und Durchatmen.
              Ob als Ausgleich zum Unialltag oder aus purer Lust am nachhaltigen Gärtnern:
              Mach mit, erlebe Natur und wachse mit uns!.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;