import React from 'react';
import { BookOpen, Users, Trophy } from 'lucide-react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <h2 className="section-title">Sobre Nossa Escola</h2>
        <p className="section-subtitle">
          Uma instituição comprometida com a excelência em educação e formação integral dos alunos
        </p>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon-wrapper">
              <BookOpen className="about-icon" />
            </div>
            <h3 className="about-card-title">Ensino de Qualidade</h3>
            <p className="about-card-text">
              Oferecemos uma educação de excelência com professores qualificados e metodologias inovadoras
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon-wrapper">
              <Users className="about-icon" />
            </div>
            <h3 className="about-card-title">Comunidade Escolar</h3>
            <p className="about-card-text">
              Valorizamos a integração entre alunos, professores e famílias para um ambiente escolar harmonioso
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon-wrapper">
              <Trophy className="about-icon" />
            </div>
            <h3 className="about-card-title">Reconhecimento</h3>
            <p className="about-card-text">
              Nossa escola é referência em educação pública no estado do Piauí
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;