"use client"
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Linkedin, Mail, MapPin, Star } from "lucide-react";

export default function ContatoPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-[#D91C2B] selection:text-white overflow-x-hidden">
      
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0"
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
      <div className="fixed bottom-0 left-0 w-[60vw] h-[40vh] bg-[#D91C2B] transform skew-y-[-10deg] translate-y-[20%] opacity-10 z-0 mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <section className="flex flex-col h-full justify-center">
          <div className="mb-6 transform -skew-x-12 inline-block bg-black p-4 shadow-[8px_8px_0px_#D91C2B]">
            <h1 className="text-4xl md:text-6xl font-black text-white transform skew-x-12 uppercase italic tracking-tighter">
                {t.createSomethingUnique}
            </h1>
          </div>

          <div className="bg-white/80 dark:bg-black/50 backdrop-blur-sm p-4 border-l-4 border-[#D91C2B] mb-12">
            <p className="text-xl text-zinc-800 dark:text-zinc-200 font-bold leading-relaxed">
                {t.contactDescription}
            </p>
          </div>
          <div className="space-y-8 mb-16">
            <div className="group flex items-center gap-6">
              <div className="w-16 h-16 bg-black dark:bg-white flex items-center justify-center transform rotate-45 border-2 border-[#D91C2B] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:bg-[#D91C2B] group-hover:scale-110 transition-all duration-300">
                <Mail size={24} className="text-white dark:text-black transform -rotate-45 group-hover:text-white" />
              </div>
              
              <div>
                <p className="text-xs font-black uppercase text-[#D91C2B] tracking-[0.2em] mb-1 bg-black/10 dark:bg-white/10 px-2 inline-block">
                    {t.email}
                </p>
                <a href="mailto:contato@artista.com" className="block text-2xl font-black text-foreground hover:text-[#D91C2B] transition-colors underline decoration-2 underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-[#D91C2B]">
                  jeanxamura@gmail.com
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-6">
              <div className="w-16 h-16 bg-black dark:bg-white flex items-center justify-center transform rotate-45 border-2 border-[#D91C2B] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:bg-[#D91C2B] group-hover:scale-110 transition-all duration-300">
                <MapPin size={24} className="text-white dark:text-black transform -rotate-45 group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-[#D91C2B] tracking-[0.2em] mb-1 bg-black/10 dark:bg-white/10 px-2 inline-block">
                    {t.studio}
                </p>
                <p className="text-2xl font-black text-foreground">
                    Rio de Janeiro, Brasil
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t-2 border-black dark:border-white border-dashed">
            <h3 className="text-lg font-black mb-6 text-foreground uppercase italic tracking-widest flex items-center gap-2">
                <Star size={16} className="fill-black dark:fill-white" />
                {t.followOnSocial}
            </h3>
            
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jeanrabiscos/" className="w-14 h-14 bg-black dark:bg-zinc-800 flex items-center justify-center text-white hover:bg-[#D91C2B] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#fff] transition-all duration-200">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jeanxamura/" className="w-14 h-14 bg-black dark:bg-zinc-800 flex items-center justify-center text-white hover:bg-[#0077b5] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#fff] transition-all duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>
        <div className="relative mt-12 md:mt-0">
            <div className="absolute -top-6 -right-4 bg-[#D91C2B] text-white px-6 py-2 transform rotate-3 z-20 shadow-md border-2 border-black">
                <span className="font-black tracking-widest text-sm">TAKE YOUR HEART</span>
            </div>
            <div className="bg-card p-8 md:p-10 border-4 border-black dark:border-zinc-500 shadow-[12px_12px_0px_#D91C2B] relative group">
                <div className="mb-8 flex items-center justify-between border-b-4 border-black dark:border-zinc-700 pb-4">
                    <h2 className="text-3xl font-black italic uppercase tracking-tighter text-foreground">
                        Send Message
                    </h2>
                    <div className="w-8 h-8 bg-black dark:bg-white animate-pulse"></div>
                </div>
                <div className="relative z-10 [&_input]:border-2 [&_input]:border-black [&_textarea]:border-2 [&_textarea]:border-black [&_button]:bg-black [&_button]:text-white [&_button]:font-black [&_button]:uppercase [&_button]:tracking-widest [&_button]:hover:bg-[#D91C2B]">
                  <ContactForm />
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
                    <Star size={120} className="fill-black dark:fill-white" />
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}