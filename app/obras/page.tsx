"use client";

import ImageModal from "@/components/ImageModal";
import WorkCard from "@/components/WorkCard";
import { useLanguage } from "@/context/LanguageContext";
import { works } from "@/data/works";
import { useState } from "react";

export default function ObrasPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const principais = works.filter((work) => work.category === "principal");
  const sketches = works.filter((work) => work.category === "sketch");
  const handleOpenImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen pb-20">
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-4 ">
            {t.gallery}
          </h1>
          <p className="text-text-muted dark:text-text-muted max-w-xl text-lg">
            {t.galleryDescription}
          </p>
        </header>
        <section className="mb-24">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-4 mb-8 uppercase tracking-widest text-text-muted dark:text-text-muted">
            {t.mainWorks}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principais.map((work) => (
              <div 
                key={work.id}
                onClick={() => handleOpenImage(work.imageUrl)}
                className="cursor-pointer"
              >
                <WorkCard work={work} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-bold border-l-4 border-zinc-400 dark:border-zinc-700 pl-4 uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
              {t.sketchesStudies}
            </h2>
            <span className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
              {t.creativeProcess}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sketches.map((work) => (
              <div
                key={work.id}
                onClick={() => handleOpenImage(work.imageUrl)}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <WorkCard work={work} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={selectedImage}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}