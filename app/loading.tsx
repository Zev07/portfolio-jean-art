import { Star } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 h-screen w-full flex items-center justify-center bg-zinc-100 dark:bg-[#121212] z-[9999]">
      
      <div className="relative flex flex-col items-center justify-center gap-8">
        <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#D91C2B] blur-2xl opacity-20 animate-pulse scale-150"></div>
            <Star
                size={80}
                className="text-black dark:text-white fill-black dark:fill-white animate-[spin_4s_linear_infinite]" 
                strokeWidth={1}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <Star
                    size={32}
                    className="text-[#D91C2B] fill-[#D91C2B] animate-[spin_2s_linear_infinite_reverse]" 
                />
            </div>
        </div>
        <div className="transform -skew-x-12 bg-black dark:bg-white px-6 py-2 border-2 border-[#D91C2B] shadow-[4px_4px_0px_#D91C2B]">
          <p className="text-white dark:text-black font-black uppercase tracking-[0.3em] text-sm transform skew-x-12 animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}