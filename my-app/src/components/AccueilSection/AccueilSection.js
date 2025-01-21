import React from 'react';
import landingImage from '../../assets/logoland.png';
import './AccueilSection.css';

const AccueilSection = () => {
  return (
    <section className="section section-accueil" id="accueil">
      <main className="main-content accueil-content">
        <div className="text-content">
          <h1>
            Créez des devis professionnels <br />
            <span className="highlight">en quelques clics</span>
          </h1>
          <p>
            Simplifiez votre processus de devis avec notre application intuitive et puissante.
          </p>
          <button className="cta-button">Essai gratuit de 14 jours</button>
        </div>
        <div className="image-content">
          <img
            src={landingImage}
            alt="Illustration de devis professionnels"
            className="landing-image"
          />
        </div>
      </main>
    </section>
  );
};

export default AccueilSection;