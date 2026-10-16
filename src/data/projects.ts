// Independent / personal projects. Professional work lives in experience.ts.
// Only add a project here when it really exists. While the list is empty,
// the Projects section shows a "loading" placeholder; it disappears on its own
// as soon as the first project is added.

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

export const projects: Project[] = [];
