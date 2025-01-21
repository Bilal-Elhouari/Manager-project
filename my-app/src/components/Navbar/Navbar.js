import React from 'react';
import './Navbar.css'; // Importez le CSS spécifique à la Navbar
import logoHead from '../../assets/logoHead.png'; // Importez le logoHead

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logoHead} alt="Logo" className="navbar-logo" />
      </div>
      <ul className="nav-links">
        <li>Accueil</li>
        <li>service</li>
        <li>Tarifs</li>
        <li>Contact</li>
        <li>Connexion</li>
      </ul>
      <div className="theme-icon" onClick={toggleTheme}>
        {isDarkMode ? '☀️' : '🌙'}
      </div>
    </nav>
  );
};

export default Navbar;