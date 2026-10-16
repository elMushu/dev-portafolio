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
      'Backend engineering on Java and Spring Boot microservices in a banking technology environment, growing from Backend Developer Intern to Backend Developer Jr with increasing autonomy and responsibility.',
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
          'Contributed to the development, maintenance and evolution of more than 10 microservices, REST APIs and backend components with Java 11, Spring Boot, Spring Data JPA and Hibernate / JPA. The work covered business logic, persistence, validation, exception handling and scheduled processes, using PostgreSQL, Sybase and Redis.',
        ],
      },
      {
        theme: 'Authentication modernization',
        items: [
          'Part of the effort to refactor an authentication flow after a legacy user type was removed. The change reached business logic, REST endpoints, persistence, database interactions and error handling across multiple microservices, and the existing scenarios for the different customer types had to keep working.',
        ],
      },
      {
        theme: 'Testing and software quality',
        items: [
          'Unit testing with JUnit and Mockito, plus integration and regression testing that included testing matrices. Issues were debugged across microservice and database layers, and quality and security findings from SonarQube and Checkmarx were addressed.',
        ],
      },
      {
        theme: 'Production support and collaboration',
        items: [
          'Debugging, troubleshooting and production support were part of the role, together with collaboration with other teams and participation in code reviews, estimation, refinement, planning, daily meetings, retrospectives, demos and releases, while the team grew from approximately 10 to 15 people.',
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
      'Moving from intern to Backend Developer Jr meant gradually taking on more autonomy and responsibility. Ownership, troubleshooting, technical communication and cross-functional collaboration developed along the way, together with deeper experience in backend development and process automation.',
  },
  {
    company: 'OneCard',
    location: 'Mexico',
    industry: 'Financial Technology / Prepaid Cards',
    positions: [
      { title: 'Front-End Developer Intern', period: 'Jan 2022 – Jul 2023' },
    ],
    summary:
      'A part-time internship of approximately 1 year and 7 months, done alongside my studies. It spanned approximately 5 internal projects and functionalities, with hands-on work in REST API integration, SQL Server and Front-End development in a financial technology environment.',
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
          'Consumed and integrated REST APIs, working with endpoints, parameters, payloads, JSON, HTTP status codes, and response and error handling. Integrations were coordinated directly with a Backend Developer.',
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
          'An internal production application used for near-real-time monitoring of OneCard product transactions. My part was its Front-End.',
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
      'Practical exposure to financial systems, REST API integration, SQL, transaction monitoring and the collaboration between Front-End and Backend teams.',
  },
  {
    company: 'Universidad de Montemorelos',
    location: 'Montemorelos, Nuevo León, Mexico',
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
          "The main contribution was to the university's Academic System, used daily by students, professors, employees and administrative departments. Work also reached the Asset Management System and approximately one additional institutional system.",
        ],
      },
      {
        theme: 'Backend and frontend development',
        items: [
          'Work in a monolithic MVC architecture covering business logic, validation, repositories, entities, exception handling, document generation and maintenance of existing applications, together with the development and redesign of administrative screens, forms, UI components and asynchronous interactions.',
        ],
      },
      {
        theme: 'Requirements and collaboration',
        items: [
          'Meetings with Finance and other areas to understand business needs, then working with the development team to translate them into functional and technical changes, in a team of approximately 6 people that included developers, interns and a team lead.',
        ],
      },
    ],
    caseStudies: [],
    growth:
      'The work moved from highly guided tasks toward more complex requirements and greater participation in evaluating solutions. This stage set the professional foundations in Java, Spring, databases, persistence and Full Stack development, and it is where the interest in specializing in Backend Engineering began.',
  },
];
