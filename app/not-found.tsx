"use client";

import Link from "next/link";
import { MoveLeft, Star, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground overflow-hidden relative selection:bg-[#D91C2B] selection:text-white">
      <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
      <div className="absolute top-0 right-0 w-[120vw] h-[20vh] bg-black dark:bg-white transform -rotate-12 translate-x-20 -translate-y-10 opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-[120vw] h-[20vh] bg-[#D91C2B] transform -rotate-12 -translate-x-20 translate-y-10 opacity-10 mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="relative z-10 flex flex-col items-center px-6">
        <div className="mb-6 animate-bounce">
            <AlertTriangle size={64} className="text-[#D91C2B] fill-black dark:fill-white" strokeWidth={1.5} />
        </div>
        <div className="relative mb-2">
            <h1 className="absolute top-2 left-2 text-9xl md:text-[12rem] font-black italic tracking-tighter text-[#D91C2B] opacity-30 select-none blur-sm">
                404
            </h1>
            <h1 className="relative text-9xl md:text-[12rem] font-black italic tracking-tighter text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:drop-shadow-[4px_4px_0px_#D91C2B]">
                404
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-[#D91C2B] text-white px-4 py-1 border-2 border-black shadow-lg">
                <span className="font-black tracking-widest text-xl">ERROR</span>
            </div>
        </div>
        <div className="bg-black dark:bg-white p-4 transform -skew-x-12 border-l-8 border-[#D91C2B] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] mb-8 max-w-lg">
            <div className="transform skew-x-12 text-center">
                <h2 className="text-2xl font-black text-white dark:text-black uppercase italic tracking-wider mb-2">
                    Página não encontrada
                </h2>
                <p className="text-zinc-400 dark:text-zinc-600 font-medium">
                    A arte é feita de exploração, mas parece que você chegou em um lugar que ainda não foi pintado.
                </p>
            </div>
        </div>
        <Link
          href="/"
          className="group relative inline-block bg-white dark:bg-black px-8 py-4 border-4 border-black dark:border-white shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] hover:shadow-[8px_8px_0px_#D91C2B] dark:hover:shadow-[8px_8px_0px_#D91C2B] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200"
        >
          <span className="flex items-center gap-3 font-black uppercase tracking-widest text-lg text-black dark:text-white group-hover:text-[#D91C2B] transition-colors">
            <MoveLeft size={24} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Voltar ao Início
          </span>
          <Star size={16} className="absolute top-1 right-1 text-[#D91C2B] fill-[#D91C2B] opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

      </div>
    </main>
  );
}