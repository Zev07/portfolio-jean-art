"use client";

import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
    <nav className="sticky top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-widest uppercase text-zinc-900 dark:text-white group">
          JeanX
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-1 text-xs font-bold text-primary hover:opacity-80 transition-opacity border border-primary/20 px-2 py-1 rounded"
            >
              <Globe size={14} />
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-4">
            <button
                className="p-2 text-primary"
                onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 absolute w-full border-b border-zinc-100 dark:border-zinc-900 shadow-xl">
            <ul className="flex flex-col p-6 gap-4">
            {links.map((link) => (
                <li key={link.href}>
                <Link
                    href={link.href}
                    className="text-lg font-medium block w-full hover:text-primary dark:text-zinc-300"
                    onClick={() => setIsOpen(false)}
                >
                    {link.label}
                </Link>
                </li>
            ))}
            <li className="pt-4 border-t border-zinc-100 dark:border-zinc-900">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setLanguage(language === 'pt' ? 'en' : 'pt');
                    }}
                    className="flex items-center gap-2 text-sm font-bold text-primary"
                  >
                    <Globe size={16} />
                    {language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
                  </button>

                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 text-primary bg-primary/10 rounded-full"
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
            </li>
            </ul>
        </div>
      )}
    </nav>
  );
}