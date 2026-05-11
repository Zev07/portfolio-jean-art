"use client";

import HomeCarousel from "@/components/HomeCarousel";
import SkillsSection from "@/components/SkillsSection";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { client } from "@/sanity/lib/client";

type WorkPreview = {
  _id: string;
  title: string;
  category: string;
  year: string;
  mainImage: unknown;
};

export default function Home() {
  const { t } = useLanguage();
  const [recentWorks, setRecentWorks] = useState<WorkPreview[]>([]);

  useEffect(() => {
    const fetchRecentWorks = async () => {
      const query = `*[_type == "work"] | order(_createdAt desc)[0...6] {
        _id,
        title,
        category,
        year,
        mainImage
      }`;
      
      try {
        const data = await client.fetch(query);
        setRecentWorks(data);
      } catch (error) {
        console.error("Erro ao carregar carrossel:", error);
      }
    };

    fetchRecentWorks();
  }, []);
  
  return (
    <main className="min-h-screen text-foreground transition-colors duration-300 selection:bg-[#d8203e] selection:text-white overflow-x-hidden" style={{ color: 'var(--foreground)' }}>
      <section className="retro-hero relative isolate overflow-hidden px-4 pt-0 pb-20 md:px-8 md:pb-28 bg-[url('/images/ema.png')] bg-cover bg-center bg-no-repeat min-h-[120vh] -mt-16">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="noise-layer absolute inset-0 z-0 pointer-events-none" />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:gap-6 pt-60 md:pt-72 items-center relative z-10">
          <div className="flex items-end justify-center gap-80 w-full relative z-20">
            <div className="relative z-20">
              <p className="inline-block border-l-4 border-[#d8203e] px-4 py-2 font-accent text-xl font-black uppercase italic md:text-2xl" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
                Ultimas criações
              </p>
            </div>

            <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-white drop-shadow-[6px_6px_0_#d8203e] md:text-7xl italic whitespace-nowrap">
              HELLO WORLD!
            </h1>
          </div>

          <HomeCarousel works={recentWorks} />

          <div className="flex justify-center relative z-10">
            <Link
              href="/obras"
              className="inline-block bg-[#d8203e] px-6 py-3 font-accent text-2xl font-black uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[8px_8px_0px_#000] dark:hover:shadow-[8px_8px_0px_#fff] border-2 border-transparent hover:border-white pointer-events-auto cursor-pointer"
            >
              {t.viewFullPortfolio}
            </Link>
          </div>
        </div>
      </section>

      <SkillsSection />

      <section className="bg-black dark:bg-white border-y-4 border-[#d8203e] py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="border-4 border-white/20 dark:border-black/20 px-8 py-12 md:px-16 md:py-20 relative">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tight text-white dark:text-black mb-6 leading-tight">
              {t.interestedInCommission}
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 dark:text-zinc-700 mb-10 max-w-2xl font-accent">
              {t.contactForDetails}
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white dark:bg-black text-black dark:text-white px-8 py-4 font-accent text-2xl font-black uppercase tracking-wide hover:bg-[#d8203e] hover:text-white transition-colors border-2 dark:border-white"
            >
              {t.talkToMe}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}