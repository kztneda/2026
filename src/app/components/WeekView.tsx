import { Home, ChevronLeft, ChevronRight } from "lucide-react";

interface WeekViewProps {
  week: number;
  onNavigate: (view: string, param?: number) => void;
}

export function WeekView({ week, onNavigate }: WeekViewProps) {
  const month = Math.floor((week - 1) / 4);
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const days = [
    { name: "Lunes", abbr: "L" },
    { name: "Martes", abbr: "M" },
    { name: "Miércoles", abbr: "X" },
    { name: "Jueves", abbr: "J" },
    { name: "Viernes", abbr: "V" },
    { name: "Sábado", abbr: "S" },
    { name: "Domingo", abbr: "D" }
  ];

  // Calcular fechas para cada día de la semana
  // Semana 1 comienza el 5 de enero de 2026 (lunes)
  const getWeekDates = (weekNumber: number) => {
    const startDate = new Date(2026, 0, 5); // 5 de enero de 2026
    const daysOffset = (weekNumber - 1) * 7;
    const weekDates = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + daysOffset + i);
      weekDates.push(date.getDate());
    }
    
    return weekDates;
  };

  const weekDates = getWeekDates(week);

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] px-16 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("month", month)}
              className="flex items-center gap-2 px-6 py-3 text-[#5A5A5A] hover:text-[#9CAF88] transition-colors"
            >
              <ChevronLeft className="size-5" />
              <span>{months[month]}</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            {week > 1 && (
              <button
                onClick={() => onNavigate("week", week - 1)}
                className="px-4 py-2 text-[#5A5A5A] hover:text-[#9CAF88] transition-colors"
              >
                <ChevronLeft className="size-5" />
              </button>
            )}
            <button
              onClick={() => onNavigate("index")}
              className="flex items-center gap-2 px-6 py-3 text-[#5A5A5A] hover:text-[#9CAF88] transition-colors"
            >
              <Home className="size-5" />
            </button>
            {week < 52 && (
              <button
                onClick={() => onNavigate("week", week + 1)}
                className="px-4 py-2 text-[#5A5A5A] hover:text-[#9CAF88] transition-colors"
              >
                <ChevronRight className="size-5" />
              </button>
            )}
          </div>
        </div>

        {/* Week Header */}
        <div className="mb-12 text-center">
          <div className="text-xl text-[#8B8680] mb-2">{months[month]} 2026</div>
          <h1 className="text-6xl text-[#2D2D2D] font-light mb-4">Semana {week}</h1>
          <div className="h-px w-24 bg-[#9CAF88] mx-auto"></div>
        </div>

        {/* Top 3 Prioridades */}
        <div className="mb-10 bg-white rounded-3xl p-12 border-2 border-[#9CAF88] shadow-lg">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-8">Top 3 Prioridades</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#9CAF88] text-white flex items-center justify-center text-xl">
                  {i}
                </div>
                <div className="flex-1">
                  <div className="bg-[#FAF9F6] rounded-xl p-6 min-h-[80px] border border-dashed border-[#9CAF88]">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Días de la Semana - Layout de 2 columnas */}
        <div className="mb-10">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-8 flex items-center gap-3">
            <div className="h-px w-12 bg-[#9CAF88]"></div>
            Esta Semana
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Lunes a Jueves - Columna izquierda */}
            <div className="space-y-6">
              {days.slice(0, 4).map((day, index) => (
                <div key={day.name} className="bg-white rounded-2xl p-8 border-2 border-[#E8E7E3]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FAF9F6] border-2 border-[#9CAF88] flex items-center justify-center">
                      <span className="text-sm text-[#8B8680]">{day.abbr}</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-[#2D2D2D] font-light">{day.name}</h3>
                      <span className="text-sm text-[#8B8680]">{weekDates[index]}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded border-2 border-[#C5C5C5] flex-shrink-0"></div>
                        <div className="flex-1 border-b border-[#E8E7E3]" style={{ minHeight: '24px' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Viernes a Domingo - Columna derecha */}
            <div className="space-y-6">
              {days.slice(4, 7).map((day, index) => (
                <div key={day.name} className="bg-white rounded-2xl p-8 border-2 border-[#E8E7E3]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FAF9F6] border-2 border-[#9CAF88] flex items-center justify-center">
                      <span className="text-sm text-[#8B8680]">{day.abbr}</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-[#2D2D2D] font-light">{day.name}</h3>
                      <span className="text-sm text-[#8B8680]">{weekDates[index + 4]}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded border-2 border-[#C5C5C5] flex-shrink-0"></div>
                        <div className="flex-1 border-b border-[#E8E7E3]" style={{ minHeight: '24px' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brain Dump */}
        <div className="mb-10 bg-white rounded-3xl p-12 border-2 border-[#E8E7E3]">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-8">Brain Dump</h2>
          <div className="bg-[#FAF9F6] rounded-xl p-8 min-h-[200px] border border-dashed border-[#C5C5C5]">
            <p className="text-[#8B8680] italic">Ideas, pensamientos, cosas por hacer...</p>
          </div>
        </div>

        {/* Notas y Reflexión */}
        <div className="mb-10 bg-white rounded-3xl p-12 border-2 border-[#E8E7E3]">
          <h2 className="text-2xl text-[#2D2D2D] font-light mb-8">Notas y Reflexión</h2>
          <div className="bg-[#FAF9F6] rounded-xl p-8 min-h-[250px] border border-dashed border-[#C5C5C5]">
            <p className="text-[#8B8680] italic">¿Cómo fue mi semana? ¿Qué aprendí?</p>
          </div>
        </div>
      </div>
    </div>
  );
}