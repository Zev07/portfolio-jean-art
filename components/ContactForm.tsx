"use client";

import Input from "@/components/Input";
import { useLanguage } from "@/context/LanguageContext";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  }
  return (
    <section className="bg-zinc-50 p-8 md:p-12 rounded-2xl h-fit">
      {isSuccess ? (
        <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in py-12">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <Send size={32} />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900">{t.messageSent}</h3>
          <p className="text-zinc-500 mt-2 max-w-xs">
            {t.thankYouMessage}
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-8 text-sm font-bold underline"
          >
            {t.sendNewMessage}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl text-primary font-bold mb-8">{t.requestQuote}</h2>
          
          <Input label={t.yourName} placeholder={t.namePlaceholder} required type="text" />
          <Input label={t.yourEmail} placeholder={t.emailPlaceholder} required type="email" />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black uppercase tracking-wider">
              {t.typeOfInterest}
            </label>
            <select className="w-full text-black bg-white border border-zinc-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-zinc-900 appearance-none">
              <option>{t.customCommission}</option>
              <option>{t.buyExisting}</option>
              <option>{t.exhibition}</option>
              <option>{t.otherSubject}</option>
            </select>
          </div>

          <div className="text-black flex flex-col gap-2">
            <label className="text-sm font-medium text-black uppercase tracking-wider">
              {t.message}
            </label>
            <textarea
              rows={5}
              required
              placeholder={t.messagePlaceholder}
              className="w-full bg-white border border-zinc-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-zinc-900 text-white font-bold py-4 rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" /> {t.sending}
              </>
            ) : (
              <>
                {t.sendMessage} <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
}