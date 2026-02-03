"use client"
import ParallaxSection from "@/components/ParallaxSection";
import SolidSection from "@/components/SolidSection";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      <ParallaxSection
        imageUrl="/images/ema.png"
        altText="Obra Principal do Artista"
        focusPosition="object-[center_20%]"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight shadow-black drop-shadow-lg">
          {t.homeTitle}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-2xl">
          {t.homeSubtitle}
        </p>
        <Link
          href="/obras"
          className="btn-primary inline-flex items-center gap-2"
        >
          {t.viewFullPortfolio}
        </Link>
      </ParallaxSection>

      <SolidSection bgColor="bg-surface" textColor="text-foreground">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-primary mb-2 opacity-80">
          {t.aboutProcess}
        </h2>
        <p className="text-xl leading-relaxed max-w-2xl mb-6">
          &ldquo;{t.homeQuote}&rdquo;
        </p>
        <Link href="/sobre" className="group flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors font-medium">
          {t.readBiography}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </SolidSection>

      <ParallaxSection imageUrl="/images/polaroid.png" altText="Detalhe de obra em exposição">
        <div className="bg-black/40 p-6 rounded-xl backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl font-bold text-white">{t.recentWorks}</h2>
            <p className="text-lg mt-2 text-zinc-200"> P.Diddy e Maduro — 2025</p>
        </div>
      </ParallaxSection>

      <SolidSection bgColor="bg-surface dark:bg-black" textColor="text-foreground">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-primary mb-2 opacity-80">{t.interestedInCommission}</h2>
        <p className="text-xl text-muted mb-8">
          {t.contactForDetails}
        </p>
        <Link
          href="/contato"
          className="btn-primary inline-block hover:scale-105 transition-transform"
        >
            {t.talkToMe}
        </Link>
      </SolidSection>
    
    </main>
  );
}