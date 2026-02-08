"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  imageUrl: string;
  altText: string;
  children?: React.ReactNode;
  focusPosition?: string;
  className?: string;
}

export default function ParallaxSection({
  imageUrl,
  altText,
  children,
  focusPosition = "object-center",
  className = "h-[60vh] md:h-[80vh]",
}: ParallaxSectionProps) {
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={ref}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%] z-0">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className={`object-cover brightness-[0.7] ${focusPosition}`}
          priority
        />
      </motion.div>
      <div className="relative z-10 p-6 text-center text-white max-w-2xl">
        {children}
      </div>
    </section>
  );
}