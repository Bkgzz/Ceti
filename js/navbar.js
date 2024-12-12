document.addEventListener('DOMContentLoaded', () => {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarLinks = document.getElementById('navbarLinks');

  navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar-container')) {
      navbarLinks.classList.remove('active');
    }
  });

  // Close menu when clicking on a link
  navbarLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbarLinks.classList.remove('active');
    });
  });
});