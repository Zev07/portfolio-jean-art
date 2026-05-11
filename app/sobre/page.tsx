"use client"
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Linkedin, MessageSquare, Plus, X } from "lucide-react";
import Image from "next/image";

export default function SobrePage() {
  const { t, language } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-[#d8203e] selection:text-white overflow-x-hidden">

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-10">
         <div className="absolute bottom-[-20%] right-[-20%] w-[150%] h-[50%] bg-[#27dfcf] rotate-12 transform-gpu" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 md:pt-52 pb-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        <aside className="md:col-span-3 md:sticky md:top-32 md:h-fit">
          <div className="relative aspect-square mb-8 border-4 border-black dark:border-zinc-200 bg-black shadow-[12px_12px_0px_#d8203e] hover:shadow-[16px_16px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">
            <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                src="/images/bestdraw.png"
                alt="Retrato do Artista"
                fill
                className="object-cover"
                priority
                />
            </div>
          </div>
          <div className="mb-2 transform -skew-x-12 inline-block bg-black p-2 shadow-[6px_6px_0px_#ccc] dark:shadow-[6px_6px_0px_#333]">
            <h1 className="text-4xl md:text-6xl font-black text-white transform skew-x-12 uppercase italic tracking-tighter">
                JeanX
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-black text-[#d8203e] dark:text-[#27dfcf] italic mb-8 border-l-4 border-[#d8203e] pl-4 bg-black/10 dark:bg-white/10 py-2 px-3">
            {t.visualArtist}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border-2 border-black dark:border-zinc-500 px-4 py-4 flex items-center justify-center shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#d8203e] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black dark:bg-zinc-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
              <div className="absolute inset-0 bg-[#d8203e] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" style={{ transitionDelay: '50ms' }}></div>
              <div className="relative z-10 flex items-center justify-center">
                <X size={20} className="text-foreground dark:text-white group-hover:text-white transition-colors" />
              </div>
            </a>
            
            <a
              href="https://www.reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border-2 border-black dark:border-zinc-500 px-4 py-4 flex items-center justify-center shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#FF4500] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#FF4500] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
              <div className="relative z-10 flex items-center justify-center">
                <MessageSquare size={20} className="text-foreground group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/jeanrabiscos/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border-2 border-black dark:border-zinc-500 px-4 py-4 flex items-center justify-center shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#E4405F] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#E4405F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
              <div className="relative z-10 flex items-center justify-center">
                <Instagram size={20} className="text-foreground group-hover:text-white transition-colors" />
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/jeanxamura/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border-2 border-black dark:border-zinc-500 px-4 py-4 flex items-center justify-center shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#0077b5] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0077b5] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
              <div className="relative z-10 flex items-center justify-center">
                <Linkedin size={20} className="text-foreground group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </aside>
        <section className="md:col-span-9 flex flex-col gap-16">
          <div className="bg-card p-8 border-4 border-black dark:border-zinc-500 shadow-[12px_12px_0px_#d8203e] relative">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground mb-6 flex items-center gap-3">
                <Plus className="text-[#d8203e]" size={20} strokeWidth={2} />
                {t.biography}
            </h2>
            <div className="text-lg leading-relaxed text-muted space-y-6 font-medium">
              <p>{t.bioParagraph1}</p>
              <p>{t.bioParagraph2}</p>
              <p>{t.bioParagraph3}</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}