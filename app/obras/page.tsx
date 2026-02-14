"use client";

import { useEffect, useState } from "react";
import ImageModal from "@/components/ImageModal";
import WorkCard from "@/components/WorkCard";
import { useLanguage } from "@/context/LanguageContext";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Star } from "lucide-react";

export interface WorkItem {
  id: string;
  title: string;
  category: "principal" | "sketch";
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

  useEffect(() => {
    const fetchWorks = async () => {
      try {
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
        const formattedWorks: WorkItem[] = data.map((item: any) => ({
          id: item._id,
          title: item.title,
          category: item.category,
          year: item.year,
          description: item.description,
          imageUrl: item.mainImage ? urlFor(item.mainImage).width(1200).url() : '/images/placeholder.png',
          processImages: item.processImages?.map((img: any) => urlFor(img).width(800).url()) || []
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

  const principais = works.filter((work) => work.category === "principal");
  const sketches = works.filter((work) => work.category === "sketch");

  const handleOpenImage = (work: WorkItem) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="relative animate-spin duration-700">
          <Star size={64} className="text-[#D91C2B] fill-[#D91C2B]" />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20 bg-background overflow-x-hidden selection:bg-[#D91C2B] selection:text-white transition-colors duration-300">
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-10">
         <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[50%] bg-[#D91C2B] -rotate-12 transform-gpu" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* HEADER */}
        <header className="mb-24 relative">
          <div className="inline-block transform -skew-x-12 bg-black dark:bg-white p-2 mb-4 shadow-[8px_8px_0px_#D91C2B]">
            <h1 className="text-4xl md:text-7xl font-black text-white dark:text-black px-4 transform skew-x-12 tracking-tighter uppercase italic">
              {t.gallery}
            </h1>
          </div>
          <div className="mt-4 border-l-8 border-[#D91C2B] pl-6 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm max-w-2xl transform skew-x-[-12deg] shadow-sm">
            <p className="text-zinc-800 dark:text-zinc-300 text-lg font-bold transform skew-x-[12deg]">
              {t.galleryDescription}
            </p>
          </div>
        </header>

        {/* OBRAS PRINCIPAIS */}
        <section className="mb-32">
          <div className="mb-12 flex items-center gap-4">
             <Star className="text-[#D91C2B] fill-[#D91C2B] animate-pulse" size={32} />
             <h2 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">
               {t.mainWorks}
             </h2>
          </div>
          
          {principais.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {principais.map((work) => (
                <div
                  key={work.id}
                  onClick={() => handleOpenImage(work)}
                  className="group relative cursor-pointer border-4 border-black dark:border-zinc-200 bg-white dark:bg-black shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#D91C2B] hover:shadow-[12px_12px_0px_#D91C2B] dark:hover:shadow-[12px_12px_0px_#fff] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-200 ease-out"
                >
                  <div className="relative overflow-hidden bg-white">
                    <div className="relative grayscale group-hover:grayscale-0 transition-all duration-300 scale-100 group-hover:scale-110">
                        <div className="[&_div.absolute.bottom-0]:hidden">
                           <WorkCard work={work} />
                        </div>
                    </div>
                    {/* Calling Card */}
                    <div className="absolute bottom-4 left-0 w-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pl-2 pointer-events-none">
                        <div className="bg-black inline-block px-3 py-1 transform -skew-x-12 border-2 border-white">
                            <h3 className="text-white font-black italic uppercase text-lg transform skew-x-12">
                                {work.title}
                            </h3>
                        </div>
                    </div>
                    <div className="absolute top-2 right-2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-45 group-hover:rotate-180">
                        <Star className="text-white fill-white drop-shadow-[0_2px_0_#000]" size={28} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted italic">Nenhuma obra encontrada.</p>
          )}
        </section>

        {/* SKETCHES */}
        {sketches.length > 0 && (
          <section>
             <div className="mb-12 flex items-center gap-4">
               <div className="w-4 h-4 bg-black dark:bg-white rotate-45"></div>
               <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground opacity-80">
                 {t.sketchesStudies}
               </h2>
               <div className="h-1 flex-1 bg-black dark:bg-white bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#000_4px,#000_8px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#fff_4px,#fff_8px)] opacity-20"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sketches.map((work) => (
                <div
                  key={work.id}
                  onClick={() => handleOpenImage(work)}
                  className="group cursor-pointer relative border-2 border-black dark:border-zinc-500 bg-white dark:bg-zinc-900 p-2 hover:rotate-2 hover:scale-105 transition-all duration-200 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] hover:shadow-[6px_6px_0px_#D91C2B]"
                >
                   <div className="overflow-hidden bg-zinc-200 border border-zinc-300 dark:border-zinc-700">
                     <div className="[&_div.absolute.bottom-0]:hidden">
                        <WorkCard work={work} />
                     </div>
                   </div>
                   <div className="absolute -top-2 -right-2 bg-[#D91C2B] text-white text-[10px] font-bold px-2 py-0.5 transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                       CONFIDENTIAL
                   </div>
                </div>
              ))}
            </div>
          </section>
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