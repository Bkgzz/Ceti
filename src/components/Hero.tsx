import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="hero-image"
          alt="CETI School"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            CETI Desembargador José de Arimathéa Tito
          </h1>
          <p className="hero-subtitle">
            Educação de qualidade em Piripiri-PI
          </p>
          <a href="#sobre" className="button button-primary">
            Conheça nossa escola
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;