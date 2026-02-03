import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-zinc-900" />
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest animate-pulse">
          Carregando Arte...
        </p>
      </div>
    </div>
  );
}