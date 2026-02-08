"use client"
import { useLanguage } from "@/context/LanguageContext";
import { cvData } from "@/data/cv";
import { ArrowUpRight, Instagram, Linkedin, Star } from "lucide-react";
import Image from "next/image";

export default function SobrePage() {
  const { t, language } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-[#D91C2B] selection:text-white overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none opacity-5 z-0"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
      <div className="fixed top-0 right-0 w-[50vw] h-[100vh] bg-[#D91C2B] transform skew-x-[-20deg] translate-x-[60%] opacity-10 z-0 mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-16">
        <aside className="md:col-span-5 md:sticky md:top-32 md:h-fit">
          <div className="relative aspect-[3/4] mb-8 border-4 border-black dark:border-zinc-200 bg-black shadow-[12px_12px_0px_#D91C2B] hover:shadow-[16px_16px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">
            <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                src="/images/bestdraw.png"
                alt="Retrato do Artista"
                fill
                className="object-cover"
                priority
                />
            </div>
            <div className="absolute -top-3 -left-3 bg-[#D91C2B] text-white font-black text-xs px-2 py-1 transform -rotate-6 shadow-[2px_2px_0px_#000]">
                WANTED
            </div>
          </div>
          <div className="mb-2 transform -skew-x-12 inline-block bg-black p-2 shadow-[6px_6px_0px_#ccc] dark:shadow-[6px_6px_0px_#333]">
            <h1 className="text-4xl md:text-6xl font-black text-white transform skew-x-12 uppercase italic tracking-tighter">
                JeanX
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-300 italic mb-8 border-l-4 border-[#D91C2B] pl-4">
            {t.visualArtist}
          </p>
          <div className="grid grid-cols-1 gap-4">
            <a
              href="https://www.instagram.com/jeanrabiscos/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border-2 border-black dark:border-zinc-500 px-6 py-4 flex items-center justify-between shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#D91C2B] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#D91C2B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>

              <div className="relative z-10 flex items-center gap-4">
                <Instagram size={24} className="text-foreground group-hover:text-white transition-colors" />
                <span className="text-lg font-black text-foreground group-hover:text-white uppercase italic tracking-widest">
                  Instagram
                </span>
              </div>
              <ArrowUpRight size={20} className="relative z-10 text-foreground group-hover:text-white" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/jeanxamura/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border-2 border-black dark:border-zinc-500 px-6 py-4 flex items-center justify-between shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#0066cc] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0077b5] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>

              <div className="relative z-10 flex items-center gap-4">
                <Linkedin size={24} className="text-foreground group-hover:text-white transition-colors" />
                <span className="text-lg font-black text-foreground group-hover:text-white uppercase italic tracking-widest">
                  LinkedIn
                </span>
              </div>
              <ArrowUpRight size={20} className="relative z-10 text-foreground group-hover:text-white" />
            </a>
          </div>
        </aside>
        <section className="md:col-span-7 flex flex-col gap-16">
          <div className="bg-card p-8 border-2 border-black dark:border-zinc-700 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] relative">
            <div className="absolute -top-3 -left-3 w-32 h-8 bg-[#D91C2B] transform -rotate-3 z-20 shadow-sm flex items-center justify-center">
                <span className="text-white font-black text-xs tracking-[0.3em]">CONFIDENTIAL</span>
            </div>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground mb-6 flex items-center gap-3">
                <Star className="text-[#D91C2B] fill-[#D91C2B]" />
                {t.biography}
            </h2>
            <div className="text-lg leading-relaxed text-muted space-y-6 font-medium">
              <p>{t.bioParagraph1}</p>
              <p>{t.bioParagraph2}</p>
              <p>{t.bioParagraph3}</p>
            </div>
          </div>
          <div>
            <div className="mb-10 flex items-center gap-4">
                <div className="bg-black text-white px-4 py-1 transform -skew-x-12">
                    <h2 className="text-xl font-black uppercase italic tracking-widest transform skew-x-12">
                        {t.trajectory}
                    </h2>
                </div>
                <div className="h-1 flex-1 bg-black dark:bg-zinc-700 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#000_4px,#000_8px)] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#fff_4px,#fff_8px)] opacity-30"></div>
            </div>
            <div className="relative border-l-4 border-black dark:border-zinc-600 border-dashed ml-3 space-y-12 pb-4">
              {cvData.map((item, index) => (
                <div key={index} className="group relative pl-10 md:pl-12">
                  <span className="absolute -left-[10px] top-2 w-4 h-4 bg-white border-4 border-[#D91C2B] transform rotate-45 group-hover:bg-[#D91C2B] group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(217,28,43,0.5)]"></span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                    <span className="text-xl font-black text-[#D91C2B] italic tracking-tighter">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black text-foreground uppercase italic group-hover:translate-x-1 transition-transform duration-300">
                      {language === 'pt' ? item.title.pt : item.title.en}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm">
                        <p className="text-muted font-bold uppercase tracking-wide">
                            {item.location}
                        </p>
                        <span className="hidden sm:inline w-2 h-2 bg-black dark:bg-white transform rotate-45"></span>
                        <span className="text-xs uppercase font-black text-white bg-black dark:bg-zinc-800 px-3 py-1 transform -skew-x-12 border border-transparent group-hover:border-[#D91C2B] transition-colors">
                          <span className="inline-block transform skew-x-12">
                            {item.type === 'Exposição' ? t.exhibition : item.type === 'Prêmio' ? t.award : t.education}
                          </span>
                        </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}