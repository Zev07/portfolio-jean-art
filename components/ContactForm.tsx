"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);
  const { t } = useLanguage();
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 animate-fade-in">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          {t.messageSent}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
          {t.thankYouMessage}
        </p>
        
        <button
          onClick={() => window.location.reload()}
          className="mt-8 text-sm font-bold text-primary hover:underline uppercase tracking-widest"
        >
          {t.sendNewMessage}
        </button>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {t.yourName}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder={t.namePlaceholder}
          className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {t.yourEmail}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder={t.emailPlaceholder}
          className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {t.typeOfInterest}
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 appearance-none bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
          >
            <option value="Comissão">{t.customCommission}</option>
            <option value="Compra">{t.buyExisting}</option>
            <option value="Exposição">{t.exhibition}</option>
            <option value="Outro">{t.otherSubject}</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
            ▼
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder={t.messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 resize-none min-h-[150px] bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary w-full py-4 text-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? t.sending : t.sendMessage}
      </button>
    </form>
  );
}