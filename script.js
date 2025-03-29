// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀';
  } else {
    toggleButton.textContent = '🌙';
  }
});

// Scroll Animation
const sections = document.querySelectorAll('.section');
const projects = document.querySelectorAll('.project-fade');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.2;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });

  projects.forEach((project, index) => {
    const projectTop = project.getBoundingClientRect().top;
    if (projectTop < triggerBottom) {
      setTimeout(() => {
        project.classList.add('visible');
      }, index * 200); // Staggered effect
    }
  });
});

// Text Animation
document.addEventListener('DOMContentLoaded', () => {
  const texts = document.querySelectorAll('.animated-text');

  texts.forEach(text => {
    const content = text.textContent;
    text.textContent = '';
    content.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = (index * 50) + 'ms';
      text.appendChild(span);
    });
  });
});