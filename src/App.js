// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrinciplesSection from './components/PrinciplesSection';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import GardenForAll from './components/GardenForAll';
import DesignElements from './components/DesignElements';
import NewsSection from './components/NewsSection';
import ThanksSection from './components/ThanksSection';
import Footer from './components/Footer';
import FoodForestPage from './pages/FoodForestPage';
import BarfussPfadPage from './pages/BarfussPfadPage';
import HochbeetePage from './pages/HochbeetePage';
import './App.css';

function Home() {
  return (
    <>
      <WelcomeSection />
      <GardenForAll />
      <AboutSection />
      <PrinciplesSection />
      <DesignElements />
      <NewsSection />
      <ThanksSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food-forest" element={<FoodForestPage />} />
            <Route path="/barfuss-pfad" element={<BarfussPfadPage />} />
            <Route path="/hochbeete" element={<HochbeetePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;