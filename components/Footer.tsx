"use client";

import { ArrowUp, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-ftrbg text-zinc-600 dark:text-zinc-400 py-12 border-t-2 border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div id ="brand" className="col-span-1 md:col-span-2">
          <span className="text-2xl font-bold tracking-widest uppercase text-primary">
            Jean X Art
          </span>
          <p className="text-muted leading-relaxed max-w-xs">
            {t.footerDescription}
          </p>
        </div>
        <div>
          <h3 className="text-zinc-900 dark:text-white text-primary font-bold uppercase tracking-wider mb-4 text-sm">
            {t.navigation}
          </h3>
          <ul className="text-muted space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">{t.home}</Link></li>
            <li><Link href="/sobre" className="hover:text-primary transition-colors">{t.about}</Link></li>
            <li><Link href="/contato" className="hover:text-primary transition-colors">{t.contact}</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-zinc-900 dark:text-white text-primary font-bold uppercase tracking-wider mb-4 text-sm">{t.socialNetworks}</h3>
            <div className="text-muted flex gap-4">
              <a href="https://www.instagram.com/jeanrabiscos/" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/in/jeanxamura/" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="text-muted flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group w-fit"
          >
            {t.backToTop}
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      <div className="text-primary max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        <p>&copy; {currentYear} Jean X Art All rights reserved.</p>
        <p>Dev by <span className="text-primary font-bold">Zëv</span></p>
      </div>
    </footer>
  );
}