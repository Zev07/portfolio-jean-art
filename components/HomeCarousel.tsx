"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { ArrowRight, Star } from 'lucide-react'

interface CarouselProps {
  works: any[]
}

export default function HomeCarousel({ works }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ])

  if (!works || works.length === 0) return null

  return (
    <div className="w-full mx-auto px-4 md:px-10 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="inline-block transform -skew-x-12 bg-black dark:bg-white p-3 border-l-8 border-[#D91C2B] mb-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
            <h2 className="transform skew-x-12 text-3xl md:text-4xl font-black text-white dark:text-black uppercase italic tracking-tighter">
                Últimas Criações
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Star size={16} className="text-[#D91C2B] fill-[#D91C2B]" />
            <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-sm">
                Atualizações do Metaverso
            </p>
          </div>
        </div>
        <Link
            href="/obras"
            className="hidden md:flex items-center gap-2 text-black dark:text-white font-black uppercase tracking-widest hover:text-[#D91C2B] transition-colors group"
        >
          Ver galeria completa
          <div className="bg-black text-white p-1 group-hover:bg-[#D91C2B] transition-colors transform -skew-x-12">
            <ArrowRight size={18} className="transform skew-x-12"/>
          </div>
        </Link>
      </div>
      <div className="overflow-hidden cursor-grab active:cursor-grabbing p-4 -m-4" ref={emblaRef}>
        <div className="flex -ml-6">
          
          {works.map((work) => (
            <div key={work._id} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-6 pb-4">
              <Link
                href="/obras"
                className="group block relative h-[380px] md:h-[500px] border-4 border-black dark:border-zinc-200 bg-black shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#D91C2B] hover:shadow-[12px_12px_0px_#D91C2B] dark:hover:shadow-[12px_12px_0px_#fff] hover:-translate-y-2 transition-all duration-200"
              >
                <div className="w-full h-full relative overflow-hidden">
                    <Image
                    src={urlFor(work.mainImage).width(600).height(800).url()}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                </div>
                <div className="absolute top-4 left-0">
                    <div className="bg-[#D91C2B] text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1 transform -skew-x-12 -translate-x-2 border-2 border-white shadow-md">
                        <span className="block transform skew-x-12">
                            {work.category === 'principal' ? 'Masterpiece' : 'Sketch'}
                        </span>
                    </div>
                </div>
                <div className="absolute bottom-4 right-0 max-w-[90%]">
                    <div className="bg-white text-black p-3 border-l-4 border-black transform -skew-x-12 translate-x-2 group-hover:translate-x-0 transition-transform duration-200 shadow-lg">
                        <div className="transform skew-x-12">
                            <h3 className="text-lg md:text-xl font-black uppercase italic leading-none mb-1">
                                {work.title}
                            </h3>
                            <p className="text-zinc-600 text-xs font-bold">{work.year}</p>
                        </div>
                    </div>
                </div>

              </Link>
            </div>
          ))}

        </div>
      </div>

      <div className="mt-12 text-center md:hidden">
        <Link
            href="/obras"
            className="inline-block bg-black text-white px-6 py-3 font-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_#D91C2B] active:shadow-none active:translate-y-1 transition-all"
        >
          <div className="flex items-center gap-2">
            Ver tudo <ArrowRight size={16} />
          </div>
        </Link>
      </div>

    </div>
  )
}