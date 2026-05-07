"use client";

import { WorkItem } from "@/app/obras/page";
import { ChevronLeft, ChevronRight, Download, Plus, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageModalProps {
  isOpen: boolean;
  initialWork: WorkItem | null;
  allWorks: WorkItem[];
  onClose: () => void;
}

export default function ImageModal({ isOpen, initialWork, allWorks, onClose }: ImageModalProps) {
  const [currentWork, setCurrentWork] = useState<WorkItem | null>(initialWork);

  useEffect(() => {
    setCurrentWork(initialWork);
  }, [initialWork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentWork]);

  if (!isOpen || !currentWork) return null;

  const currentIndex = allWorks.findIndex((w) => w.id === currentWork.id);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIndex = (currentIndex + 1) % allWorks.length;
    setCurrentWork(allWorks[nextIndex]);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIndex = (currentIndex - 1 + allWorks.length) % allWorks.length;
    setCurrentWork(allWorks[prevIndex]);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(currentWork.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const safeTitle = currentWork.title ? currentWork.title.replace(/\s+/g, "-") : "Obra";
      link.download = `${safeTitle}-JeanX.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar imagem:", error);
    }
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 dark:bg-white/95 backdrop-blur-md p-4 animate-in fade-in duration-300 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 bg-[#d8203e] text-white p-2 hover:bg-white hover:text-black hover:rotate-90 transition-all duration-300 shadow-[4px_4px_0px_#fff]"
      >
        <X size={32} />
      </button>

      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl my-auto flex flex-col gap-8"
      >
        
        <div className="relative w-full flex items-center justify-center group">
            
            <button
                onClick={handlePrev}
                className="absolute left-[-20px] md:left-[-60px] z-40 bg-black dark:bg-white text-white dark:text-black p-3 border-2 border-white dark:border-black hover:bg-[#d8203e] hover:scale-110 transition-all shadow-[4px_4px_0px_#fff] dark:shadow-[4px_4px_0px_#000] hidden md:block"
            >
                <ChevronLeft size={32} />
            </button>

            <div className="relative w-full h-auto max-h-[80vh] border-4 border-white dark:border-black shadow-[0_0_50px_rgba(217,28,43,0.3)] bg-black dark:bg-white">
                <Image
                    src={currentWork.imageUrl}
                    alt={currentWork.title}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain max-h-[75vh]"
                    priority
                />
            </div>

            <button 
                onClick={handleNext}
                className="absolute right-[-20px] md:right-[-60px] z-40 bg-black dark:bg-white text-white dark:text-black p-3 border-2 border-white dark:border-black hover:bg-[#d8203e] hover:scale-110 transition-all shadow-[4px_4px_0px_#fff] dark:shadow-[4px_4px_0px_#000] hidden md:block"
            >
                <ChevronRight size={32} />
            </button>
        </div>
        <div className="flex md:hidden justify-between w-full px-4">
            <button onClick={handlePrev} className="bg-white text-black p-2 border-2 border-black"><ChevronLeft /></button>
            <button onClick={handleNext} className="bg-white text-black p-2 border-2 border-black"><ChevronRight /></button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-zinc-700 pb-6 gap-4">
            <div>
                <div className="bg-white inline-block px-6 py-2 border-l-8 border-[#d8203e] mb-2">
                    <h3 className="text-black font-black uppercase italic tracking-widest text-2xl">
                        {currentWork.title}
                    </h3>
                </div>
                {currentWork.description && (
                    <p className="text-zinc-400 max-w-2xl mt-2 font-medium">
                        {currentWork.description}
                    </p>
                )}
            </div>
            
            <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-transparent text-white px-6 py-2 border-2 border-white hover:bg-[#d8203e] hover:border-[#d8203e] transition-colors"
            >
                <Download size={20} />
                <span className="font-bold uppercase tracking-widest text-sm">Download HD</span>
            </button>
        </div>

        {currentWork.processImages && currentWork.processImages.length > 0 && (
            <div className="animate-in slide-in-from-bottom-10 duration-500 delay-100">
                
                <div className="flex items-center gap-4 mb-6">
                    <div className="transform rotate-45">
                      <Plus className="text-[#d8203e] animate-spin-slow" size={24} strokeWidth={2} />
                    </div>
                    <h4 className="text-white text-xl font-black uppercase tracking-[0.2em]">
                        Creative Process Evidence
                    </h4>
                    <div className="h-[2px] flex-1 bg-zinc-800"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentWork.processImages.map((img, index) => (
                        <div key={index} className="group relative border-2 border-zinc-700 bg-black p-2 hover:border-[#d8203e] transition-colors">
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={img}
                                    alt={`Processo ${index + 1}`}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="absolute -top-3 -left-2 bg-black text-zinc-500 text-xs font-bold px-2 border border-zinc-800">
                                STEP 0{index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
        
        <div className="h-12"></div>
      </div>
    </div>
  );
}