// Professional experience, most recent first.
// Sources: resume (CV.pdf) and CLAUDE.md (portfolio context). Do not add facts that are not in them.
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
  // Context: what this work was about, in one or two sentences
  summary: string;
  // Responsibilities and actions ("what I did"), kept apart from the outcome
  contribution?: string[];
  tags: string[];
  metric?: Metric;
  // Outcome in words, for results without a before/after number
  outcome?: string;
  // Shows the confidentiality note (used for case studies from private company work)
  generalized?: boolean;
  validated: boolean;
}

export interface Position {
  title: string;
  period: string;
}

// Key contributions are grouped by theme so they are easy to scan
export interface HighlightGroup {
  theme: string;
  items: string[];
}

export interface Job {
  company: string;
  location: string;
  industry?: string;
  // Most recent first
  positions: Position[];
  summary?: string;
  technologies?: string[];
  highlights?: HighlightGroup[];
  caseStudies: CaseStudy[];
  // How the role and the person evolved
  growth?: string;
}

export const jobs: Job[] = [
  {
    company: 'Banregio / Hey Banco',
    location: 'Monterrey, Nuevo León, Mexico',
    industry: 'Financial Services / Banking Technology',
    positions: [
      { title: 'Backend Developer Jr', period: 'Nov 2024 – Aug 2026' },
      { title: 'Backend Developer Intern', period: 'Jan 2024 – Nov 2024' },
    ],
    summary:
      'I joined as a Backend Developer Intern and grew into a Backend Developer Jr role, working on Java and Spring Boot microservices in a banking technology environment and taking on more autonomy and responsibility along the way.',
    technologies: [
      'Java 11',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate / JPA',
      'REST APIs',
      'Microservices',
      'SQL',
      'PostgreSQL',
      'Sybase',
      'Redis',
      'JUnit',
      'Mockito',
      'SonarQube',
      'Checkmarx',
      'OpenShift',
      'GitHub Actions',
      'YAML',
      'Claude',
    ],
    highlights: [
      {
        theme: 'Microservices development',
        items: [
          'Took part in the development, maintenance and evolution of more than 10 microservices, REST APIs and backend components with Java 11, Spring Boot, Spring Data JPA and Hibernate / JPA. The work covered business logic, persistence, validation, exception handling and scheduled processes, using PostgreSQL, Sybase and Redis.',
        ],
      },
      {
        theme: 'Authentication modernization',
        items: [
          'Participated in refactoring an authentication flow after a legacy user type was removed. The change reached business logic, REST endpoints, persistence, database interactions and error handling across multiple microservices, and the existing scenarios for the different customer types had to keep working.',
        ],
      },
      {
        theme: 'Testing and software quality',
        items: [
          'Wrote unit tests with JUnit and Mockito and took part in integration and regression testing, including testing matrices. Debugged issues across microservice and database layers and addressed quality and security findings from SonarQube and Checkmarx.',
        ],
      },
      {
        theme: 'Production support and collaboration',
        items: [
          'Debugging, troubleshooting and production support were part of the role, together with collaboration with other teams. I took part in code reviews, estimation, refinement, planning, daily meetings, retrospectives, demos and releases while the team grew from approximately 10 to 15 people.',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Process Automation & Toolbox Reporting',
        summary:
          'Toolbox is an internal platform made up of approximately 30 process-automation tools. My work on it focused on automating processes that previously required manual database modifications and queries.',
        contribution: [
          'Created 1 new tool and optimized more than 8 existing tools and solutions, working mainly with Java, Spring Boot, SQL, PostgreSQL and Sybase.',
          'Automated the generation of a Toolbox usage report with daily, weekly and monthly metrics, plus charts and visualizations, using Java, Spring Boot, Java Swing and JasperReports.',
        ],
        tags: ['Java', 'Spring Boot', 'Java Swing', 'JasperReports', 'Reporting'],
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
        title: 'AI-Assisted Documentation Pipeline',
        summary:
          'A proof of concept for centralizing technical and business documentation across multiple repositories and services, using AI assistance.',
        contribution: [
          'Worked on YAML service configurations, prompts, workflows and multi-repository automation, using Claude, GitHub and GitHub Actions to generate centralized documentation such as READMEs and other documents.',
        ],
        tags: [
          'Claude',
          'GitHub',
          'GitHub Actions',
          'YAML',
          'Multi-repository workflows',
        ],
        metric: {
          label: 'Agent execution time',
          from: '~15 min',
          to: '~5–7 min',
          reduction: '~53–67% less time',
          confirmed: true,
        },
        generalized: true,
        validated: true,
      },
      {
        title: 'High Availability Initiative',
        summary:
          'A production High Availability initiative involving Banregio and Hey Banco, coordinated across multiple repositories and teams.',
        contribution: [
          'Validated YAML configurations for OpenShift and troubleshot deployment-related issues.',
          'Supported the adoption of standardized configuration across multiple repositories and teams.',
        ],
        tags: ['OpenShift', 'YAML', 'Troubleshooting'],
        generalized: true,
        validated: true,
      },
    ],
    growth:
      'I started as an intern and progressively gained autonomy and responsibility until I became a Backend Developer Jr. Along the way I developed ownership, troubleshooting, technical communication and cross-functional collaboration, and deepened my experience in backend development and process automation.',
  },
  {
    company: 'OneCard',
    location: 'Mexico',
    industry: 'Financial Technology / Prepaid Cards',
    positions: [
      { title: 'Front-End Developer Intern', period: 'Jan 2022 – Jul 2023' },
    ],
    summary:
      'A part-time internship of approximately 1 year and 7 months, done while I was studying. I took part in approximately 5 internal projects and functionalities, getting hands-on experience with REST API integration, SQL Server and Front-End development in a financial technology environment.',
    technologies: [
      'REST APIs',
      'JSON',
      'HTTP',
      'SQL',
      'SQL Server',
      'JavaScript',
      'AJAX',
      'jQuery',
      'HTML',
      'CSS',
      'Bootstrap',
      'Chart.js',
      'Git',
    ],
    highlights: [
      {
        theme: 'REST API integration',
        items: [
          'Consumed and integrated REST APIs, working with endpoints, parameters, payloads, JSON, HTTP status codes, and response and error handling. I coordinated directly with a Backend Developer on these integrations.',
        ],
      },
      {
        theme: 'Database work',
        items: [
          'Worked with SQL Server using SELECT, JOIN, INSERT, UPDATE and DELETE statements, as well as validation queries.',
        ],
      },
      {
        theme: 'Administrative functionality',
        items: [
          'Worked on administrative forms and validations, worked with PDF reports, and took part in debugging, demos, code reviews and presentations.',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Transaction Monitoring Application',
        summary:
          'An internal production application used for near-real-time monitoring of OneCard product transactions. I worked on its Front-End.',
        contribution: [
          'Built 4 Chart.js visualizations showing information such as successful transactions, failed transactions, transaction volume and recent transaction activity. The monitor displayed approximately 3 hours of transaction history.',
          'Integrated the application with REST APIs and SQL Server.',
          'Implemented visual and sound alerts that trigger after more than 5 consecutive failed transactions.',
        ],
        tags: ['Chart.js', 'REST APIs', 'SQL Server'],
        generalized: true,
        validated: true,
      },
    ],
    growth:
      'This stage gave me practical exposure to financial systems, REST API integration, SQL, transaction monitoring and the collaboration between Front-End and Backend teams.',
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
      'Java 11',
      'Spring Boot',
      'Spring MVC',
      'JPA / Hibernate',
      'Maven',
      'SQL',
      'Oracle',
      'JavaScript',
      'HTML',
      'CSS',
      'jQuery',
      'Bootstrap',
      'Thymeleaf',
      'AJAX',
    ],
    highlights: [
      {
        theme: 'Internal applications',
        items: ['Contributed to ~3 internal applications and 20+ features.'],
      },
    ],
    caseStudies: [],
  },
];
