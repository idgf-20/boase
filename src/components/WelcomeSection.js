// src/components/WelcomeSection.js
import React from 'react';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          <h2>Hallo und herzlich willkommen!</h2>
          <p>Schaut euch gerne in der <strong>BOase</strong> um.</p>
          
          <div className="welcome-text">
            <p>Wir sind ein studentisches Projekt, das seit dem Sommersemester 2018 diesen wunderschönen Permakulturgarten hegt und pflegt.</p>
            <p>Der Garten ist ein Ort zum <strong>Forschen, Lernen und Gärtnern</strong> – ein Ort, an dem wir <strong>Nachhaltigkeit erleben</strong> können.</p>
            <p>Wenn du einen Ausgleich zum Hochschulalltag brauchst oder Lust auf Gartenarbeit an der frischen Luft hast, bist du hier genau richtig!</p>
            <p>Das gemeinsame Gärtnern macht nicht nur Spaß – wir können auch eine Menge lernen und erfahren, ganz im Sinne der Permakultur.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;