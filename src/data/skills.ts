// Skills grouped by category. Sources: resume (CV.pdf) and CLAUDE.md (portfolio context).
// No percentages or levels on purpose: a plain list is more honest and easier to scan.
// Order matters: backend-related categories come first because that is the target role.

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
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate / JPA',
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
    items: [
      'JUnit',
      'Mockito',
      'Unit testing',
      'Integration testing',
      'Regression testing',
      'SonarQube',
      'Checkmarx',
    ],
  },
  {
    name: 'Platforms & Tools',
    items: [
      'OpenShift',
      'Maven',
      'Git',
      'GitHub',
      'GitHub Actions',
      'CI/CD',
      'YAML',
    ],
  },
  {
    name: 'AI-Assisted Workflows',
    items: ['Claude', 'Documentation automation', 'Multi-repository workflows'],
  },
  {
    name: 'Engineering Practices',
    items: [
      'Code reviews',
      'Estimation & refinement',
      'Planning',
      'Retrospectives',
      'Demos',
      'Releases',
      'Production support',
      'Troubleshooting',
    ],
  },
  {
    name: 'Frontend & Reporting',
    items: [
      'HTML',
      'CSS',
      'AJAX',
      'jQuery',
      'Bootstrap',
      'Thymeleaf',
      'Chart.js',
      'Java Swing',
      'JasperReports',
    ],
  },
];
