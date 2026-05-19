import React, { useState } from "react";
import { BookOpen, ChevronRight, Download, ExternalLink, GraduationCap, MessageCircle, Plus, Printer, Search, Terminal, X } from "lucide-react";
import { categoryIcons, learningStyles } from "../constants/ui.js";


const resourceMeta = {
  official: { label: "Web oficial", icon: ExternalLink },
  download: { label: "Descarga", icon: Download },
  docs: { label: "Manual / Docs", icon: BookOpen },
  community: { label: "Foro / Comunidad", icon: MessageCircle },
  learn: { label: "Cursos / Recursos", icon: GraduationCap },
};

export function Header({ totalTools, totalCategories = 12, onPrint }) {
  return (
    <header className="relative overflow-hidden border-b border-cyan-400/10 bg-slate-950/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200">
              <Terminal size={14} /> IT Ops Knowledge Base
            </div>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              Dashboard de Referencia para Técnicos IT y Sysadmins
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Herramientas de soporte, diagnóstico, redes, seguridad, automatización, backup,
              virtualización y administración, con enlaces a descarga oficial, manuales, foros y recursos de aprendizaje.
            </p>
          </div>
          <button
            onClick={onPrint}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-400/20 print:hidden"
          >
            <Printer size={18} /> Exportar a PDF / Imprimir
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Categorías" value={totalCategories} />
          <Stat label="Herramientas" value={totalTools} />
          <Stat label="Recursos" value="5 tipos" />
          <Stat label="Vista" value="Dark" />
        </div>
      </div>
    </header>
  );
}

export function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">{label}</div>
    </div>
  );
}

export function Sidebar({ categories, selectedCategory, setSelectedCategory, counts }) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur print:hidden">
      <h2 className="mb-3 px-2 text-sm font-bold uppercase tracking-widest text-slate-300">Categorías</h2>
      <div className="space-y-2">
        <CategoryButton
          label="Todas"
          count={Object.values(counts).reduce((a, b) => a + b, 0)}
          active={selectedCategory === "Todas"}
          onClick={() => setSelectedCategory("Todas")}
        />
        {categories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            count={counts[category] || 0}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
    </aside>
  );
}

export function CategoryButton({ label, count, active, onClick }) {
  const Icon = categoryIcons[label] || ChevronRight;
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition ${
        active ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:bg-white/5"
      }`}
    >
      <span className="flex items-center gap-2 font-semibold">
        {label !== "Todas" && <Icon size={16} />} {label}
      </span>
      <span className="rounded-full bg-black/20 px-2 py-0.5 text-xs">{count}</span>
    </button>
  );
}

export function SearchBar({ query, setQuery, selectedLevel, setSelectedLevel }) {
  return (
    <section className="grid gap-3 rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur print:hidden md:grid-cols-[1fr_220px]">
      <label className="relative block">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={19} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por herramienta, categoría, recurso, pros, contras o dato útil..."
          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 pl-12 pr-4 text-sm text-slate-100 outline-none ring-cyan-400/40 transition placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-4"
        />
      </label>
      <select
        value={selectedLevel}
        onChange={(event) => setSelectedLevel(event.target.value)}
        className="h-12 rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-slate-100 outline-none ring-cyan-400/40 transition focus:border-cyan-400/50 focus:ring-4"
      >
        <option value="Todas">Todas las curvas</option>
        <option value="Baja">Curva baja</option>
        <option value="Media">Curva media</option>
        <option value="Alta">Curva alta</option>
      </select>
    </section>
  );
}

export function ResourceLinks({ tool, compact = false }) {
  const links = Object.entries(tool.resources || {})
    .filter(([, url]) => Boolean(url))
    .map(([type, url]) => ({ type, url, ...resourceMeta[type] }))
    .filter((link) => link.label);

  if (!links.length) return null;

  return (
    <div className={compact ? "mt-4 flex flex-wrap gap-2" : "grid gap-3 sm:grid-cols-2"}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={`${tool.name}-${link.type}`}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={
              compact
                ? "inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
                : "flex items-center justify-between gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
            }
          >
            <span className="flex items-center gap-2">
              <Icon size={compact ? 14 : 17} />
              {link.label}
            </span>
            {!compact && <ExternalLink size={15} />}
          </a>
        );
      })}
    </div>
  );
}

export function ToolCard({ tool, onOpen }) {
  const Icon = categoryIcons[tool.category] || ChevronRight;
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900 print:break-inside-avoid">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/20">
            <Icon size={14} /> {tool.category}
          </div>
          <h3 className="text-xl font-black text-white">{tool.name}</h3>
        </div>
        <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${learningStyles[tool.learning]}`}>
          {tool.learning}
        </span>
      </div>

      <p className="text-sm leading-6 text-slate-300">{tool.description}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <MiniList title="Pros" items={tool.pros.slice(0, 2)} positive />
        <MiniList title="Contras" items={tool.cons.slice(0, 2)} />
      </div>

      <div className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-3 text-sm text-cyan-100">
        <span className="font-bold">Dato útil:</span> {tool.tip}
      </div>

      <ResourceLinks tool={tool} compact />

      <button
        onClick={() => onOpen(tool)}
        className="mt-auto flex items-center justify-between pt-5 text-sm font-bold text-cyan-300 transition group-hover:text-cyan-200 print:hidden"
      >
        Ver detalle técnico <ChevronRight size={18} />
      </button>
    </article>
  );
}

