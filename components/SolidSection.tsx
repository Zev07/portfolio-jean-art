"use client";

interface SolidSectionProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export default function SolidSection({
  children,
  bgColor = "bg-white",
  textColor = "text-black",
  className = "",
}: SolidSectionProps) {
  return (
    <section
      className={`py-20 px-6 md:px-12 relative overflow-hidden ${bgColor} ${textColor} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}