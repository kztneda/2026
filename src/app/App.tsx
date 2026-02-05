import { useState } from "react";
import { Cover } from "./components/Cover";
import { Index } from "./components/Index";
import { MonthView } from "./components/MonthView";
import { WeekView } from "./components/WeekView";
import { SpecialSection } from "./components/SpecialSections";

type View = "cover" | "index" | "month" | "week" | "backlog" | "projects" | "reflection";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("cover");
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedWeek, setSelectedWeek] = useState(1);

  const handleNavigate = (view: string, param?: number) => {
    setCurrentView(view as View);
    if (view === "month" && param !== undefined) {
      setSelectedMonth(param);
    }
    if (view === "week" && param !== undefined) {
      setSelectedWeek(param);
    }
  };

  return (
    <div className="size-full overflow-auto">
      {currentView === "cover" && <Cover onNavigate={handleNavigate} />}
      {currentView === "index" && <Index onNavigate={handleNavigate} />}
      {currentView === "month" && <MonthView month={selectedMonth} onNavigate={handleNavigate} />}
      {currentView === "week" && <WeekView week={selectedWeek} onNavigate={handleNavigate} />}
      {currentView === "backlog" && <SpecialSection type="backlog" onNavigate={handleNavigate} />}
      {currentView === "projects" && <SpecialSection type="projects" onNavigate={handleNavigate} />}
      {currentView === "reflection" && <SpecialSection type="reflection" onNavigate={handleNavigate} />}
    </div>
  );
}
