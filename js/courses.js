document.addEventListener('DOMContentLoaded', () => {
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

  const coursesGrid = document.getElementById('coursesGrid');
  
  courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.innerHTML = `
      <img src="${course.image}" alt="${course.title}" class="course-image">
      <div class="course-content">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      </div>
    `;
    coursesGrid.appendChild(courseCard);
  });
});