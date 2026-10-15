// Professional experience, most recent first.
// Any text starting with "TODO" is a placeholder and is rendered with a placeholder style.
// `confirmed` / `validated` stay false until the information is verified. While false,
// the page shows a visible "pending" badge so unverified data is not published by accident.

export interface Metric {
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

export interface Job {
  company: string;
  role: string;
  period: string;
  summary: string;
  technologies?: string[];
  caseStudies: CaseStudy[];
}

export const jobs: Job[] = [
  {
    company: 'Banregio / Hey Banco',
    // TODO: confirm exact job title
    role: 'Backend / Software Engineer',
    period: 'TODO: dates',
    summary: 'TODO: add a short, verified summary of the role.',
    // Initial list. TODO: confirm which tools belong to each case study before attaching them there.
    technologies: [
      'Java',
      'Spring Boot',
      'Microservices',
      'OpenShift',
      'GitHub Actions',
      'JUnit',
      'Mockito',
      'SonarQube',
      'Checkmarx',
    ],
    caseStudies: [
      {
        title: 'Reporting / Toolbox Automation',
        summary:
          'Reporting automation delivered as part of an internal toolbox of process automation tools.',
        // TODO: confirm technologies used in this case study
        tags: ['Automation', 'Reporting'],
        // TODO: confirm both numbers and the ~30 tools context before publishing
        metric: {
          from: '30 min',
          to: '4 min',
          reduction: '≈ 87% less time',
          confirmed: false,
        },
        generalized: true,
        validated: true,
      },
      {
        title: 'AI Documentation Proof of Concept',
        summary:
          'Proof of concept exploring AI-assisted documentation with Claude, automated through GitHub Actions workflows.',
        tags: ['Claude', 'GitHub Actions', 'YAML', 'Automation'],
        // TODO: confirm the numbers before publishing
        metric: {
          from: '15 min',
          to: '5–7 min',
          confirmed: false,
        },
        generalized: true,
        validated: true,
      },
    ],
  },
  {
    company: 'OneCard',
    role: 'TODO: role',
    period: 'TODO: dates',
    summary: 'TODO: add a short, verified summary of the role.',
    caseStudies: [
      {
        title: 'Production Transaction Monitor',
        summary:
          'A monitoring tool for production transactions. It reads transaction data through REST APIs and SQL Server, shows historical trends with Chart.js, and raises alerts after consecutive failures.',
        tags: ['REST APIs', 'SQL Server', 'Chart.js'],
        // TODO: validate exact contribution
        validated: false,
      },
    ],
  },
  {
    company: 'Universidad de Montemorelos',
    role: 'TODO: role',
    period: 'TODO: dates',
    summary: 'TODO: add verified responsibilities.',
    caseStudies: [],
  },
];
