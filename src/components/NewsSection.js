// src/components/NewsSection.js
import React from 'react';
import { FaInstagram, FaFacebook, FaBook, FaCalendarAlt } from 'react-icons/fa';

const NewsSection = () => {
  return (
    <section id="news" className="news-section">
      <div className="container">
        <div className="news-content">
          <h2>News & Aktuelles</h2>
          <p>Du willst mehr erfahren?</p>
          
          <div className="social-media">
            <div className="social-item">
              <FaInstagram className="social-icon" />
              <div>
                <h3>Auf Instagram</h3>
                <p>halten wir dich auf dem Laufenden, was im Garten gerade passiert.</p>
              </div>
            </div>
            
            <div className="social-item">
              <FaFacebook className="social-icon" />
              <div>
                <h3>Auf Facebook</h3>
                <p>findest du aktuelle Informationen und Veranstaltungshinweise.</p>
              </div>
            </div>
            
            <div className="social-item">
              <FaBook className="social-icon" />
              <div>
                <h3>Wissenschaftliche Texte</h3>
                <p>zu Themen rund um Garten, Permakultur und Pflanzen.</p>
              </div>
            </div>
          </div>
          
          <div className="join-us">
            <div className="join-icon">
              <FaCalendarAlt />
            </div>
            <div className="join-text">
              <h3>Mach mit!</h3>
              <p>Wir treffen uns <strong>dienstags um 12 Uhr</strong>.</p>
              <p>Komm gerne vorbei und werde Teil unseres Projekts!</p>
            </div>
          </div>
          
          <div className="reminder-box">
            <p>Und denkt dran:</p>
            <h3>Kleinigkeiten naschen ist okay – aber großer Ernteklau tut weh.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;