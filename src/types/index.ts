export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type ProjectStatus = 'published' | 'in-development';

export type ProjectFeature = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  featureCards: ProjectFeature[];
  challenges: string[];
  lessons: string[];
  developmentNotes: string[];
  links?: {
    playStore?: string;
    github?: string;
    demo?: string;
  };
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export type TimelineItem = {
  id: string;
  title: string;
  description?: string;
};

export type ContactMethod = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
};
