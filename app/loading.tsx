import { Plus } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 h-screen w-full flex items-center justify-center bg-zinc-100 dark:bg-[#121212] z-[9999]">
      
      <div className="relative flex flex-col items-center justify-center gap-8">
        <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#d8203e] blur-2xl opacity-20 animate-pulse scale-150"></div>
            <div className="transform rotate-45">
              <Plus
                  size={80}
                  className="text-black dark:text-white animate-[spin_4s_linear_infinite]" 
                  strokeWidth={1.5}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center transform rotate-45">
                <Plus
                    size={32}
                  className="text-[#d8203e] animate-[spin_2s_linear_infinite_reverse]" 
                    strokeWidth={2}
                />
            </div>
        </div>
        <div className="bg-black dark:bg-white px-6 py-2 border-2 border-[#d8203e] shadow-[4px_4px_0px_#d8203e]">
          <p className="text-white dark:text-black font-black uppercase tracking-[0.3em] text-sm animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}