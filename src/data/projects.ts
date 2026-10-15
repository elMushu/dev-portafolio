// Independent / personal projects. Professional work lives in experience.ts.
// Only add a project here when it really exists. Status shows where it is today.

export type ProjectStatus = 'In Progress' | 'Planned' | 'Completed';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    // TODO: replace with the real project name and description once it is defined
    title: 'First backend project',
    description:
      'Independent work focused on backend engineering. It will be documented as a full case study: problem, architecture, technical decisions, testing and learnings.',
    status: 'Planned',
    // Topics under consideration, not a commitment
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kafka'],
  },
];
