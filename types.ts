export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  date: string;
  features: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}