import { ChevronRight } from "lucide-react";

interface CoverProps {
  onNavigate: (view: string) => void;
}

export function Cover({ onNavigate }: CoverProps) {
  return (
    <div className="h-screen w-full bg-[#FAF9F6] flex flex-col items-center justify-center px-12">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-[120px] leading-none text-[#2D2D2D] font-light tracking-tight">
            2026
          </h1>
          <div className="h-px w-32 bg-[#9CAF88] mx-auto"></div>
        </div>
        
        <p className="text-2xl text-[#5A5A5A] font-light italic leading-relaxed">
          "El propósito de nuestras vidas es ser felices."
          <span className="block mt-2 text-lg not-italic text-[#8B8680]">— Dalai Lama</span>
        </p>

        <button
          onClick={() => onNavigate("index")}
          className="mt-16 inline-flex items-center gap-3 px-8 py-4 bg-[#9CAF88] text-white rounded-full hover:bg-[#8B9E78] transition-all duration-300 hover:shadow-lg"
        >
          <span className="text-lg">Comenzar</span>
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="absolute bottom-12 text-[#8B8680] text-sm">
        Journal Personal 2026
      </div>
    </div>
  );
}
