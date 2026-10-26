// Skills grouped by category, exactly as in the resume (CV_JazerTorres.pdf, updated Oct 2026).
// No percentages or levels on purpose: a plain list is more honest and easier to scan.
// Order matters: backend-related categories come first because that is the target role.

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    items: ['Java', 'SQL', 'JavaScript'],
  },
  {
    name: 'Backend',
    items: [
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'JWT',
      'REST APIs',
      'Microservices',
      'Swagger/OpenAPI',
    ],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'Sybase', 'Oracle', 'SQL Server', 'Redis'],
  },
  {
    name: 'Testing & Quality',
    items: ['JUnit', 'Mockito', 'Postman', 'SonarQube', 'Checkmarx'],
  },
  {
    name: 'DevOps & Tools',
    items: ['Git', 'GitHub Actions', 'Maven', 'OpenShift', 'JasperReports', 'Jira'],
  },
  {
    name: 'AI-Assisted Engineering',
    items: ['Claude', 'Prompt and workflow design', 'GitHub Actions automation'],
  },
  {
    name: 'Practices',
    items: [
      'Agile/Scrum',
      'Code reviews',
      'Incident response',
      'Technical documentation',
    ],
  },
];
