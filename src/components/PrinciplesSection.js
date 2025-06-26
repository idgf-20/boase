import React, { useState } from 'react';

const PrinciplesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);



   const toggleCard = (index) => {
    if (expandedCard === index) {
      // Wenn die bereits geöffnete Karte erneut geklickt wird, schließen
      setExpandedCard(null);
    } else {
      // Andernfalls die neue Karte öffnen (und die vorherige schließen)
      setExpandedCard(index);
    }
  };

  const principles = [
    { 
      icon: '🌱', 
      title: 'Gestalte mit uns!',
      shortDesc: 'Bring deine Ideen ein und gestalte den Garten aktiv mit',
      fullDesc: 'Bei uns hat jede Stimme Gewicht. Ob du Erfahrung im Gärtnern hast oder einfach neugierig bist - deine Ideen sind willkommen. Gemeinsam planen wir neue Beete, gestalten kreative Ecken und entwickeln den Garten weiter. Jeder Beitrag zählt!'
    },
    { 
      icon: '🌿', 
      title: 'Entdecke verborgene Ecken',
      shortDesc: 'Jeder Winkel hat Potenzial - lass uns es gemeinsam nutzen',
      fullDesc: 'Unser Garten steckt voller Überraschungen. In scheinbar ungenutzten Ecken finden sich oft die schönsten Möglichkeiten - für ein Insektenhotel, eine Kräuterspirale oder eine gemütliche Sitzecke. Gemeinsam entdecken wir diese Schätze und machen sie für alle nutzbar.'
    },
    { 
      icon: '🌈', 
      title: 'Vielfalt erleben',
      shortDesc: 'Genieße bunte Blüten, unterschiedliche Pflanzen und Lebensformen',
      fullDesc: 'Diversität ist unsere Stärke! Wir kultivieren über 100 verschiedene Pflanzenarten, die ein Zuhause für zahlreiche Insekten und Kleintiere bieten. Diese Vielfalt macht unseren Garten widerstandsfähig, produktiv und besonders schön in jeder Jahreszeit.'
    },
    { 
      icon: '🐌', 
      title: 'Entspannt gärtnern',
      shortDesc: 'Kleine Schritte, große Wirkung - ohne Hektik und Stress',
      fullDesc: 'Permakultur bedeutet, mit der Natur zu arbeiten statt gegen sie. Wir setzen auf langfristige, pflegeleichte Lösungen. Jeder kann in seinem Tempo mitwirken - ob 10 Minuten oder mehrere Stunden. Der Weg ist das Ziel!'
    },
    { 
      icon: '🧩', 
      title: 'Gemeinschaft stärken',
      shortDesc: 'Zusammen statt allein - gemeinsam schaffen wir mehr',
      fullDesc: 'Unser Garten lebt vom Miteinander. Beim gemeinsamen Pflanzen, Ernten und Feiern entstehen Freundschaften und ein starkes Netzwerk. Hier hilft man sich gegenseitig - ob beim Umgraben oder beim Teilen von Gartentipps und Ernteerträgen.'
    },
    { 
      icon: '🌀', 
      title: 'Harmonie finden',
      shortDesc: 'Ein Garten, der natürlich fließt und sich entwickelt',
      fullDesc: 'Wir gestalten den Garten so, dass alle Elemente harmonisch zusammenwirken. Die Pflanzen unterstützen sich gegenseitig, Nützlinge halten Schädlinge in Schach, und natürliche Kreisläufe reduzieren unseren Arbeitsaufwand. So entsteht ein sich selbst erhaltendes System.'
    },
    { 
      icon: '🌍', 
      title: 'Die Erde schützen',
      shortDesc: 'Beitrag leisten für eine gesündere Umwelt direkt vor Ort',
      fullDesc: 'Jede Handlung im Garten hat Auswirkungen auf die Umwelt. Wir fördern die Bodenfruchtbarkeit, verzichten auf Chemikalien und schaffen Lebensräume für bedrohte Arten. So leisten wir praktischen Umweltschutz vor unserer Haustür.'
    },
    { 
      icon: '👫', 
      title: 'Füreinander da sein',
      shortDesc: 'Ein Ort der Begegnung und gegenseitiger Unterstützung',
      fullDesc: 'Unser Garten ist mehr als ein Anbauplatz - er ist ein sozialer Treffpunkt. Hier tauschen wir nicht nur Saatgut, sondern auch Erfahrungen und Lebensfreude. Jung und Alt, Menschen verschiedener Hintergründe finden hier zusammen.'
    },
    { 
      icon: '⚖️', 
      title: 'Faire Ernte teilen',
      shortDesc: 'Was wir ernten, teilen wir gerecht unter allen Helfern',
      fullDesc: 'Die Ernte wird nach dem Prinzip der Fairness verteilt: Wer mitarbeitet, darf auch genießen. Überschüsse gehen an die Gemeinschaft oder soziale Einrichtungen. So stellen wir sicher, dass alle von unserer Arbeit profitieren.'
    },
    { 
      icon: '🔋', 
      title: 'Naturkräfte nutzen',
      shortDesc: 'Sonne, Regen und Erde intelligent für uns arbeiten lassen',
      fullDesc: 'Wir nutzen natürliche Energiequellen und Kreisläufe: Regenwasser sammeln, Sonnenenergie nutzen, Kompostierung betreiben. Diese ressourcenschonenden Methoden machen unseren Garten nachhaltig und zukunftsfähig.'
    },
    { 
      icon: '🥕', 
      title: 'Frisch genießen',
      shortDesc: 'Gesunde Ernte direkt vom Beet auf den Teller',
      fullDesc: 'Nichts schmeckt besser als selbstgezogenes Gemüse! Bei uns wachsen alte Sorten mit vollem Aroma und maximalen Nährstoffen. Erlebe den Unterschied zwischen Supermarktware und wirklich frischen Lebensmitteln.'
    },
    { 
      icon: '♻️', 
      title: 'Aus Erfahrung lernen',
      shortDesc: 'Wir probieren aus und verbessern gemeinsam',
      fullDesc: 'Permakultur ist ein lebenslanger Lernprozess. Manche Experimente gelingen, andere nicht - aus beidem lernen wir. Unser Garten ist ein lebendiges Labor, in dem wir gemeinsam ökologische Lösungen entwickeln und verfeinern.'
    },
    { 
      icon: '👁️', 
      title: 'Achtsam wahrnehmen',
      shortDesc: 'Die Natur beobachten und im Einklang handeln',
      fullDesc: 'Bevor wir eingreifen, beobachten wir genau. Welche Pflanzen gedeihen wo besonders gut? Welche Tiere sind im Garten aktiv? Diese achtsame Herangehensweise hilft uns, bessere Entscheidungen für das gesamte Ökosystem zu treffen.'
    },
    { 
      icon: '🌞', 
      title: 'Nachhaltig wirtschaften',
      shortDesc: 'Mit natürlichen Kreisläufen Ressourcen schonen',
      fullDesc: 'Alles im Garten ist miteinander verbunden. Pflanzenreste werden zu Kompost, der wiederum neue Pflanzen nährt. Nützlinge erhalten Lebensraum und helfen uns bei der Schädlingskontrolle. So entsteht ein geschlossener Kreislauf mit minimalen Abfällen.'
    },
    { 
      icon: '🚯', 
      title: 'Zero Waste leben',
      shortDesc: 'Alles wird verwertet - bei uns gibts keinen Abfall',
      fullDesc: 'Was andere wegwerfen, ist für uns wertvolles Material. Laub wird zu Mulch, Äste zu Beeteinfassungen, Küchenabfälle zu Kompost. Durch kreatives Upcycling geben wir vermeintlichem "Abfall" neuen Nutzen und reduzieren unseren ökologischen Fußabdruck.'
    }
  ];

  return (
    <section id="principles" className="principles-section">
      <div className="container">
        <h2>Unsere Garten-Philosophie</h2>
        <p className="section-intro">Entdecke, was unseren Gemeinschaftsgarten besonders macht und wie du Teil davon werden kannst:</p>
        
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div 
              className={`principle-card ${expandedCard === index ? 'expanded' : ''}`}
              key={index}
              onClick={() => toggleCard(index)}
              aria-expanded={expandedCard === index}
            >
              <div className="principle-icon">{principle.icon}</div>
              <h3>{principle.title}</h3>
              <p className="short-desc">{principle.shortDesc}</p>
              
              {expandedCard === index && (
                <div className="full-desc">
                  <p>{principle.fullDesc}</p>
                  <button 
                    className="action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = '#contact';
                    }}
                    aria-label={`Mehr erfahren über ${principle.title}`}
                  >
                    Mitmachen
                  </button>
                </div>
              )}
              
              <div className="expand-icon" aria-hidden="true">
                {expandedCard === index ? '▲' : '▼'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;