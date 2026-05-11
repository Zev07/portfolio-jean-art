"use client";

import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
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
    { label: t.works, href: "/obras" },
    { label: t.about, href: "/sobre" },
    { label: t.contact, href: "/contato" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-0 flex justify-center w-full">
      <nav className="py-0.05 md:py-0.05 px-0 md:px-12" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="flex items-center justify-between gap-8">
          {/* Logo - Canto Esquerdo */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0 -ml-6 md:-ml-12">
            <Image
              src="/images/jeanxartworks.png"
              alt="JeanX Artworks"
              width={160}
              height={64}
              className="h-auto w-32 md:w-44 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centro/Direita */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-4">
              {links.map((link, index) => {
                const isActive = pathname === link.href;
                const skewValues = ["skew-y-2", "-skew-y-1", "skew-y-1.5"];
                const trapezoidShapes = [
                  "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                  "polygon(0% 0%, 95% 0%, 85% 100%, 5% 100%)",
                  "polygon(5% 0%, 100% 0%, 100% 100%, 10% 100%)",
                ];
                
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 font-bold uppercase text-xs tracking-wider transition-colors duration-200 ${skewValues[index]} ${
                        isActive
                          ? "bg-[#00CED1] text-black"
                          : "hover:text-[#00CED1]"
                      }`}
                      style={{
                        ...(!isActive ? { color: 'var(--text-primary)' } : {}),
                        ...(isActive ? {
                          clipPath: trapezoidShapes[index]
                        } : {})
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 pl-3 border-opacity-20" style={{ borderLeft: `1px solid var(--text-primary)` }}>
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="hover:text-[#00CED1] transition-colors flex items-center justify-center"
                style={{ color: 'var(--text-primary)' }}
              >
                <Globe size={18} />
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:text-[#00CED1] transition-colors flex items-center justify-center"
                style={{ color: 'var(--text-primary)' }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="hover:text-[#00CED1] transition-colors flex items-center justify-center"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            >
              <Globe size={16} />
            </button>
            <button
              className="hover:text-[#00CED1] transition-colors flex items-center justify-center"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="hover:text-[#00CED1] transition-colors flex items-center justify-center"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-opacity-10 mt-2" style={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--text-primary)' }}>
            <ul className="flex flex-col p-3 gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full px-3 py-2 font-bold uppercase text-xs transition-all duration-200 ${
                        isActive
                          ? "bg-[#00CED1] text-black"
                          : "hover:text-[#00CED1]"
                      }`}
                      style={!isActive ? { color: 'var(--text-primary)' } : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}