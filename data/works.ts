export interface WorkItem {
  id: string;
  title: string;
  category: "principal" | "sketch";
  imageUrl: string;
  year: string;
  description?: string;
}


export const works: WorkItem[] = [
  // --- OBRAS PRINCIPAIS ---
  {
  id: "1",
    title: "Ema",
    category: "principal",
    imageUrl: "/images/ema.png",
    year: "2025",
    description: "Aquarela",
  },
  {
  id: "2",
    title: "Demonet",
    category: "principal",
    imageUrl: "/images/goblin.png",
    year: "2025",
    description: "Aquarela",
  },
  {
  id: "3",
    title: "Burrego",
    category: "principal",
    imageUrl: "/images/Burrego.png",
    year: "2025",
    description: "Aquarela",
  },
  {
    id: "4",
    title: "Emalice",
    category: "principal",
    imageUrl: "/images/emalice.png",
    year: "2025",
    description: "Digital",
  },
  {
    id: "5",
    title: "Mark",
    category: "principal",
    imageUrl: "/images/Mark.png",
    year: "2025",
    description: "Aquarela",
  },
  {
    id: "6",
    title: "JigglyPuff",
    category: "principal",
    imageUrl: "/images/Jigglypuff.png",
    year: "2025",
    description: "Digital",
  },
  // --- SKETCHES (RASCUNHOS) ---
  {
    id: "01",
    title: "Rabiscos",
    category: "sketch",
    imageUrl: "/images/rabiscos.png",
    year: "2024",
  },
  {
    id: "02",
    title: "Lil Garfield",
    category: "sketch",
    imageUrl: "/images/LilGarfield.png",
    year: "2025",
  },
  {
    id: "03",
    title: "Demonet Sketch",
    category: "sketch",
    imageUrl: "/images/demonetSkt.png",
    year: "2025",
  },
  {
    id: "04",
    title: "Milkodog Sketch",
    category: "sketch",
    imageUrl: "/images/milkodog.png",
    year: "2025",
  },
  {
    id: "05",
    title: "Bota Estudos",
    category: "sketch",
    imageUrl: "/images/EstudoBota.png",
    year: "2025",
  },
    {
    id: "06",
    title: "Jin Concept",
    category: "sketch",
    imageUrl: "/images/jinconcept.png",
    year: "2025",
  },
    {
    id: "07",
    title: "Fisionomia Torso",
    category: "sketch",
    imageUrl: "/images/FisioEstudo.png",
    year: "2025",
  },
  
  
];