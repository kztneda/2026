import { Home, ChevronLeft } from "lucide-react";

interface SpecialSectionProps {
  type: "backlog" | "projects" | "reflection";
  onNavigate: (view: string) => void;
}

const titles = {
  backlog: "Backlog",
  projects: "Proyectos",
  reflection: "Reflexión Anual"
};

const descriptions = {
  backlog: "Ideas, tareas pendientes y cosas por explorar",
  projects: "Objetivos principales y seguimiento de proyectos",
  reflection: "Aprendizajes, logros y momentos importantes del año"
};

export function SpecialSection({ type, onNavigate }: SpecialSectionProps) {
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

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl text-[#2D2D2D] font-light mb-4">{titles[type]}</h1>
          <p className="text-xl text-[#8B8680]">{descriptions[type]}</p>
          <div className="h-px w-24 bg-[#9CAF88] mx-auto mt-6"></div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl p-12 border-2 border-[#E8E7E3] mb-10">
          <div className="bg-[#FAF9F6] rounded-xl p-12 min-h-[600px] border border-dashed border-[#C5C5C5]">
            <p className="text-[#8B8680] italic text-center">
              Espacio amplio para escritura manual y reflexión...
            </p>
          </div>
        </div>

        {/* Additional sections based on type */}
        {type === "projects" && (
          <>
            <div className="bg-white rounded-3xl p-12 border-2 border-[#E8E7E3] mb-10">
              <h2 className="text-2xl text-[#2D2D2D] font-light mb-8">Proyectos Activos</h2>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-[#FAF9F6] rounded-xl p-8 min-h-[120px] border border-dashed border-[#C5C5C5]">
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {type === "reflection" && (
          <>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-3xl p-10 border-2 border-[#E8E7E3]">
                <h3 className="text-xl text-[#2D2D2D] font-light mb-6">Logros</h3>
                <div className="bg-[#FAF9F6] rounded-xl p-6 min-h-[200px] border border-dashed border-[#C5C5C5]">
                </div>
              </div>
              <div className="bg-white rounded-3xl p-10 border-2 border-[#E8E7E3]">
                <h3 className="text-xl text-[#2D2D2D] font-light mb-6">Desafíos</h3>
                <div className="bg-[#FAF9F6] rounded-xl p-6 min-h-[200px] border border-dashed border-[#C5C5C5]">
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-12 border-2 border-[#E8E7E3]">
              <h3 className="text-xl text-[#2D2D2D] font-light mb-6">Lecciones Aprendidas</h3>
              <div className="bg-[#FAF9F6] rounded-xl p-8 min-h-[250px] border border-dashed border-[#C5C5C5]">
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
