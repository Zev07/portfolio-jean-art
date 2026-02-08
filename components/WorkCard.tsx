"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface WorkCardProps {
  work: {
    title: string;
    category: string;
    year: string;
    imageUrl?: string;
    mainImage?: any;
  };
}

export default function WorkCard({ work }: WorkCardProps) {
  const imageSrc =
    work.imageUrl ||
    (work.mainImage ? urlFor(work.mainImage).width(600).height(800).url() : "/images/placeholder.png");

  return (
    <div className="w-full h-full relative group bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-zinc-700">
      <div className="relative aspect-[3/4] overflow-hidden w-full">
        <Image
          src={imageSrc}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-black"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black/90 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-10">
        <p className="text-white text-xs font-black uppercase tracking-widest text-center">
            {work.title}
        </p>
      </div>
    </div>
  );
}