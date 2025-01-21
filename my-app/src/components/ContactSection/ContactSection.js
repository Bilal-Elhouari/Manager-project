import React from 'react';
import './ContactSection.css'; // Importez le CSS spécifique
import { FiUsers } from "react-icons/fi";
import { BsFillBox2Fill } from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { ImCalculator } from "react-icons/im";


const ContactSection = () => {
  return (
    <section className="section section-contact" id="contact">
      <div className="section-title">
        <h1>Ce que nous offrons</h1>
      </div>

      <section class="cards-container">

          <div class="card">
            <FiUsers class="card-icon" />
            <h2>CONTACTS</h2>
            <p>Export PDF et envoi par e-mail</p>
          </div>

          <div class="card">
            <BsFillBox2Fill class="card-icon" />
            <h2>PRODUITS</h2>
            <p>GÉREZ VOS PRODUITS ET VOTRE STOCK</p>
          </div>
          
          <div class="card">
            <FaRegFolderOpen class="card-icon" />
            <h2>PROJETS</h2>
            <p>Tableau de bord pour suivre les performances de votre entreprise.</p>
          </div>

          <div class="card">
            <GrMoney class="card-icon" />
            <h2>VENTE ET ACHAT</h2>
            <p>Création de devis en quelques clics</p>
          </div>

          <div class="card">
            <ImCalculator class="card-icon" />
            <h2>COMPTABILITÉ</h2>
            <p>Gestion simplifiée des factures</p>
          </div>
</section>
    </section>
  );
};

export default ContactSection;