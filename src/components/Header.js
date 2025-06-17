// src/components/Header.js
import React, { useState } from 'react';
import { FaSeedling, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <FaSeedling className="logo-icon" />
          <h1>BOase Hochschulgarten</h1>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#welcome">Willkommen</a></li>
            <li><a href="#garden">Der Garten</a></li>
            <li><a href="#about">Permakultur</a></li>
            <li><a href="#principles">Prinzipien</a></li>
            
            
            
            <li><a href="#design">Gestaltung</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;