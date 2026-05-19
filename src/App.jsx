import React, { useMemo, useState } from "react";
import { IT_TOOLS_DB } from "./data/tools.js";
import { flattenTools, normalize } from "./utils/tools.js";
import { AddToolForm, DetailModal, EmptyState, Header, SearchBar, Sidebar, ToolCard } from "./components/DashboardComponents.jsx";

export default function App() {
  const [customTools, setCustomTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedLevel, setSelectedLevel] = useState("Todas");
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState(null);

  const baseTools = useMemo(() => flattenTools(IT_TOOLS_DB), []);
  const allTools = useMemo(() => [...baseTools, ...customTools], [baseTools, customTools]);
  const categories = useMemo(() => IT_TOOLS_DB.map((item) => item.category), []);

  const counts = useMemo(() => {
    return allTools.reduce((acc, tool) => {
      acc[tool.category] = (acc[tool.category] || 0) + 1;
      return acc;
    }, {});
  }, [allTools]);

  const filteredTools = useMemo(() => {
    const normalizedQuery = normalize(query.trim());

    return allTools.filter((tool) => {
      const matchesCategory = selectedCategory === "Todas" || tool.category === selectedCategory;
      const matchesLevel = selectedLevel === "Todas" || tool.learning === selectedLevel;
      const resourceText = Object.values(tool.resources || {}).join(" ");
      const searchableText = normalize([
        tool.name,
        tool.category,
        tool.description,
        tool.tip,
        resourceText,
        ...tool.pros,
        ...tool.cons,
      ].join(" "));
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
      return matchesCategory && matchesLevel && matchesQuery;
    });
  }, [allTools, query, selectedCategory, selectedLevel]);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <style>{`
        .input {
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(2,6,23,.75);
          padding: .85rem 1rem;
          color: #e2e8f0;
          outline: none;
        }
        .input::placeholder { color: #64748b; }
        .input:focus {
          border-color: rgba(34,211,238,.55);
          box-shadow: 0 0 0 4px rgba(34,211,238,.16);
        }
        @media print {
          body { background: white !important; }
          article, section, aside, header { box-shadow: none !important; }
        }
      `}</style>

      <Header totalTools={allTools.length} totalCategories={categories.length} onPrint={() => window.print()} />

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <div className="space-y-6">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            counts={counts}
          />
          <AddToolForm categories={categories} onAddTool={(tool) => setCustomTools((current) => [...current, tool])} />
        </div>

        <div className="space-y-6">
          <SearchBar query={query} setQuery={setQuery} selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />

          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black text-white">Herramientas</h2>
              <p className="text-sm text-slate-400">Mostrando {filteredTools.length} de {allTools.length} registros.</p>
            </div>
          </div>

          {filteredTools.length === 0 ? (
            <EmptyState />
          ) : (
            <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredTools.map((tool) => (
                <ToolCard key={`${tool.category}-${tool.name}`} tool={tool} onOpen={setActiveTool} />
              ))}
            </section>
          )}
        </div>
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        Revisa licencias, requisitos, permisos y autorización antes de ejecutar herramientas en producción. Los enlaces apuntan preferentemente a fuentes oficiales, documentación, comunidades o recursos de aprendizaje reconocidos.
      </footer>

      <DetailModal tool={activeTool} onClose={() => setActiveTool(null)} />
    </div>
  );
}
