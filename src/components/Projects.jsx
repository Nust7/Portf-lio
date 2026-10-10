import { BookOpen, CheckCircle2, RefreshCw, Square, CloudSun, Check } from "lucide-react";
import ProjectCard from "./ProjectCard";

/* ---------- Preview do DevStudy ---------- */
const estudos = [
  { texto: "HTML Semântico — concluído", status: "feito" },
  { texto: "Flexbox avançado — concluído", status: "feito" },
  { texto: "JavaScript Arrays — em progresso", status: "andamento" },
  { texto: "React Hooks — pendente", status: "pendente" },
];

const estilos = {
  feito: { Icone: CheckCircle2, cor: "text-emerald-400" },
  andamento: { Icone: RefreshCw, cor: "text-violet-300" },
  pendente: { Icone: Square, cor: "text-slate-500" },
};

function DevStudyPreview() {
  return (
    <>
      <h2 className="mb-3 flex items-center gap-2 font-jetbrains font-bold text-violet-300">
        <BookOpen className="size-5" aria-hidden="true" />
        DevStudy — Semana 12
      </h2>
      <ul className="space-y-1.5">
        {estudos.map(({ texto, status }) => {
          const { Icone, cor } = estilos[status];
          return (
            <li key={texto} className={`flex items-center gap-2 font-jetbrains text-sm ${cor}`}>
              <Icone className="size-4 shrink-0" aria-hidden="true" />
              {texto}
            </li>
          );
        })}
      </ul>
    </>
  );
}

/* ---------- Preview do WeatherNow ---------- */
function WeatherPreview() {
  return (
    <div className="flex flex-col items-center text-center">
      <CloudSun className="size-12 text-amber-300" aria-hidden="true" />
      <p className="text-3xl font-bold text-white">24°C</p>
      <p className="text-sm text-slate-400">São Paulo, SP</p>
      <p className="mt-3 text-sm text-cyan-300">
        Parcialmente nublado · Umidade 68%
      </p>
    </div>
  );
}

/* ---------- Preview do TaskFlow ---------- */
const tarefas = [
  { texto: "Estudar React", feita: true },
  { texto: "Deploy no Vercel", feita: true },
  { texto: "Revisar CSS Grid", feita: false },
  { texto: "Praticar Git", feita: false },
];

function TaskPreview() {
  return (
    <>
      <h2 className="mb-3 text-slate-300">Minhas tarefas</h2>
      <ul className="space-y-1.5">
        {tarefas.map(({ texto, feita }) => (
          <li key={texto} className="flex items-center gap-2 text-sm">
            <span
              aria-hidden="true"
              className={`flex size-4 shrink-0 items-center justify-center rounded border ${
                feita ? "border-emerald-500 bg-emerald-500" : "border-slate-600"
              }`}
            >
              {feita && <Check className="size-3 text-white" strokeWidth={3} />}
            </span>
            <span className={feita ? "text-slate-500 line-through" : "text-slate-300"}>
              {texto}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ---------- Lista de projetos ---------- */
const projetos = [
  {
    tema: "violet",
    preview: <DevStudyPreview />,
    titulo: "DevStudy",
    descricao:
      "Diário de estudos para desenvolvedores, com registro de progresso, metas semanais e anotações organizadas por tecnologia.",
    techs: ["HTML", "CSS", "JavaScript"],
    siteUrl: "#",
    githubUrl: "#",
  },
  {
    tema: "cyan",
    preview: <WeatherPreview />,
    titulo: "WeatherNow",
    descricao:
      "App de previsão do tempo com busca por cidade, exibição de temperatura, umidade e ícones dinâmicos via API pública.",
    techs: ["JavaScript", "API REST", "CSS"],
    siteUrl: "#",
    githubUrl: "#",
  },
  {
    tema: "emerald",
    preview: <TaskPreview />,
    titulo: "TaskFlow",
    descricao:
      "Gerenciador de tarefas em React com drag-and-drop, filtros por status e persistência de dados no localStorage.",
    techs: ["React", "CSS Modules", "LocalStorage"],
    siteUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <section
      id="projetos"
      className="bg-(--hero-background) px-6 py-16"
    >
      <div className="mx-auto grid max-w-6xl justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((p) => (
          <ProjectCard key={p.titulo} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;