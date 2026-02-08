"use client";

import { Globe, Menu, Moon, Sun, X, Star } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const links = [
    { label: t.home, href: "/" },
    { label: t.works, href: "/obras" },
    { label: t.about, href: "/sobre" },
    { label: t.contact, href: "/contato" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white dark:bg-black z-50 border-b-4 border-black dark:border-zinc-200 transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D91C2B]"></div>

      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        <Link
            href="/"
            className="group relative inline-block bg-black dark:bg-white px-4 py-2 transform -skew-x-12 hover:bg-[#D91C2B] dark:hover:bg-[#D91C2B] transition-colors duration-200 shadow-[4px_4px_0px_#ccc] dark:shadow-[4px_4px_0px_#333] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]"
        >
            <span className="block transform skew-x-12 text-2xl font-black italic tracking-tighter text-white dark:text-black uppercase">
                JeanX
            </span>
            <Star size={12} className="absolute -top-1 -right-1 text-[#D91C2B] fill-[#D91C2B] group-hover:text-white group-hover:fill-white animate-pulse" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative group block px-5 py-2 overflow-hidden"
                  >
                    <span
                        className={`absolute inset-0 transform -skew-x-12 transition-transform duration-300 origin-bottom ${
                            isActive
                                ? "bg-[#D91C2B] scale-y-100"
                                : "bg-zinc-200 dark:bg-zinc-800 scale-y-0 group-hover:scale-y-100"
                        }`}
                    />
                    <span className={`relative z-10 text-sm font-black uppercase italic tracking-widest transition-colors duration-200 ${
                        isActive
                            ? "text-white"
                            : "text-black dark:text-white group-hover:text-black dark:group-hover:text-white"
                    }`}>
                        {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="h-8 w-[2px] bg-black dark:bg-white transform rotate-12 mx-2 opacity-20" />
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="group relative w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white transition-all duration-200"
            >
              <Globe size={18} className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
              <span className="absolute -bottom-6 text-[10px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-[#D91C2B] text-white px-1">
                {language.toUpperCase()}
              </span>
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="group w-10 h-10 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black hover:bg-[#D91C2B] dark:hover:bg-[#D91C2B] transition-all duration-200 shadow-[3px_3px_0px_#ccc] dark:shadow-[3px_3px_0px_#333] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-4">
            <button
              className="p-2 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black absolute w-full border-b-4 border-black dark:border-zinc-200 shadow-2xl animate-in slide-in-from-top-5 fade-in duration-200 z-40">
            <div className="h-2 bg-[repeating-linear-gradient(45deg,#D91C2B,#D91C2B_10px,transparent_10px,transparent_20px)] opacity-50"></div>
            
            <ul className="flex flex-col p-6 gap-2">
            {links.map((link) => (
                <li key={link.href}>
                <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full px-4 py-3 border-l-4 transition-all duration-200 font-black uppercase italic tracking-widest text-lg ${
                        pathname === link.href 
                        ? "border-[#D91C2B] bg-zinc-100 dark:bg-zinc-900 text-[#D91C2B]" 
                        : "border-transparent text-black dark:text-white hover:border-black dark:hover:border-white hover:pl-6"
                    }`}
                >
                    {link.label}
                </Link>
                </li>
            ))}
            
            <li className="pt-6 mt-4 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setLanguage(language === 'pt' ? 'en' : 'pt');
                    }}
                    className="flex items-center gap-2 text-sm font-black uppercase text-black dark:text-white hover:text-[#D91C2B]"
                  >
                    <Globe size={16} />
                    {language === 'pt' ? 'EN / PT' : 'PT / EN'}
                  </button>

                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-3 bg-black dark:bg-white text-white dark:text-black hover:bg-[#D91C2B] dark:hover:bg-[#D91C2B] transition-colors"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
            </li>
            </ul>
        </div>
      )}
    </nav>
  );
}