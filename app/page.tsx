"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import ParallaxSection from "@/components/ParallaxSection";
import SolidSection from "@/components/SolidSection";
import HomeCarousel from "@/components/HomeCarousel";

import { useLanguage } from "@/context/LanguageContext";
import { client } from "@/sanity/lib/client";

export default function Home() {
  const { t } = useLanguage();
  const [recentWorks, setRecentWorks] = useState([]);

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
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-[#D91C2B] selection:text-white">
      <ParallaxSection
        imageUrl="/images/ema.png"
        altText="Obra Principal do Artista"
        focusPosition="object-[center_20%]"
        className="min-h-screen"
      >
        <div className="flex flex-col items-start text-left max-w-4xl">
            <div className="relative transform -skew-x-12 bg-black border-l-8 border-[#D91C2B] p-4 md:p-6 mb-6 shadow-[8px_8px_0px_#D91C2B]">
                <h1 className="text-5xl md:text-8xl font-black text-white transform skew-x-12 uppercase italic tracking-tighter">
                {t.homeTitle}
                </h1>
            </div>
            <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 transform -skew-x-12 mb-10 border-2 border-black dark:border-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                <p className="text-xl md:text-2xl text-black dark:text-white font-bold transform skew-x-12 max-w-2xl leading-tight">
                {t.homeSubtitle}
                </p>
            </div>
            <Link
            href="/obras"
            className="group relative inline-block bg-[#D91C2B] px-8 py-4 transform -skew-x-12 border-2 border-black dark:border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_#000] hover:shadow-[8px_8px_0px_#D91C2B] hover:-translate-y-1"
            >
                <span className="flex items-center gap-3 transform skew-x-12 font-black uppercase tracking-widest text-lg">
                    {t.viewFullPortfolio}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                </span>
            </Link>
        </div>
      </ParallaxSection>
      <SolidSection bgColor="bg-background" textColor="text-foreground">
        <div className="flex flex-col items-center text-center">
            
            <Star className="text-[#D91C2B] fill-[#D91C2B] mb-6 animate-pulse" size={40} />
            
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#D91C2B] mb-6">
            {t.aboutProcess}
            </h2>
            
            <p className="text-3xl md:text-5xl font-black italic tracking-tight leading-tight max-w-4xl mb-10 text-foreground">
            &ldquo;{t.homeQuote}&rdquo;
            </p>
            <Link
                href="/sobre"
                className="group relative inline-flex items-center gap-2 text-lg font-bold uppercase tracking-widest hover:text-[#D91C2B] transition-colors"
            >
                <span className="relative">
                    {t.readBiography}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D91C2B] transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-[#D91C2B]" />
            </Link>
        </div>
      </SolidSection>
      <ParallaxSection
        imageUrl="/images/polaroid.png"
        altText="Fundo Obras Recentes"
        focusPosition="object-center"
      >
        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-2xl py-16 border-y-4 border-[#D91C2B]">
          <div className="w-full max-w-[1920px] mx-auto">
            <div className="text-foreground">
                <HomeCarousel works={recentWorks} />
            </div>
          </div>
        </div>
      </ParallaxSection>
      <SolidSection bgColor="bg-background" textColor="text-foreground">
        <div className="border-4 border-black dark:border-zinc-700 p-8 md:p-16 relative overflow-hidden group bg-card">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D91C2B]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-foreground">
                    {t.interestedInCommission}
                </h2>
                <p className="text-xl text-zinc-700 dark:text-zinc-400 mb-10 max-w-2xl font-medium">
                    {t.contactForDetails}
                </p>
                <Link
                    href="/contato"
                    className="inline-block bg-black dark:bg-white text-white dark:text-black px-10 py-5 font-black uppercase tracking-widest text-xl hover:bg-[#D91C2B] hover:text-white dark:hover:bg-[#D91C2B] transition-all duration-300 shadow-[6px_6px_0px_#D91C2B] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                    {t.talkToMe}
                </Link>
            </div>
        </div>
      </SolidSection>
    
    </main>
  );
}