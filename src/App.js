// src/App.js
import React from 'react';
import Header from './components/Header';
import PrinciplesSection from './components/PrinciplesSection';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import GardenForAll from './components/GardenForAll';
import DesignElements from './components/DesignElements';
import NewsSection from './components/NewsSection';
import ThanksSection from './components/ThanksSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeSection />
        <GardenForAll />
        <AboutSection />
        <PrinciplesSection />
        <DesignElements />
        <NewsSection />
        <ThanksSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;