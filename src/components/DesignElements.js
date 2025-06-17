// src/components/DesignElements.js
import React from 'react';
import { FaSun, FaLeaf, FaSeedling, FaTree, FaBug, FaAppleAlt, FaShoePrints } from 'react-icons/fa';

const DesignElements = () => {
  const elements = [
    { 
      icon: <FaSun />, 
      title: 'Intensivband', 
      description: 'Das klassische Beet – die grüne Hauptfläche – ist für einjährige Pflanzen vorgesehen. Hier ist die Arbeit am intensivsten, daher der Name.' 
    },
    { 
      icon: <FaLeaf />, 
      title: 'Extensivband', 
      description: 'Diese halbrunde Zone aus mehrjährigen Pflanzen umgibt das Intensivband. Sie schützt vor Wind, speichert Feuchtigkeit und wirkt durch die südliche Öffnung wie eine Sonnenfalle.' 
    },
    { 
      icon: <FaSeedling />, 
      title: 'Schlüssellochbeet', 
      description: 'Ein Beet mit schlüssellochförmigem Zugang. In der Mitte steht ein Kompostkorb, der das Beet mit Nährstoffen versorgt. Steinmauern speichern Wärme und Schichten aus Holz, Laub und Grünschnitt speichern Feuchtigkeit und bilden neuen Humus.' 
    },
    { 
      icon: <FaTree />, 
      title: 'Biodiversität', 
      description: 'Artenvielfalt ist ein zentrales Prinzip der Permakultur. Durch den Anbau alter Sorten und Saatguttausch fördern wir die Widerstandsfähigkeit gegen Krankheiten und Schädlinge.' 
    },
    { 
      icon: <FaLeaf />, 
      title: 'Mulch & Kompost', 
      description: 'Im Sinne des natürlichen Kreislaufs werfen wir nichts weg: Pflanzenreste bleiben auf den Beeten als Flächenkompost. Das reduziert Verdunstung, hemmt Beikräuter und fördert Humusaufbau. Ergebnis: Mehr Ernte bei weniger Wasserverbrauch.' 
    },
    { 
      icon: <FaSeedling />, 
      title: 'Kräuterspirale', 
      description: 'Ein spiralförmig aufgeschichtetes Beet mit unterschiedlichen Klimazonen: Trocken-, Normal- und Feuchtzonen für vielfältige Kräuter. Steinwände speichern Wärme – optimal für mediterrane Pflanzen.' 
    },
    { 
      icon: <FaTree />, 
      title: 'Mischkultur & Fruchtfolge', 
      description: 'Was für manche chaotisch wirkt, ist wohlüberlegt: Pflanzen werden so kombiniert, dass sie sich gegenseitig unterstützen. Eine durchdachte Fruchtfolge erhält langfristig die Bodenqualität.' 
    },
    { 
      icon: <FaBug />, 
      title: 'Totholz- & Steinhaufen', 
      description: 'Benjeshecken aus Ästen und Zweigen oder Steinhaufen bieten wertvolle Rückzugsorte für Tiere wie Vögel, Igel, Insekten oder Amphibien.' 
    },
    { 
      icon: <FaBug />, 
      title: 'Wildblumenwiese & Insektenhäuser', 
      description: 'Unsere Wiesen liefern Nahrung für Bienen, Schmetterlinge & Co. Insektenhotels aus Holz bieten Nistplätze für bedrohte Arten.' 
    },
    { 
      icon: <FaAppleAlt />, 
      title: 'Streuobstwiese', 
      description: 'Ein selten gewordenes, artenreiches Ökosystem, das Nahrung für Mensch, Insekten und Vögel bietet – und mit jedem Jahr wertvoller wird.' 
    },
    { 
      icon: <FaShoePrints />, 
      title: 'Barfußpfad', 
      description: 'Noch in Planung: Eine Fläche zum Fühlen, Spüren und Entschleunigen. Verschiedene Naturmaterialien laden zum achtsamen Gehen ein.' 
    },
    { 
      icon: <FaSun />, 
      title: 'Ruhezone', 
      description: 'Ebenfalls in Planung – ein Ort zum Durchatmen, Lesen oder einfach Sein.' 
    },
  ];

  return (
    <section id="design" className="design-section">
      <div className="container">
        <h2>Gestaltungselemente im BOase-Garten</h2>
        <div className="elements-grid">
          {elements.map((element, index) => (
            <div className="element-card" key={index}>
              <div className="element-icon">{element.icon}</div>
              <h3>{element.title}</h3>
              <p>{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignElements;