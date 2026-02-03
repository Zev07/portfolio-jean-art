"use client"
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function ContatoPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-6 tracking-tight">
            {t.createSomethingUnique}
          </h1>
          <p className="text-xl text-foreground dark:text-foreground mb-12 leading-relaxed">
            {t.contactDescription}
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-card dark:bg-card rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-muted dark:text-muted tracking-wider">{t.email}</p>
                <a href="mailto:contato@artista.com" className="text-lg font-medium text-foreground dark:text-foreground hover:text-primary transition-colors">
                  jeanxamura@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-card dark:bg-card rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-muted dark:text-muted tracking-wider">{t.studio}</p>
                <p className="text-lg font-medium text-foreground dark:text-foreground">Rio de Janeiro, Brasil</p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-16 border-t border-card dark:border-card">
            <h3 className="text-lg font-bold mb-6 text-foreground dark:text-foreground">{t.followOnSocial}</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jeanrabiscos/" className="w-12 h-12 border border-zinc-200 dark:border-zinc-700 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-primary hover:text-[#858585] hover:border-primary transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jeanxamura/" className="w-12 h-12 border border-zinc-200 dark:border-zinc-700 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-primary hover:text-[#858585] hover:border-primary transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </section>
        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800">
            <ContactForm />
        </div>
      </div>
    </main>
  );
}