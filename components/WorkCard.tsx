"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface WorkCardProps {
  work: {
    title: string;
    category: string;
    year: string;
    // O card pode receber a URL pronta (imageUrl) OU o objeto bruto (mainImage)
    imageUrl?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mainImage?: any;
  };
}

export default function WorkCard({ work }: WorkCardProps) {
  // LÓGICA DE SEGURANÇA:
  // 1. Tenta usar a 'imageUrl' pronta (Vem da página Obras)
  // 2. Se não tiver, tenta gerar a URL usando 'mainImage' (Vem da Home ou Sanity puro)
  // 3. Se não tiver nenhum, usa um placeholder
  const imageSrc =
    work.imageUrl ||
    (work.mainImage ? urlFor(work.mainImage).width(600).height(800).url() : "/images/placeholder.png");

  return (
    // ESTILO PERSONA:
    // 1. rounded-none (Sem bordas redondas!)
    // 2. bg-white (Fundo branco para contraste da imagem)
    // 3. border-b-4 border-black (Detalhe grosso embaixo)
    <div className="w-full h-full relative group bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-zinc-700">
      
      {/* Container da Imagem */}
      <div className="relative aspect-[3/4] overflow-hidden w-full">
        <Image
          src={imageSrc}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay de Ruído/Textura (Opcional) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-black"></div>
      </div>

      {/* Legenda Estilo P5 (Preto com letras brancas) */}
      <div className="absolute bottom-0 left-0 w-full bg-black/90 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-10">
         <p className="text-white text-xs font-black uppercase tracking-widest text-center">
            {work.title}
         </p>
      </div>
    </div>
  );
}