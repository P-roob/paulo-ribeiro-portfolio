
import { Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Paulo Ribeiro",
  titles: ["Product Designer", "Design Engineer", "UX/UI Designer"],
  location: "Uberlândia, Brasil",
  phone: "+55 34 99925-6991",
  email: "pauloribeiro.sb@gmail.com",
  website: "pauloribeiro.work",
  github: "https://github.com/P-roob",
  linkedin: "https://linkedin.com/in/paulorrs",
  summary: "Com mais de uma década de experiência em design visual e identidade de marca, hoje atuo como UX Designer e Design Engineer. Atuo em todo o fluxo de UX, desde a pesquisa e definição de fluxos, passando por wireframes e prototipação no Figma, até a implementação das telas e design systems com auxílio de ferramentas de IA como Cursor e Claude Code. Essa abordagem me permite ter visão completa do produto, mantendo fidelidade visual e foco na experiência do usuário do início ao fim. Recentemente tenho trabalhado diretamente em produtos digitais, atuando como Design Engineer: projetando, iterando e implementando interfaces com auxílio de IA."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "UserIn",
    role: "Product Design & Design Engineer",
    location: "Remoto",
    period: "Jan 2026 — Presente",
    tags: ["Product Design", "Design Engineer", "UX/UI", "Design System", "React", "AI Tooling", "Linear"],
    responsibilities: [
      "Atuação na interseção entre design de produto e engenharia, do discovery à implementação, responsável pela consistência visual, arquitetura de informação e qualidade das interfaces",
      "Estruturação e evolução do design system, incluindo tokens, componentes e padrões de interface",
      "Design de produto para fluxos de automação, segmentação de usuários e engajamento",
      "Documentação da plataforma voltada para usuários técnicos e analistas operacionais",
      "Implementação de interfaces com React, usando Cursor e Claude Code como ferramentas de desenvolvimento assistido por IA",
      "Gestão de bugs e melhorias via Linear, com geração de relatórios automatizados de QA"
    ]
  },
  {
    company: "Gift Promo",
    role: "Product Designer",
    location: "Remoto",
    period: "Ago 2025 — Jan 2026",
    tags: ["Product Design", "UX/UI", "Figma", "React", "Tailwind CSS", "Design System", "Cursor"],
    responsibilities: [
      "Responsável por todo o ciclo de design: pesquisa, definição de fluxos e arquitetura de informação",
      "Wireframes e prototipação no Figma, cobrindo mais de 15 telas e estados contextuais distintos, incluindo fluxos de ativação, recarga, resgate e autenticação com 2FA",
      "Implementação do front-end completo em React + Tailwind CSS utilizando Cursor, entregando código pronto para integração com o back-end",
      "Estruturação do design system do produto, garantindo consistência visual e escalabilidade para evoluções futuras"
    ]
  },
  {
    company: "Eternità Luxury Piercing",
    role: "Designer Sênior",
    location: "Bruxelas, Bélgica",
    period: "Set/2024 — Ago/2025",
    tags: ["UX/UI", "Shopify", "E-commerce", "Visual Ads", "Branding", "Social Media"],
    responsibilities: [
      "Criação de campanhas visuais para social media e mídia paga (Meta & Google Ads)",
      "Redesign da identidade visual da marca e desenvolvimento de e-commerce no Shopify (UX/UI e fluxo de navegação)",
      "Planejamento estratégico de campanhas de venda para loja física e online",
      "Coordenação de entregas com equipe de front-end e social media"
    ]
  },
  {
    company: "Tailor Inteligência",
    role: "Designer Sênior",
    location: "Uberlândia, Brasil",
    period: "Fev/2019 — Ago/2024",
    tags: ["Direção de Arte", "Branding", "Web Design", "UX/UI", "Motion Design", "Fotografia"],
    responsibilities: [
      "Direção de arte para campanhas publicitárias e projetos de branding",
      "Criação de interfaces para landing pages e hotsites com foco em UX e conversão",
      "Desenvolvimento de key visuals e assets para social media de múltiplas marcas",
      "Storyboards e animações em motion design (After Effects)",
      "Produção fotográfica, tratamento de imagem e diagramação editorial"
    ]
  },
  {
    company: "Studio LEP",
    role: "Designer Gráfico & Fotógrafo de Alimentos",
    location: "Cremona, Itália",
    period: "2018 — 2019",
    tags: ["Direção de Arte", "Branding", "Campanhas Promocionais", "Fotografia"],
    responsibilities: [
      "Direção de arte para o setor alimentício: cardápios, branding e campanhas promocionais",
      "Fotografia de alimentos e produtos para restaurantes e marcas"
    ]
  },
  {
    company: "Fórmula P Comunicação",
    role: "Diretor de Arte Pleno",
    location: "Uberlândia, Brasil",
    period: "Jan/2017 — Dez/2017",
    tags: ["Campanhas Visuais", "Identidade Visual", "Mídia Impressa", "Publicidade"],
    responsibilities: [
      "Campanhas visuais para mídia impressa e digital",
      "Criação de identidades visuais e materiais publicitários"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Product Design",
    skills: [
      { name: "Figma", level: "Avançado" },
      { name: "Pesquisa UX", level: "Avançado" },
      { name: "Wireframing", level: "Avançado" },
      { name: "Prototipação", level: "Avançado" },
      { name: "Design Systems", level: "Avançado" },
      { name: "UI Design", level: "Avançado" },
      { name: "Branding & Visual", level: "Avançado" }
    ]
  },
  {
    title: "Front-End",
    skills: [
      { name: "React", level: "Intermediário" },
      { name: "HTML / CSS", level: "Avançado" },
      { name: "Tailwind CSS", level: "Avançado" },
      { name: "Git", level: "Intermediário" }
    ]
  },
  {
    title: "Dev Assistido por IA",
    skills: [
      { name: "Cursor", level: "Avançado" },
      { name: "Claude Code", level: "Avançado" },
      { name: "Framer", level: "Intermediário" },
      { name: "Midjourney", level: "Avançado" },
      { name: "GPT / LLMs", level: "Avançado" },
      { name: "Firefly", level: "Avançado" }
    ]
  },
  {
    title: "Motion, Foto & Outros",
    skills: [
      { name: "After Effects", level: "Intermediário" },
      { name: "Premiere Pro", level: "Intermediário" },
      { name: "Lightroom / Foto", level: "Avançado" },
      { name: "Linear / VS Code", level: "Avançado" },
      { name: "Photoshop & Illustrator", level: "Avançado" },
      { name: "InDesign", level: "Avançado" }
    ]
  }
];

export const LANGUAGES = [
  { name: "Português", level: "Nativo" },
  { name: "Italiano", level: "Avançado" },
  { name: "Inglês", level: "Intermediário" }
];

export const EDUCATION = {
  institution: "ESAMC Uberlândia, Brasil",
  degree: "Bacharelado em Publicidade e Propaganda",
  period: "2014 — 2018"
};
