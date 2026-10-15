// Professional experience, most recent first. Source: resume (CV.pdf).
// `confirmed` / `validated` stay false until the information is verified. While false,
// the page shows a visible "pending" badge so unverified data is not published by accident.

export interface Metric {
  // What was measured, so the numbers are not ambiguous
  label: string;
  from: string;
  to: string;
  reduction?: string;
  confirmed: boolean;
}

export interface CaseStudy {
  title: string;
  summary: string;
  tags: string[];
  metric?: Metric;
  // Shows the confidentiality note (used for case studies from private company work)
  generalized?: boolean;
  validated: boolean;
}

export interface Position {
  title: string;
  period: string;
}

export interface Job {
  company: string;
  location: string;
  // Most recent first
  positions: Position[];
  summary?: string;
  technologies?: string[];
  highlights?: string[];
  caseStudies: CaseStudy[];
}

export const jobs: Job[] = [
  {
    company: 'Banregio / Hey Banco',
    location: 'Monterrey, Nuevo León, Mexico',
    positions: [
      { title: 'Backend Developer Jr', period: 'Nov 2024 – Aug 2026' },
      { title: 'Backend Developer Intern', period: 'Jan 2024 – Nov 2024' },
    ],
    summary: 'Backend engineering for internal banking automation.',
    technologies: [
      'Java 11',
      'Spring Boot',
      'Spring Data JPA',
      'Microservices',
      'OpenShift',
      'GitHub Actions',
      'JUnit',
      'Mockito',
      'SonarQube',
      'Checkmarx',
    ],
    highlights: [
      'Developed and maintained 10+ Java 11 / Spring Boot microservices, REST APIs and backend components, covering business logic, persistence, validation, exception handling and scheduled processes.',
      'Created 1 tool and optimized 8+ solutions within Toolbox, an internal platform of ~30 process-automation tools, and refactored an authentication flow after a user-type deprecation across multiple microservices.',
      'Supported a production High Availability initiative across Hey Banco and Banregio: coordinated standardized configuration adoption across dozens of teams and repositories, validated YAML/OpenShift configurations and troubleshot deployment issues.',
      'Diagnosed issues across microservice and database layers, wrote unit tests with JUnit and Mockito, and addressed quality and security findings from SonarQube and Checkmarx.',
    ],
    caseStudies: [
      {
        title: 'Reporting / Toolbox Automation',
        summary:
          'Automated usage reporting for Toolbox, an internal platform of ~30 process-automation tools, with daily, weekly and monthly metrics and charts.',
        tags: ['Automation', 'Reporting', 'Metrics'],
        metric: {
          label: 'Report generation time',
          from: '~30 min',
          to: '4 min',
          reduction: '~87% less time',
          confirmed: true,
        },
        generalized: true,
        validated: true,
      },
      {
        title: 'AI Documentation Proof of Concept',
        summary:
          'Implemented and optimized a proof of concept for an AI-assisted documentation pipeline using Claude, GitHub Actions and multi-repository workflows.',
        tags: ['Claude', 'GitHub Actions', 'YAML', 'Automation'],
        metric: {
          label: 'Agent execution time',
          from: '~15 min',
          to: '~5–7 min',
          confirmed: true,
        },
        generalized: true,
        validated: true,
      },
    ],
  },
  {
    company: 'OneCard',
    location: 'Mexico',
    positions: [
      { title: 'Front-End Developer Intern', period: 'Jan 2022 – Jul 2023' },
    ],
    summary: 'Developed administrative web functionality.',
    caseStudies: [
      {
        title: 'Production Transaction Monitor',
        summary:
          'A production transaction-monitoring application that consumes REST APIs and integrates with SQL Server. It includes 4 Chart.js visualizations and alerts for consecutive failed transactions.',
        tags: ['REST APIs', 'SQL Server', 'Chart.js'],
        generalized: true,
        validated: true,
      },
    ],
  },
  {
    company: 'Universidad de Montemorelos',
    location: 'Montemorelos, Nuevo León, Mexico',
    positions: [
      {
        title: 'Software Developer Intern (Part-Time)',
        period: 'Aug 2019 – Dec 2021',
      },
    ],
    summary:
      'Part-time role supporting systems used by university staff and academic operations.',
    technologies: [
      'Java',
      'Spring Boot',
      'JPA / Hibernate',
      'JavaScript',
      'Oracle',
    ],
    highlights: [
      'Contributed to ~3 internal applications and 20+ features.',
    ],
    caseStudies: [],
  },
];
