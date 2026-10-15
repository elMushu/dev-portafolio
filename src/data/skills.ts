// Skills grouped by category. Source: resume (CV.pdf).
// No percentages or levels on purpose: a plain list is more honest and easier to scan.

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  { name: 'Languages', items: ['Java', 'SQL', 'JavaScript', 'TypeScript'] },
  {
    name: 'Backend',
    items: [
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'Redis', 'Sybase', 'SQL Server', 'Oracle'],
  },
  {
    name: 'Testing & Quality',
    items: ['JUnit', 'Mockito', 'SonarQube', 'Checkmarx'],
  },
  {
    name: 'Platforms & Tools',
    items: ['OpenShift', 'Maven', 'Git', 'GitHub Actions', 'CI/CD', 'YAML'],
  },
];
