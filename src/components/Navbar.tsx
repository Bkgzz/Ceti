import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-brand">
          <GraduationCap size={32} />
          <span>CETI Arimathéa Tito</span>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="navbar-links">
          <a href="#inicio" className="navbar-link">Início</a>
          <a href="#sobre" className="navbar-link">Sobre</a>
          <a href="#cursos" className="navbar-link">Cursos</a>
          <a href="#estrutura" className="navbar-link">Estrutura</a>
          <a href="#noticias" className="navbar-link">Notícias</a>
          <a href="#contato" className="navbar-link">Contato</a>
        </div>

        {isOpen && (
          <div className="navbar-menu">
            <a href="#inicio" className="navbar-link">Início</a>
            <a href="#sobre" className="navbar-link">Sobre</a>
            <a href="#cursos" className="navbar-link">Cursos</a>
            <a href="#estrutura" className="navbar-link">Estrutura</a>
            <a href="#noticias" className="navbar-link">Notícias</a>
            <a href="#contato" className="navbar-link">Contato</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;