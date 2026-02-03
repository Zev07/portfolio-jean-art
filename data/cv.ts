export interface CVItem {
  year: string;
  title: {
    pt: string;
    en: string;
  };
  location: string;
  type: "Exposição" | "Prêmio" | "Formação";
}

export const cvData: CVItem[] = [
  {
    year: "2025",
    title: {
      pt: "Novos Horizontes Urbanos",
      en: "New Urban Horizons"
    },
    location: "Galeria de Arte Moderna, São Paulo",
    type: "Exposição",
  },
  {
    year: "2024",
    title: {
      pt: "Prêmio Revelação de Pintura",
      en: "Painting Revelation Award"
    },
    location: "Salão Nacional de Artes",
    type: "Prêmio",
  },
  {
    year: "2023",
    title: {
      pt: "Residência Artística: O Silêncio",
      en: "Artistic Residency: The Silence"
    },
    location: "Lisboa, Portugal",
    type: "Formação",
  },
  {
    year: "2022",
    title: {
      pt: "Bacharelado em Artes Visuais",
      en: "Bachelor of Visual Arts"
    },
    location: "Universidade Federal (UFRJ)",
    type: "Formação",
  },
];