"use client";

import { useState, useRef } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [token, setToken] = useState<string | null>(null);
  const refTurnstile = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    if (!token) {
        setStatus("error");
        alert("Erro de verificação de segurança. Tente novamente.");
        return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      if (!response.ok) throw new Error("Falha no envio");

      setStatus("success");
      refTurnstile.current?.reset();
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="opacity-0 absolute -z-10 w-0 h-0 overflow-hidden">
        <label htmlFor="gotcha">Não preencha este campo se for humano:</label>
        <input
          type="text"
          name="gotcha"
          id="gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest">
          Name / Company
        </label>
        <input
          required
          name="name"
          id="name"
          type="text"
          className="w-full bg-transparent p-3 font-medium outline-none transition-all focus:bg-black/5 dark:focus:bg-white/10"
          placeholder="Joker"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest">
          Email
        </label>
        <input
          required
          name="email"
          id="email"
          type="email"
          className="w-full bg-transparent p-3 font-medium outline-none transition-all focus:bg-black/5 dark:focus:bg-white/10"
          placeholder="phantom@thieves.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest">
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          rows={5}
          className="w-full resize-none bg-transparent p-3 font-medium outline-none transition-all focus:bg-black/5 dark:focus:bg-white/10"
          placeholder="I want to steal your heart..."
        />
      </div>
      <div className="my-4">
        <Turnstile
            ref={refTurnstile}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
            onSuccess={(token) => setToken(token)}
            options={{
                theme: "auto",
                size: "flexible"
            }}
        />
      </div>

      <button
        disabled={status === "loading" || status === "success"}
        type="submit"
        className="w-full bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] py-4 hover:bg-[#D91C2B] hover:text-white dark:hover:bg-[#D91C2B] dark:hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" /> Enviando...
          </>
        ) : status === "success" ? (
          "Enviado com Sucesso!"
        ) : (
          <>
            Enviar Mensagem <Send size={18} />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-[#D91C2B] font-bold text-center text-sm">
          Erro ao enviar. Tente novamente mais tarde.
        </p>
      )}
    </form>
  );
}