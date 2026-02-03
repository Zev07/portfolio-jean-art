"use client"
import { useLanguage } from "@/context/LanguageContext";
import { cvData } from "@/data/cv";
import Image from "next/image";

export default function SobrePage() {
  const { t, language } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <aside className="md:col-span-5 md:sticky md:top-32 md:h-fit">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 shadow-2xl shadow-zinc-200 dark:shadow-black/50 ring-1 ring-zinc-100 dark:ring-zinc-800">
            <Image
              src="/images/BestDraw.png"
              alt="Retrato do Artista"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
          
          <h1 className="text-4xl font-bold text-muted dark:text-muted mb-2 tracking-tight">
            Jean Art<span className="text-primary">.</span>
          </h1>
          <p className="text-xl text-foreground dark:text-foreground font-light">
            {t.visualArtist}
          </p>
          <div className="mt-8 flex gap-6">
            <a href="#" className="text-muted hover:text-primary transition-colors text-sm uppercase tracking-wider font-bold">
                Instagram
            </a>
            <a href="#" className="text-muted hover:text-primary transition-colors text-sm uppercase tracking-wider font-bold">
                LinkedIn
            </a>
          </div>
        </aside>

        <section className="md:col-span-7 flex flex-col gap-16">
          
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">
                {t.biography}
            </h2>
            <div className="text-lg leading-relaxed text-foreground dark:text-foreground space-y-6">
              <p>
                {t.bioParagraph1}
              </p>
              <p>
                {t.bioParagraph2}
              </p>
              <p>
                {t.bioParagraph3}
              </p>
            </div>
          </div>
          <hr className="border-zinc-200 dark:border-zinc-800" />
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-primary mb-8">
                {t.trajectory}
            </h2>
            <div className="space-y-8">
              {cvData.map((item, index) => (
                <div key={index} className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 cursor-default">
                  <span className="text-zinc-400 dark:text-zinc-500 font-mono font-bold text-lg min-w-[80px]">
                    {item.year}
                  </span>
                  <div className="w-full">
                    <h3 className="text-xl font-medium text-foreground dark:text-foreground group-hover:text-primary transition-colors duration-300">
                      {language === 'pt' ? item.title.pt : item.title.en}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        <p className="text-muted dark:text-muted">
                            {item.location}
                        </p>
                        <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">•</span>
                        <span className="text-xs uppercase tracking-wide font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700">
                            {item.type === 'Exposição' ? t.exhibition : item.type === 'Prêmio' ? t.award : t.education}
                        </span>
                    </div>
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