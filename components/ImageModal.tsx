"use client";

import { Download, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  title?: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageUrl, title, onClose }: ImageModalProps) {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !imageUrl) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const safeTitle = title ? title.replace(/\s+/g, "-") : "Obra";
      link.download = `${safeTitle}-JeanX.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar imagem:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 bg-[#D91C2B] text-white p-2 hover:bg-white hover:text-black hover:rotate-90 transition-all duration-300 shadow-[4px_4px_0px_#fff]"
      >
        <X size={32} />
      </button>

      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative w-full h-auto max-h-[80vh] border-4 border-white shadow-[0_0_50px_rgba(217,28,43,0.2)] bg-black">
          <Image
            src={imageUrl}
            alt={title || "Obra ampliada"}
            width={1200}
            height={800}
            className="w-full h-full object-contain max-h-[80vh]"
            priority
          />
        </div>
        <div className="mt-6 flex items-center gap-4">
            <div className="bg-white px-6 py-2 transform -skew-x-12 border-l-8 border-[#D91C2B]">
                <h3 className="text-black font-black uppercase italic tracking-widest text-xl transform skew-x-12">
                    {title || "Untitled"}
                </h3>
            </div>
            <button
                onClick={handleDownload}
                className="group flex items-center gap-2 bg-black text-white px-6 py-2 border-2 border-white hover:bg-[#D91C2B] hover:border-[#D91C2B] transition-colors shadow-[4px_4px_0px_#fff]"
            >
                <Download size={20} className="group-hover:animate-bounce" />
                <span className="font-bold uppercase tracking-widest text-sm">Download</span>
            </button>
        </div>

      </div>
    </div>
  );
}