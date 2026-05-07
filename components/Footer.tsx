"use client";

import { Instagram, Linkedin, X, Youtube } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 relative overflow-hidden">
      {/* Decorative Characters Section */}
      <div className="absolute top-0 left-4 md:left-12 w-24 h-24 md:w-40 md:h-40 pointer-events-none opacity-80">
        <Image
          src="/images/footer-character.png"
          alt="Pizza Character"
          width={160}
          height={160}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 right-4 md:right-12 w-24 h-24 md:w-40 md:h-40 pointer-events-none opacity-80">
        <Image
          src="/images/footer-hand.png"
          alt="Happy Hand"
          width={160}
          height={160}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Back to Top Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={scrollToTop}
            className="bg-zinc-800 hover:bg-[#d8203e] text-white px-6 py-3 rounded-full font-black uppercase text-sm tracking-wider transition-all duration-300 hover:shadow-lg"
          >
            BACK TO TOP
          </button>
        </div>

        {/* Socials & Extras Section */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-4 border-[#d8203e] rounded-3xl p-8 md:p-12">
          <h3 className="text-white font-display text-4xl md:text-5xl font-black uppercase mb-8 tracking-tight">
            socials & extras
          </h3>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 mb-8">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-black border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 rounded-lg hover:shadow-[0_0_20px_#27dfcf]"
              title="X"
            >
              <X size={28} />
            </a>
            <a
              href="https://www.instagram.com/jeanrabiscos/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-black border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 rounded-lg hover:shadow-[0_0_20px_#27dfcf]"
              title="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-black border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 rounded-lg hover:shadow-[0_0_20px_#27dfcf]"
              title="YouTube"
            >
              <Youtube size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jeanxamura/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-black border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 rounded-lg hover:shadow-[0_0_20px_#27dfcf]"
              title="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm font-mono">
            <p className="text-white font-black">&copy; {currentYear} JEANX. All rights reserved.</p>
            <p className="text-[#27dfcf] font-black">
              Dev by{" "}
              <a
                href="https://github.com/Zev07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline"
              >
                Zëv
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}