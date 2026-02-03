import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-zinc-50 px-6 text-center">
      <h1 className="text-9xl font-bold text-zinc-200">404</h1>
      <h2 className="text-2xl font-bold text-zinc-900 mt-4">Página não encontrada</h2>
      <p className="text-zinc-500 mt-2 mb-8 max-w-md">
        A arte é feita de exploração, mas parece que você chegou em um lugar que ainda não foi pintado.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-all"
      >
        <MoveLeft size={18} /> Voltar ao Início
      </Link>
    </div>
  );
}