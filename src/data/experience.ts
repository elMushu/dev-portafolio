// Professional experience, most recent first.
// The wording comes from docs/portfolio-text.md (the approved final text). Keep the two in sync.
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
      { title: 'Backend Developer Jr', period: 'Nov 2024 – Aug 2026' },
      { title: 'Backend Developer Intern', period: 'Jan 2024 – Nov 2024' },
    ],
    summary:
      'Backend engineering on Java and Spring Boot microservices in a banking technology environment, on the Development Architecture team from June 2024. The path ran from Backend Developer Intern to Backend Developer Jr, with increasing autonomy and responsibility.',
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
      'TypeScript',
      'Angular',
      'Claude',
    ],
    highlights: [
      {
        theme: 'Microservices development',
        items: [
          "Contributed to the development, maintenance and evolution of more than 10 microservices, REST APIs and backend components behind Toolbox, an internal platform of approximately 30 process-automation tools used by the bank's development teams. The work covered business logic, persistence, validation, exception handling and scheduled processes, using PostgreSQL, Sybase and Redis.",
        ],
      },
      {
        theme: 'Customer login modernization',
        items: [
          "Removed a legacy user type from the bank's customer login, which serves both individual and business customers, after users were unified under a single access credential. The code that was no longer needed was also cleaned up across the remaining microservices, covering business logic, REST endpoints, persistence, database interactions and error handling. The change was validated with the full test matrix on the Android and iOS apps, checked for no impact on other bank services, and coordinated with the login team and other teams so it could be rolled out across all of the bank's environments.",
        ],
      },
      {
        theme: 'Testing and software quality',
        items: [
          'Wrote unit tests with JUnit and Mockito, ran integration and regression testing with testing matrices, debugged issues across microservice and database layers, and resolved quality and security findings from SonarQube and Checkmarx.',
        ],
      },
      {
        theme: 'Production support and collaboration',
        items: [
          'Debugging, troubleshooting and production support were part of the day-to-day work, including occasionally handling production incidents when the senior developer was unavailable and providing on-call support during application deployments. Participation also covered code reviews, estimation, refinement, planning, daily meetings, retrospectives, demos and releases while the team grew from approximately 10 to 15 people.',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Process Automation & Toolbox Reporting',
        summary:
          "Toolbox is an internal platform of approximately 30 process-automation tools, backed by more than 10 microservices and used by the bank's development teams. The work focused on automating processes that previously required manual database changes and queries.",
        contribution: [
          'Created 1 new tool and optimized more than 8 existing tools and solutions, working mainly with Java, Spring Boot, SQL, PostgreSQL and Sybase.',
          'Worked on Toolbox front-end projects with TypeScript, using an internal framework based on Angular.',
          'Automated the generation of the Toolbox usage report, with daily, weekly and monthly metrics plus charts, using Java, Spring Boot, Java Swing and JasperReports.',
        ],
        tags: [
          'Java',
          'Spring Boot',
          'Java Swing',
          'JasperReports',
          'PostgreSQL',
          'Sybase',
          'TypeScript',
          'Angular',
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
          'A proof of concept for centralizing technical and business documentation from approximately 3 internal services across multiple repositories, using an AI agent.',
        contribution: [
          'Started from an initial prompt that was not producing the expected results and designed a new one, written in English with more precise and restrictive instructions.',
          'Tested instruction variants to find which ones used fewer tokens and processed faster.',
          'Pre-installed skills before each agent run to speed up execution.',
          'Configured YAML service definitions and multi-repository workflows with Claude, GitHub and GitHub Actions to generate centralized documentation such as READMEs.',
        ],
        tags: [
          'Claude',
          'Prompt design',
          'GitHub Actions',
          'YAML',
          'Multi-repository workflows',
        ],
        metric: {
          label: 'Average agent execution time',
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
          'A production High Availability initiative across Banregio and Hey Banco to standardize microservice configurations across many teams and repositories.',
        contribution: [
          'Coordinated and followed up with multiple development teams on the tasks needed to standardize their microservice configurations.',
          'Validated YAML configurations for OpenShift and troubleshot deployment-related issues.',
        ],
        tags: ['OpenShift', 'YAML', 'Cross-team coordination', 'Troubleshooting'],
        validated: true,
      },
    ],
    growth:
      'Moving from intern to Backend Developer Jr meant gradually taking on more autonomy and responsibility: from guided tasks to removing a legacy user type from the customer login, coordinating configuration work with other teams, redesigning an AI documentation workflow, and covering production incidents when needed.',
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
      'A part-time internship of approximately 1 year and 7 months, done alongside university studies. It spanned approximately 5 internal projects and functionalities, with hands-on work in REST API integration, SQL Server and Front-End development in a financial technology environment.',
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
          'Consumed and integrated REST APIs, working with endpoints, parameters, payloads, JSON, HTTP status codes, and response and error handling, coordinating each integration directly with a backend developer.',
        ],
      },
      {
        theme: 'Database work',
        items: [
          'Wrote SQL Server queries using SELECT, JOIN, INSERT, UPDATE and DELETE statements, including validation queries.',
        ],
      },
      {
        theme: 'Administrative functionality',
        items: [
          'Worked on administrative forms, validations and PDF reports, and took part in debugging, demos, code reviews and presentations.',
        ],
      },
    ],
    caseStudies: [
      {
        title: 'Transaction Monitoring Application',
        summary:
          'An internal production application used for near-real-time monitoring of OneCard product transactions. The work centered on its Front-End.',
        contribution: [
          'Built 4 Chart.js visualizations showing successful transactions, failed transactions, transaction volume and recent activity, with approximately 3 hours of transaction history.',
          'Consumed REST APIs to display transaction data in near real time.',
          'Implemented visual and sound alerts that trigger after more than 5 consecutive failed transactions.',
        ],
        tags: ['Chart.js', 'JavaScript', 'REST APIs'],
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
      'The first professional software development experience: a part-time internship of approximately 2 years and 5 months, spanning approximately 3 internal systems and 20+ features and tasks.',
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
          "Most of the work went into the university's Academic System, used daily by students, professors, employees and administrative departments, with additional work on the Asset Management System and one more institutional system.",
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
          'Met with Finance and other areas to understand business needs, then worked with the development team to translate them into functional and technical changes, in a team of approximately 6 people that included developers, interns and a team lead.',
        ],
      },
    ],
    caseStudies: [],
    growth:
      'The work moved from highly guided tasks toward more complex requirements and greater participation in evaluating solutions. This stage set the foundations in Java, Spring, databases, persistence and Full Stack development, and it is where the interest in Backend Engineering began.',
  },
];
