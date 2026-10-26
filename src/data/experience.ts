// Professional experience, most recent first.
// Source of truth: the resume (CV_JazerTorres.pdf, updated Oct 2026). Where this file adds detail,
// it comes from CLAUDE.md and does not contradict the resume. Keep docs/portfolio-text.md in sync.
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
  // Responsibilities and actions ("what was done"), kept apart from the outcome
  contribution?: string[];
  tags: string[];
  metric?: Metric;
  // Outcome in words, for results without a before/after number
  outcome?: string;
  // Shows a confidentiality note on the card. Off now: the note lives once in the section intro.
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
  workMode?: 'On-site' | 'Hybrid' | 'Remote';
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
    workMode: 'Remote',
    industry: 'Financial Services / Banking Technology',
    positions: [
      { title: 'Junior Backend Developer', period: 'Nov 2024 – Aug 2026' },
      { title: 'Backend Developer Intern', period: 'Jan 2024 – Nov 2024' },
    ],
    summary:
      'Backend engineering in banking: Java and Spring Boot microservices, REST APIs and internal automation tools, growing from Backend Developer Intern to Junior Backend Developer with increasing autonomy and responsibility.',
    technologies: [
      'Java 11',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'Microservices',
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
          'Developed and maintained 10+ Java 11/Spring Boot microservices and REST APIs for Toolbox, an internal platform of ~30 automation tools available to 500+ developers (100–200 active users), with persistence in PostgreSQL, Sybase, and Redis.',
        ],
      },
      {
        theme: 'Customer authentication refactor',
        items: [
          'Refactored the customer authentication flow across ~12 microservices to retire a legacy user type, preserving individual, business, and self-employed customer scenarios; validated with Android/iOS test matrices and released to all environments.',
        ],
      },
      {
        theme: 'Testing, quality and production support',
        items: [
          'Wrote unit, integration, and regression tests (JUnit, Mockito), resolved SonarQube and Checkmarx findings, and backed up production incident response and deployments within a 10–15 person Scrum team.',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Process Automation & Toolbox Reporting',
        summary:
          'Toolbox is an internal platform of ~30 automation tools available to 500+ developers (100–200 active users). The work focused on replacing manual database queries and updates with faster, less error-prone self-service workflows.',
        contribution: [
          "Built 1 new tool and optimized 8+ existing ones that automate repetitive tasks for the bank's development teams.",
          "Automated Toolbox's daily, weekly, and monthly usage report with Spring Boot, Java Swing, and JasperReports.",
        ],
        tags: [
          'Java',
          'Spring Boot',
          'Java Swing',
          'JasperReports',
          'PostgreSQL',
          'Sybase',
        ],
        metric: {
          label: 'Report generation time',
          from: '~30 min',
          to: '~4 min',
          reduction: '~87% less time',
          confirmed: true,
        },
        validated: true,
      },
      {
        title: 'AI-Assisted Documentation Pipeline',
        summary:
          'A multi-repository AI documentation workflow for 3 internal banking services, planned for bank-wide use.',
        contribution: [
          'Evolved a starter template into a multi-repository AI documentation workflow using Claude, GitHub Actions, and service.yaml.',
        ],
        tags: ['Claude', 'GitHub Actions', 'YAML', 'Multi-repository workflows'],
        metric: {
          label: 'Run time',
          from: '~15 min',
          to: '~5–7 min',
          reduction: '~53–67% less time',
          confirmed: true,
        },
        validated: true,
      },
      {
        title: 'High Availability Initiative',
        summary:
          'A High Availability initiative across Banregio and Hey Banco to standardize YAML/OpenShift microservice configurations.',
        contribution: [
          'Coordinated with multiple development teams to standardize YAML/OpenShift microservice configurations.',
          'Troubleshot deployment issues.',
        ],
        tags: ['OpenShift', 'YAML', 'Cross-team coordination', 'Troubleshooting'],
        validated: true,
      },
    ],
    growth:
      'Moving from intern to Junior Backend Developer meant gradually taking on more autonomy and responsibility: from guided tasks to refactoring the customer authentication flow across ~12 microservices, coordinating configuration work with other teams, evolving an AI documentation workflow, and backing up production incident response.',
  },
  {
    company: 'OneCard',
    location: 'Montemorelos, Nuevo León, Mexico',
    workMode: 'Hybrid',
    industry: 'Financial Technology / Prepaid Cards',
    positions: [
      {
        title: 'Front-End Developer Intern (Part-Time)',
        period: 'Jan 2022 – Jul 2023',
      },
    ],
    summary:
      'A part-time internship of approximately 1 year and 7 months, done alongside university studies. It spanned ~5 internal features, with hands-on work in REST API integration, SQL Server and Front-End development in a financial technology environment.',
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
          'Integrated REST APIs with the backend team, working with endpoints, parameters, payloads, JSON, HTTP status codes, and response and error handling.',
        ],
      },
      {
        theme: 'Database work and administrative features',
        items: [
          'Wrote SQL Server queries for ~5 internal features, including admin forms and PDF reports, using SELECT, JOIN, INSERT, UPDATE and DELETE statements and validation queries.',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Transaction Monitoring Application',
        summary:
          'A production transaction-monitoring app used for near-real-time monitoring of OneCard product transactions. The work centered on its Front-End.',
        contribution: [
          'Built the front end with JavaScript, jQuery, and Chart.js, including 4 near-real-time charts showing successful transactions, failed transactions, transaction volume and recent activity, with approximately 3 hours of transaction history.',
          'Integrated REST APIs with the backend team to display transaction data in near real time.',
          'Implemented visual and sound alerts that trigger after more than 5 consecutive failed transactions.',
        ],
        tags: ['Chart.js', 'JavaScript', 'jQuery', 'REST APIs'],
        validated: true,
      },
    ],
    growth:
      'Practical exposure to financial systems, REST API integration, SQL, transaction monitoring and the collaboration between Front-End and Backend teams.',
  },
  {
    company: 'Universidad de Montemorelos',
    location: 'Montemorelos, Nuevo León, Mexico',
    workMode: 'On-site',
    industry: 'Enterprise / Academic Systems',
    positions: [
      {
        title: 'Software Developer Intern (Part-Time)',
        period: 'Aug 2019 – Dec 2021',
      },
    ],
    summary:
      'The first professional software development experience: a part-time internship of approximately 2 years and 5 months, delivering 20+ features across ~3 internal systems.',
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
        theme: 'Systems',
        items: [
          'Most of the work went into the Academic System, used daily by students, faculty, and staff, with additional work on the Asset Management System and one more institutional system.',
        ],
      },
      {
        theme: 'Backend and frontend development',
        items: [
          'Worked in a monolithic MVC architecture on business logic, validation, repositories, entities, exception handling, document generation and maintenance of existing applications, and developed and redesigned administrative screens, forms, UI components and asynchronous interactions.',
        ],
      },
      {
        theme: 'Requirements and collaboration',
        items: [
          'Translated requirements from Finance and other departments into system changes within a 6-person team that included developers, interns and a team lead.',
        ],
      },
    ],
    caseStudies: [],
    growth:
      'The work moved from highly guided tasks toward more complex requirements and greater participation in evaluating solutions. This stage set the foundations in Java, Spring, databases, persistence and Full Stack development, and it is where the interest in Backend Engineering began.',
  },
];
