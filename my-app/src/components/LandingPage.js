import React, { useState } from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar/Navbar';
import AccueilSection from '../components/AccueilSection/AccueilSection';
import ContactSection from '../components/ContactSection/ContactSection';
import ProduitsSection from '../components/ProduitsSection/ProduitsSection';
import VenteAchatSection from '../components/VenteAchatSection/VenteAchatSection';
import ProjetsSection from '../components/ProjetsSection/ProjetsSection';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`landing-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className="scroll-container">
        <AccueilSection />
        <ContactSection />
        <ProduitsSection />
        <VenteAchatSection />
        <ProjetsSection />
      </div>
    </div>
  );
};

export default LandingPage;