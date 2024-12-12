import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contato" className="section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos à disposição para atender você
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <MapPin className="contact-icon" />
            <h3 className="contact-title">Endereço</h3>
            <p className="contact-text">
              Rua Principal, Centro<br />
              Piripiri, PI
            </p>
          </div>

          <div className="contact-card">
            <Phone className="contact-icon" />
            <h3 className="contact-title">Telefone</h3>
            <p className="contact-text">
              (86) XXXX-XXXX
            </p>
          </div>

          <div className="contact-card">
            <Mail className="contact-icon" />
            <h3 className="contact-title">E-mail</h3>
            <p className="contact-text">
              contato@cetiarimatheatito.edu.br
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;