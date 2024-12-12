import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import './styles/global.css';
import './styles/footer.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Contact />
      
      <footer className="footer">
        <div className="container">
          <p>© 2024 CETI Desembargador José de Arimathéa Tito. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;