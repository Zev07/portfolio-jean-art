"use client";

import { ArrowUp, Instagram, Linkedin, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t-4 border-[#D91C2B] relative overflow-hidden">
      
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Star size={120} className="fill-[#D91C2B]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div id="brand" className="col-span-1 md:col-span-2">
          <Link
            href="/"
            className="group inline-block transform -skew-x-12 bg-white px-4 py-2 mb-4 hover:bg-[#D91C2B] transition-colors duration-200"
          >
            <span className="block transform skew-x-12 text-2xl font-black uppercase italic tracking-tighter text-black group-hover:text-white transition-colors">
              JeanX
            </span>
          </Link>
          <p className="leading-relaxed max-w-xs text-sm opacity-80 border-l-2 border-[#D91C2B] pl-4 font-medium text-zinc-300">
            {t.footerDescription}
          </p>
        </div>
        <div>
          <h3 className="text-white font-black uppercase italic tracking-widest mb-6 text-xs flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D91C2B] transform rotate-45"></div>
            {t.navigation}
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: t.home, href: "/" },
              { label: t.about, href: "/sobre" },
              { label: t.contact, href: "/contato" }
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group block w-fit relative px-2"
                >
                  <span className="absolute inset-0 bg-[#D91C2B] transform skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  
                  <span className="relative font-bold text-zinc-400 group-hover:text-white transition-colors uppercase tracking-wider">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-white font-black uppercase italic tracking-widest mb-6 text-xs flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D91C2B] transform rotate-45"></div>
              {t.socialNetworks}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jeanrabiscos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_#D91C2B] transition-all duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jeanxamura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_#0077b5] transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-black text-white hover:text-[#D91C2B] transition-colors w-fit uppercase tracking-widest"
          >
            {t.backToTop}
            <div className="bg-white text-black p-1 group-hover:bg-[#D91C2B] group-hover:text-white transition-colors transform rotate-45 group-hover:rotate-0 duration-300">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs gap-4 text-zinc-500 font-mono">
        <p>&copy; {currentYear} JeanX. All rights reserved.</p>
        
        <p className="flex items-center gap-1">
          Dev by
          <a
            href="https://github.com/Zev07"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-[#D91C2B] hover:underline decoration-2 underline-offset-4 transition-all"
          >
            Zëv
          </a>
        </p>
      </div>

    </footer>
  );
}