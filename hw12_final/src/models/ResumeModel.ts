export type Contact = { email?: string; phone?: string; location?: string };

export interface Project {
  name: string;
  description: string;
  isRecent?: boolean;
}

export interface Experience {
  position: string;
  company: string;
  start: string;
  end: string;
  projects: Project[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  graduation: string;
}

export interface Skills {
  core: string[];
  tools: string[];
  languages: string[];
}

export interface ResumeModel {
  header: { fullName: string; title: string; contacts: Contact };
  summary: { text: string };
  experience: Experience[];
  education: Education[];
  skills: Skills;
}
