import React from 'react';
import '../styles/courses.css';

const courses = [
  {
    title: "Ensino Médio Regular",
    description: "Formação completa com base nacional comum curricular",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Técnico em Informática",
    description: "Desenvolvimento de sistemas e manutenção de computadores",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Técnico em Administração",
    description: "Gestão empresarial e empreendedorismo",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

const Courses = () => {
  return (
    <section id="cursos" className="section courses">
      <div className="container">
        <h2 className="section-title">Nossos Cursos</h2>
        <p className="section-subtitle">
          Oferecemos ensino médio integrado ao técnico com diferentes especializações
        </p>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;