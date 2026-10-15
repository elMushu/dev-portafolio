export const site = {
  name: 'Jazer Torres',
  role: 'Software Engineer',
  description:
    'Jazer Torres is a Software Engineer focused on Java backend, Spring Boot and distributed systems.',

  // Actualizar datos
  email: 'eryjazer@gmail.com',
  github: '#',
  linkedin: '#',

  // Actualizar al tener ruta completa
  resume: '#',
} as const;

export const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
] as const;
