"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Skill = {
  name: string;
  color: string;
  bgColor: string;
  description: string;
  icon: string;
};

const skills: Skill[] = [
  {
    name: "Adobe Photoshop",
    color: "#0077B6",
    bgColor: "from-blue-900 to-blue-700",
    description: "Utilizo o Photoshop para criar e editar ilustrações digitais, pinturas e artes conceituais. Trabalho com camadas, pincéis personalizados e ferramentas avançadas de manipulação de imagem para produzir obras de alta qualidade.",
    icon: "/images/adobe-photoshop.png",
  },
  {
    name: "Adobe Illustrator",
    color: "#F79C2B",
    bgColor: "from-yellow-800 to-orange-700",
    description: "Especialista em criação de arte vetorial e design gráfico. Utilizo o Illustrator para criar logos, ícones, ilustrações escaláveis e materiais de design com precisão e qualidade profissional.",
    icon: "/images/adobe-illustrator.png",
  },
  {
    name: "Adobe Premiere",
    color: "#8B5CF6",
    bgColor: "from-purple-900 to-purple-700",
    description: "Realizo a edição completa de vídeos e criação de conteúdo visual em movimento. Trabalho com timeline, efeitos, transições, correção de cores e sincronização de áudio para produzir vídeos profissionais.",
    icon: "/images/adobe-premiere.png",
  },
  {
    name: "Adobe Substance Painter",
    color: "#FF6B35",
    bgColor: "from-orange-900 to-orange-700",
    description: "Especialista em texturização 3D e pintura digital de modelos. Utilizo Substance Painter para criar texturas fotorrealistas e materiais complexos com precisão profissional.",
    icon: "/images/adobe-substance-painter.png",
  },
  {
    name: "Blender",
    color: "#F26419",
    bgColor: "from-orange-600 to-red-500",
    description: "Especialista em modelagem 3D, animação de caracteres e objetos, além de renderização final. Trabalho com materiais, iluminação, VFX e criação de conteúdo 3D para diversos fins criativos.",
    icon: "/images/blender.png",
  },
  {
    name: "Clip Studio Paint",
    color: "#1E90FF",
    bgColor: "from-blue-900 to-blue-700",
    description: "Utilizo o Clip Studio Paint para criar mangás, Comics e ilustrações digitais profissionais. Trabalho com ferramentas especializadas de desenho, efeitos 3D e recursos avançados de animação.",
    icon: "/images/clip-studio.png",
  },
  {
    name: "Maya",
    color: "#00B4D8",
    bgColor: "from-cyan-900 to-blue-700",
    description: "Trabalho com Maya para modelagem 3D complexa, rigging e animação de caracteres. Desenvolvo soluções avançadas em animação, VFX e criação de ambientes 3D profissionais.",
    icon: "/images/maya.png",
  },
  {
    name: "Unreal Engine",
    color: "#000000",
    bgColor: "from-gray-900 to-black",
    description: "Desenvolvo ambientes 3D imersivos, cenas interativas e experiências em realidade virtual usando a Unreal Engine. Trabalho com modelagem, animação, iluminação e programação em Blueprint.",
    icon: "/images/unreal-engine.png",
  },
  {
    name: "ZBrush",
    color: "#7B2CBF",
    bgColor: "from-purple-900 to-purple-700",
    description: "Escultor digital especializado em modelagem de caracteres e sculpting. Utilizo ZBrush para criar modelos detalhados, anatomia complexa e assets 3D de alta qualidade.",
    icon: "/images/zbrush.png",
  },
];

export default function SkillsSection() {
  const { t } = useLanguage();
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number | null>(null);
  const selectedSkill = selectedSkillIndex === null ? null : skills[selectedSkillIndex];

  const handlePrevious = () => {
    if (selectedSkillIndex !== null) {
      setSelectedSkillIndex((selectedSkillIndex - 1 + skills.length) % skills.length);
    }
  };

  const handleNext = () => {
    if (selectedSkillIndex !== null) {
      setSelectedSkillIndex((selectedSkillIndex + 1) % skills.length);
    }
  };

  return (
    <>
      <section className="border-y-4 border-[#d8203e] py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--foreground)' }}>
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl md:text-7xl font-black uppercase mb-8 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {t.aboutMySkills}
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
              {/* Left side - Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-xs">
                  <Image
                    src="/images/workandilu.png"
                    alt="Work and Illustration"
                    width={280}
                    height={280}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              </div>

              {/* Center - Description + Skills Grid */}
              <div className="flex flex-col gap-8">
                <p className="text-lg leading-relaxed font-accent" style={{ color: 'var(--text-secondary)' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {skills.map((skill, idx) => (
                    <button
                      key={`${skill.name}-${idx}`}
                      onClick={() => setSelectedSkillIndex(idx)}
                      className="aspect-square rounded-lg hover:scale-105 transition-transform relative group cursor-pointer shadow-lg hover:shadow-xl overflow-hidden flex items-center justify-center"
                      style={{ backgroundColor: 'var(--bg-card)' }}
                      title={skill.name}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        quality={75}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 rounded-lg bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right side - Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-xs">
                  <Image
                    src="/images/3dwork.png"
                    alt="3D Work"
                    width={280}
                    height={280}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSkill && selectedSkillIndex !== null && (
        <dialog 
          open 
          onClick={() => setSelectedSkillIndex(null)} 
          onKeyDown={(e) => e.key === 'Escape' && setSelectedSkillIndex(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 w-full h-screen border-none"
        >
          <div className="border-4 border-[#d8203e] p-8 md:p-12 max-w-2xl w-full relative" style={{ backgroundColor: 'var(--bg-dark)' }} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedSkillIndex(null)}
              className="absolute top-4 right-4 bg-[#d8203e] text-white p-2 hover:bg-[#27dfcf] hover:text-black transition-colors"
              aria-label="Close dialog"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="flex gap-8 items-center">
              {/* Icon/Logo */}
              <div className="w-48 h-48 rounded-xl shrink-0 shadow-lg flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
                <Image
                  src={selectedSkill.icon}
                  alt={selectedSkill.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="font-display text-4xl font-black uppercase mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {selectedSkill.name}
                </h3>
                <p className="font-accent text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  {selectedSkill.description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-[#d8203e]">
              <button
                onClick={handlePrevious}
                className="bg-[#d8203e] hover:bg-[#27dfcf] text-white hover:text-black p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Previous skill"
              >
                <ChevronLeft size={24} />
              </button>
              
              <span className="font-accent text-sm uppercase" style={{ color: 'var(--text-secondary)' }}>
                {selectedSkillIndex + 1} de {skills.length}
              </span>

              <button
                onClick={handleNext}
                className="bg-[#d8203e] hover:bg-[#27dfcf] text-white hover:text-black p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Next skill"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
