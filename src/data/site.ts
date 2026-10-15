export const site = {
  name: 'Jazer Torres',
  role: 'Software Engineer',
  description:
    'Jazer Torres is a Software Engineer focused on Java backend, Spring Boot and distributed systems.',
  email: 'eryjazer@gmail.com',
  github: 'https://github.com/elMushu',
  linkedin: 'https://www.linkedin.com/in/eryjazer/',
  resume: '/resume/CV.pdf',
} as const;

export const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
] as const;
