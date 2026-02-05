import { ChevronRight, Home, BookOpen, Target, Lightbulb } from "lucide-react";

interface IndexProps {
  onNavigate: (view: string, month?: number) => void;
}

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export function Index({ onNavigate }: IndexProps) {
  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] px-16 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-6xl text-[#2D2D2D] font-light mb-2">Índice Anual</h1>
            <p className="text-xl text-[#8B8680]">2026</p>
          </div>
          <button
            onClick={() => onNavigate("cover")}
            className="flex items-center gap-2 px-6 py-3 text-[#5A5A5A] hover:text-[#9CAF88] transition-colors"
          >
            <Home className="size-5" />
            <span>Inicio</span>
          </button>
        </div>

        {/* Months Grid */}
        <div className="mb-16">
          <h2 className="text-3xl text-[#2D2D2D] font-light mb-8 flex items-center gap-3">
            <div className="h-px w-12 bg-[#9CAF88]"></div>
            Meses
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {months.map((month, index) => (
              <button
                key={month}
                onClick={() => onNavigate("month", index)}
                className="group bg-white p-8 rounded-2xl border-2 border-[#E8E7E3] hover:border-[#9CAF88] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-sm text-[#8B8680] mb-1">Mes {index + 1}</div>
                    <div className="text-2xl text-[#2D2D2D]">{month}</div>
                  </div>
                  <ChevronRight className="size-6 text-[#8B8680] group-hover:text-[#9CAF88] group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Special Sections */}
        <div>
          <h2 className="text-3xl text-[#2D2D2D] font-light mb-8 flex items-center gap-3">
            <div className="h-px w-12 bg-[#9CAF88]"></div>
            Secciones Especiales
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate("backlog")}
              className="group bg-white p-8 rounded-2xl border-2 border-[#E8E7E3] hover:border-[#9CAF88] transition-all duration-300 hover:shadow-lg"
            >
              <BookOpen className="size-8 text-[#9CAF88] mb-4" />
              <div className="text-xl text-[#2D2D2D] mb-2">Backlog</div>
              <div className="text-sm text-[#8B8680]">Ideas y tareas pendientes</div>
            </button>

            <button
              onClick={() => onNavigate("projects")}
              className="group bg-white p-8 rounded-2xl border-2 border-[#E8E7E3] hover:border-[#9CAF88] transition-all duration-300 hover:shadow-lg"
            >
              <Target className="size-8 text-[#9CAF88] mb-4" />
              <div className="text-xl text-[#2D2D2D] mb-2">Proyectos</div>
              <div className="text-sm text-[#8B8680]">Objetivos y seguimiento</div>
            </button>

            <button
              onClick={() => onNavigate("reflection")}
              className="group bg-white p-8 rounded-2xl border-2 border-[#E8E7E3] hover:border-[#9CAF88] transition-all duration-300 hover:shadow-lg"
            >
              <Lightbulb className="size-8 text-[#9CAF88] mb-4" />
              <div className="text-xl text-[#2D2D2D] mb-2">Reflexión Anual</div>
              <div className="text-sm text-[#8B8680]">Aprendizajes del año</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
