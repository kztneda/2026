import { Home, ChevronLeft, ChevronRight } from "lucide-react";

interface MonthViewProps {
  month: number;
  onNavigate: (view: string, weekOrMonth?: number) => void;
}

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export function MonthView({ month, onNavigate }: MonthViewProps) {
  const weekStart = month * 4 + 1;
  const weeks = [weekStart, weekStart + 1, weekStart + 2, weekStart + 3];

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] px-16 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={() => onNavigate("index")}
            className="flex items-center gap-2 px-6 py-3 text-[#5A5A5A] hover:text-[#9CAF88] transition-colors"
          >
            <ChevronLeft className="size-5" />
            <span>Índice</span>
          </button>
          <button
            onClick={() => onNavigate("cover")}
            className="flex items-center gap-2 px-6 py-3 text-[#5A5A5A] hover:text-[#9CAF88] transition-colors"
          >
            <Home className="size-5" />
          </button>
        </div>

        {/* Month Header */}
        <div className="mb-16 text-center">
          <h1 className="text-7xl text-[#2D2D2D] font-light mb-4">{months[month]}</h1>
          <div className="h-px w-24 bg-[#9CAF88] mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-4 text-sm text-[#8B8680]">
            <span className="w-8">L</span>
            <span className="w-8">M</span>
            <span className="w-8">X</span>
            <span className="w-8">J</span>
            <span className="w-8">V</span>
            <span className="w-8 text-[#9CAF88]">S</span>
            <span className="w-8 text-[#9CAF88]">D</span>
          </div>
        </div>

        {/* Enfoque del mes */}
        <div className="mb-12 bg-white rounded-3xl p-12 border-2 border-[#E8E7E3]">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-6">Enfoque del mes</h2>
          <div className="bg-[#FAF9F6] rounded-xl p-8 min-h-[120px] border border-dashed border-[#C5C5C5]">
            <p className="text-[#8B8680] italic">Espacio para escritura manual...</p>
          </div>
        </div>

        {/* Objetivo Principal */}
        <div className="mb-12 bg-white rounded-3xl p-12 border-2 border-[#E8E7E3]">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-6">Objetivo Principal</h2>
          <div className="bg-[#FAF9F6] rounded-xl p-8 min-h-[100px] border border-dashed border-[#C5C5C5]">
            <p className="text-[#8B8680] italic">¿Qué quiero lograr este mes?</p>
          </div>
        </div>

        {/* Tareas Importantes */}
        <div className="mb-12 bg-white rounded-3xl p-12 border-2 border-[#E8E7E3]">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-6">Tareas Importantes</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border-2 border-[#9CAF88]"></div>
                <div className="flex-1 h-px bg-[#E8E7E3]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Reflexión */}
        <div className="mb-12 bg-white rounded-3xl p-12 border-2 border-[#E8E7E3]">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-6">Reflexión</h2>
          <div className="bg-[#FAF9F6] rounded-xl p-8 min-h-[120px] border border-dashed border-[#C5C5C5]">
            <p className="text-[#8B8680] italic">¿Qué aprendí este mes?</p>
          </div>
        </div>

        {/* Semanas */}
        <div className="mb-12">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-8 flex items-center gap-3">
            <div className="h-px w-12 bg-[#9CAF88]"></div>
            Semanas
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {weeks.map((weekNum) => (
              <button
                key={weekNum}
                onClick={() => onNavigate("week", weekNum)}
                className="group bg-white p-8 rounded-2xl border-2 border-[#E8E7E3] hover:border-[#9CAF88] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-sm text-[#8B8680] mb-1">Semana</div>
                    <div className="text-3xl text-[#2D2D2D]">{weekNum}</div>
                  </div>
                  <ChevronRight className="size-6 text-[#8B8680] group-hover:text-[#9CAF88] group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}