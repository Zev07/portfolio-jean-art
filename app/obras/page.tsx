"use client";

import ImageModal from "@/components/ImageModal";
import WorkCard from "@/components/WorkCard";
import { useLanguage } from "@/context/LanguageContext";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export interface WorkItem {
  id: string;
  title: string;
  category: "illustration" | "3dmodel" | "study" | "other";
  imageUrl: string;
  processImages?: string[];
  year: string;
  description?: string;
}

export default function ObrasPage() {
  const { t } = useLanguage();
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<"illustration" | "3dmodel" | "study" | "other">("illustration");

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        // Query buscando todos os campos necessários
        const query = `*[_type == "work"] | order(year desc) {
          _id,
          title,
          category,
          year,
          description,
          mainImage,
          processImages
        }`;
        
        const data = await client.fetch(query);

        // Mapeamento com proteção contra dados vazios
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedWorks: WorkItem[] = data.map((item: any) => ({
          id: item._id,
          title: item.title,
          category: item.category,
          year: item.year,
          description: item.description,
          
          // Verifica se mainImage existe e tem asset antes de gerar URL
          imageUrl: (item.mainImage && item.mainImage.asset) 
            ? urlFor(item.mainImage).width(1200).url() 
            : '/images/placeholder.png',
          
          // Verifica se processImages é um array válido e filtra itens sem asset
          processImages: Array.isArray(item.processImages)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ? item.processImages
                .filter((img: any) => img && img.asset) // Filtro Defensivo Importante
                .map((img: any) => urlFor(img).width(800).url())
            : []
        }));

        setWorks(formattedWorks);
      } catch (error) {
        console.error("Erro ao buscar obras:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const illustrations = works.filter((work) => work.category === "illustration");
  const models3d = works.filter((work) => work.category === "3dmodel");
  const studies = works.filter((work) => work.category === "study");
  const others = works.filter((work) => work.category === "other");

  // Array com as categorias e seus dados para iterar
  const categories = [
    { id: "illustration" as const, label: "Illustrations", works: illustrations },
    { id: "3dmodel" as const, label: "3D models", works: models3d },
    { id: "study" as const, label: "Studies", works: studies },
    { id: "other" as const, label: "Others", works: others },
  ];

  const currentCategoryData = categories.find(cat => cat.id === selectedCategory);
  const currentWorks = currentCategoryData?.works || [];

  const handleOpenImage = (work: WorkItem) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="relative animate-spin duration-700 transform rotate-45">
          <Plus size={64} className="text-[#d8203e]" strokeWidth={1.5} />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20 bg-background overflow-x-hidden selection:bg-[#d8203e] selection:text-white transition-colors duration-300">
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-10">
         <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[50%] bg-[#d8203e] -rotate-12 transform-gpu" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* CATEGORIA MENU */}
        <div className="mb-24 flex flex-wrap gap-4 items-center justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 text-2xl md:text-3xl font-black capitalize tracking-tighter ${
                selectedCategory === category.id
                  ? "bg-[#d8203e] px-8 py-4 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] border-2 border-black dark:border-white text-white italic"
                  : "text-foreground hover:opacity-70"
              }`}
            >
              <span className={selectedCategory === category.id ? "text-white italic" : ""}>
                {category.label}
              </span>
            </button>
          ))}
        </div>

        {/* GALERIA DA CATEGORIA SELECIONADA */}
        {currentWorks.length > 0 ? (
          <section className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {currentWorks.map((work) => (
                <div
                  key={work.id}
                  onClick={() => handleOpenImage(work)}
                  className="group relative cursor-pointer border-4 border-black dark:border-zinc-200 bg-white dark:bg-black shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#d8203e] hover:shadow-[12px_12px_0px_#d8203e] dark:hover:shadow-[12px_12px_0px_#fff] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-200 ease-out"
                >
                  <div className="relative overflow-hidden bg-white">
                    <div className="relative scale-100 group-hover:scale-110 transition-all duration-300">
                      <div className="[&_div.absolute.bottom-0]:hidden">
                        <WorkCard work={work} />
                      </div>
                    </div>
                    {/* Calling Card */}
                    <div className="absolute bottom-4 left-0 w-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pl-2 pointer-events-none">
                      <div className="bg-black inline-block px-3 py-1 border-2 border-white">
                        <h3 className="text-white font-black italic uppercase text-lg">
                          {work.title}
                        </h3>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-45 group-hover:rotate-180">
                      <Plus className="text-white drop-shadow-[0_2px_0_#000]" size={28} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <p className="text-center text-muted italic text-lg py-12">Nenhuma obra encontrada nesta categoria.</p>
        )}
      </div>
      
      <ImageModal
        isOpen={isModalOpen}
        initialWork={selectedWork}
        allWorks={works}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}