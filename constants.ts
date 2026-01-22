
import { Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Paulo Ribeiro",
  titles: ["Visual Designer", "UI/UX Designer", "Front-End Developer"],
  location: "Uberlândia - Brasil",
  phone: "+55 34 99925-6991",
  email: "pauloribeiro.sb@gmail.com",
  website: "pauloribeiro.me",
  github: "https://github.com/P-roob",
  linkedin: "https://linkedin.com/in/paulorrs",
  summary: "Designer visual com mais de 13 anos de experiência em branding, UI e projetos digitais. Após uma trajetória sólida em design, estou direcionando minha carreira para Front-End Development, estudando e aplicando conceitos de interface, usabilidade e desenvolvimento para web. Busco oportunidades junior ou trainee em front-end, onde possa unir minha base em design, UI e experiência do usuário ao desenvolvimento de produtos digitais em times multidisciplinares."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Eternità Luxury Piercing",
    role: "Sênior Designer",
    location: "Bruxelas, Bélgica",
    period: "Set/2024 — Ago/2025",
    tags: ["Design Gráfico", "Branding", "Social Media", "E-commerce", "UX/UI", "Planejamento"],
    responsibilities: [
      "Criação de campanhas visuais para social media e mídia paga (Meta & Google)",
      "Redesign da identidade visual da marca",
      "Desenvolvimento de e-commerce (Shopify), atuando em UX/UI e fluxo de navegação",
      "Planejamento estratégico de campanhas de venda para loja física e online",
      "Coordenação de entregas com equipe de front-end e social media"
    ]
  },
  {
    company: "Tailor Inteligência",
    role: "Sênior Designer",
    location: "Uberlândia, Brasil",
    period: "Fev/2019 — Ago/2024",
    tags: ["Design Gráfico", "Branding", "Social Media", "Web Design", "UX/UI", "Motion Graphics", "Fotografia"],
    responsibilities: [
      "Direção de arte para campanhas publicitárias",
      "Projetos de branding",
      "Criação de interfaces para landing pages e hotsites",
      "Desenvolvimento de key visuals e assets para social media",
      "Diagramação de conteúdos, apresentações e materiais editoriais",
      "Produção fotográfica, tratamento de imagem e materiais impressos",
      "Storyboards e animações em motion design"
    ]
  },
  {
    company: "Studio LEP",
    role: "Graphic Design & Food Photographer",
    location: "Cremona, Itália",
    period: "Set/2024 — Ago/2025",
    tags: ["Design Gráfico", "Branding", "Social Media", "Fotografia"],
    responsibilities: [
      "Direção de arte para o setor alimentício",
      "Criação de cardápios impressos e digitais",
      "Fotografia de alimentos e produtos",
      "Identidade visual e campanhas promocionais para restaurantes"
    ]
  },
  {
    company: "Fórmula P Comunicação",
    role: "Art Director Pleno",
    location: "Uberlândia, Brasil",
    period: "Jan/2017 — Dez/2017",
    tags: ["Design Gráfico", "Branding", "Social Media", "Produção Gráfica"],
    responsibilities: [
      "Desenvolvimento de campanhas visuais para mídia impressa e digital",
      "Criação de identidades visuais e peças publicitárias",
      "Edição e finalização de layouts",
      "Apoio na padronização visual de marcas em diferentes canais"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Design Skills",
    skills: [
      { name: "Photoshop", level: "Avançado" },
      { name: "Illustrator", level: "Avançado" },
      { name: "Figma", level: "Avançado" },
      { name: "Indesign", level: "Avançado" },
      { name: "Dimension 3D", level: "Intermediário" },
      { name: "Canva", level: "Avançado" },
      { name: "PowerPoint", level: "Avançado" }
    ]
  },
  {
    title: "Motion & Photo Skills",
    skills: [
      { name: "After Effects", level: "Intermediário" },
      { name: "Premiere Pro", level: "Intermediário" },
      { name: "Lightroom", level: "Avançado" },
      { name: "Capcut", level: "Avançado" }
    ]
  },
  {
    title: "Web & Front Skills",
    skills: [
      { name: "VS Code", level: "Básico" },
      { name: "HTML", level: "Básico" },
      { name: "CSS", level: "Básico" },
      { name: "JavaScript", level: "Básico" },
      { name: "React", level: "Básico" },
      { name: "Next.js", level: "Básico" },
      { name: "Git", level: "Básico" }
    ]
  },
  {
    title: "AI Tools",
    skills: [
      { name: "Framer", level: "Intermediário" },
      { name: "Aistudio", level: "Intermediário" },
      { name: "GPT", level: "Avançado" },
      { name: "Midjourney", level: "Avançado" },
      { name: "Firefly", level: "Avançado" }
    ]
  }
];

export const LANGUAGES = [
  { name: "Português", level: "Nativo" },
  { name: "Italiano", level: "Avançado" },
  { name: "Inglês", level: "Intermediário" }
];

export const EDUCATION = {
  institution: "ESAMC Uberlândia",
  degree: "Bacharelado em Publicidade e Propaganda",
  period: "2014 — 2018"
};
