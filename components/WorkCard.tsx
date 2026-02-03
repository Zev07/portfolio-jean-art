import Image from "next/image";
import { WorkItem } from "@/data/works";

interface WorkCardProps {
  work: WorkItem;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="group relative break-inside-avoid mb-6 cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-zinc-200">
        <Image
        src={work.imageUrl}
        alt={work.title}
        width={600}
        height={800}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white border border-white px-4 py-2 rounded-full text-sm tracking-wider uppercase">
            Ver Detalhes
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-foreground">{work.title}</h3>
        <p className="text-sm text-zinc-500 flex justify-between">
          <span>{work.year}</span>
          {work.description && <span>— {work.description}</span>}
        </p>
      </div>
    </div>
  );
}