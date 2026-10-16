export const site = {
  name: 'Jazer Torres',
  role: 'Backend Software Engineer',
  description:
    'Jazer Torres is a Backend Software Engineer focused on Java, Spring Boot and microservices.',
  location: 'Monterrey, Nuevo León, Mexico',
  email: 'eryjazer@gmail.com',
  github: 'https://github.com/elMushu',
  linkedin: 'https://www.linkedin.com/in/eryjazer/',
  resume: '/resume/CV.pdf',
} as const;

export const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
] as const;
