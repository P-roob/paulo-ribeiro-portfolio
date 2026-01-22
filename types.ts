
export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  tags: string[];
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Avançado' | 'Intermediário' | 'Básico' }[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}
