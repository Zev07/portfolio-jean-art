"use client"
import { urlFor } from '@/sanity/lib/image'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type WorkItem = {
  _id: string
  title: string
  category: string
  year: string
  mainImage: unknown
}

interface CarouselProps {
  works: WorkItem[]
}

export default function HomeCarousel({ works }: Readonly<CarouselProps>) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ])

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      'illustration': 'Illustration',
      '3dmodel': '3D Model',
      'study': 'Study',
      'other': 'Other'
    }
    return labels[category] || category
  }

  if (!works || works.length === 0) return null

  return (
    <div className="w-full">
      <div className="carousel-fade overflow-hidden cursor-grab active:cursor-grabbing relative" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-5">
          {works.map((work) => (
            <div key={work._id} className="flex-[0_0_82%] md:flex-[0_0_36%] lg:flex-[0_0_29%] min-w-0 pl-4 md:pl-5 pb-3">
              <Link
                href="/obras"
                className="group block relative aspect-square border-2 border-[#d8203e] bg-white overflow-hidden"
              >
                <Image
                  src={urlFor(work.mainImage).width(700).height(900).url()}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 saturate-125"
                />

                <div className="absolute top-2 left-2 bg-[#d8203e] px-2 py-1">
                  <span className="font-accent text-xs font-black uppercase tracking-wider text-white">
                    {getCategoryLabel(work.category)}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white px-3 py-2 text-black">
                  <h3 className="font-accent text-xl font-black uppercase italic leading-none">
                    {work.title}
                  </h3>
                  <p className="font-accent text-sm font-black tracking-wide">{work.year}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link
          href="/obras"
          className="inline-flex items-center gap-2 bg-[#d8203e] px-5 py-3 font-accent text-2xl font-black uppercase italic text-white"
        >
          Ver tudo <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}