export function MiniList({ title, items, positive = false }) {
  return (
    <div>
      <h4 className={`mb-2 text-xs font-black uppercase tracking-widest ${positive ? "text-emerald-300" : "text-rose-300"}`}>
        {title}
      </h4>
      <ul className="space-y-1.5 text-xs leading-5 text-slate-400">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={positive ? "text-emerald-300" : "text-rose-300"}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DetailModal({ tool, onClose }) {
  if (!tool) return null;
  const Icon = categoryIcons[tool.category] || ChevronRight;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm print:hidden" role="dialog" aria-modal="true">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl border border-cyan-400/20 bg-slate-950 shadow-2xl shadow-cyan-950/30">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-white/10 bg-slate-950/95 p-5 backdrop-blur">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/20">
              <Icon size={14} /> {tool.category}
            </div>
            <h2 className="text-2xl font-black text-white">{tool.name}</h2>
          </div>
          <button onClick={onClose} className="rounded-2xl border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="Cerrar modal">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <p className="text-base leading-7 text-slate-300">{tool.description}</p>

          <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${learningStyles[tool.learning]}`}>
            Curva de aprendizaje: {tool.learning}
          </span>

          <div className="grid gap-5 md:grid-cols-2">
            <DetailList title="Pros técnicos" items={tool.pros} positive />
            <DetailList title="Contras / Riesgos" items={tool.cons} />
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <h3 className="mb-2 text-sm font-black uppercase tracking-widest text-cyan-200">Dato útil operativo</h3>
            <p className="leading-7 text-cyan-50">{tool.tip}</p>
          </div>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-cyan-200">Enlaces y recursos</h3>
            <ResourceLinks tool={tool} />
          </section>
        </div>
      </div>
    </div>
  );
}

export function DetailList({ title, items, positive = false }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className={`mb-4 text-sm font-black uppercase tracking-widest ${positive ? "text-emerald-300" : "text-rose-300"}`}>
        {title}
      </h3>
      <ul className="space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${positive ? "bg-emerald-300" : "bg-rose-300"}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AddToolForm({ categories, onAddTool }) {
  const emptyForm = {
    name: "",
    category: categories[0] || "Diagnóstico",
    learning: "Media",
    description: "",
    pros: "",
    cons: "",
    tip: "",
    official: "",
    download: "",
    docs: "",
    community: "",
    learn: "",
  };

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.description.trim()) return;

    onAddTool({
      name: form.name.trim(),
      category: form.category,
      learning: form.learning,
      description: form.description.trim(),
      pros: form.pros.split(";").map((item) => item.trim()).filter(Boolean),
      cons: form.cons.split(";").map((item) => item.trim()).filter(Boolean),
      tip: form.tip.trim() || "Documenta versión, propietario, caso de uso, riesgos y procedimiento de rollback.",
      resources: {
        official: form.official.trim(),
        download: form.download.trim(),
        docs: form.docs.trim(),
        community: form.community.trim(),
        learn: form.learn.trim(),
      },
    });

    setForm(emptyForm);
    setOpen(false);
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 print:hidden">
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-left font-bold text-emerald-100 transition hover:bg-emerald-400/20"
      >
        <span className="flex items-center gap-2">
          <Plus size={18} /> Añadir nueva herramienta local
        </span>
        <ChevronRight className={`transition ${open ? "rotate-90" : ""}`} size={18} />
      </button>

      {open && (
        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
          <input value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Nombre de la herramienta" className="input" />

          <div className="grid gap-3 sm:grid-cols-2">
            <select value={form.category} onChange={(e) => updateField("category", e.target.value)} className="input">
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select value={form.learning} onChange={(e) => updateField("learning", e.target.value)} className="input">
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>

          <textarea value={form.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Descripción técnica" className="input min-h-24" />

          <div className="grid gap-3 sm:grid-cols-2">
            <input value={form.official} onChange={(e) => updateField("official", e.target.value)} placeholder="Web oficial" className="input" />
            <input value={form.download} onChange={(e) => updateField("download", e.target.value)} placeholder="URL de descarga" className="input" />
            <input value={form.docs} onChange={(e) => updateField("docs", e.target.value)} placeholder="Manual / documentación" className="input" />
            <input value={form.community} onChange={(e) => updateField("community", e.target.value)} placeholder="Foro / comunidad" className="input" />
            <input value={form.learn} onChange={(e) => updateField("learn", e.target.value)} placeholder="Cursos / recursos de aprendizaje" className="input sm:col-span-2" />
          </div>

          <input value={form.pros} onChange={(e) => updateField("pros", e.target.value)} placeholder="Pros separados por punto y coma. Ej: Portable; Rápida; Scriptable" className="input" />
          <input value={form.cons} onChange={(e) => updateField("cons", e.target.value)} placeholder="Contras separados por punto y coma. Ej: Curva alta; Requiere permisos" className="input" />
          <textarea value={form.tip} onChange={(e) => updateField("tip", e.target.value)} placeholder="Dato útil operativo" className="input min-h-20" />

          <button type="submit" className="rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-300">
            Guardar en estado local
          </button>
          <p className="text-xs leading-5 text-slate-500">
            Nota: esta demo guarda la herramienta solo en memoria React. Para persistencia real, conecta localStorage, IndexedDB o una API.
          </p>
        </form>
      )}
    </section>
  );
}

export function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-slate-900/50 p-10 text-center">
      <h3 className="text-xl font-black text-white">Sin resultados</h3>
      <p className="mt-2 text-slate-400">Prueba con otra categoría, curva de aprendizaje o término de búsqueda.</p>
    </div>
  );
}
