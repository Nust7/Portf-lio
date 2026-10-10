// Classes completas (o Tailwind não detecta nomes montados dinamicamente)
const temas = {
  violet: {
    glow: "from-violet-500 to-indigo-500",
    border: "group-hover:border-violet-400/60",
    preview: "bg-violet-500/5",
  },
  cyan: {
    glow: "from-cyan-400 to-blue-500",
    border: "group-hover:border-cyan-400/60",
    preview: "bg-cyan-500/10",
  },
  emerald: {
    glow: "from-emerald-400 to-teal-500",
    border: "group-hover:border-emerald-400/60",
    preview: "bg-emerald-500/10",
  },
};

function ProjectCard({
  tema = "violet",
  preview,
  titulo,
  descricao,
  techs,
  siteUrl = "#",
  githubUrl = "#",
}) {
  const t = temas[tema];

  return (
    <div className="group relative w-full max-w-sm">
      {/* Brilho atrás do card */}
      <div
        aria-hidden="true"
        className={`absolute -inset-1 rounded-3xl bg-linear-to-r ${t.glow} opacity-0 blur-xl transition duration-500 group-hover:opacity-40`}
      />

      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet-500/20 bg-[#0f0f1a] transition duration-500 ${t.border}`}
      >
        {/* Parte de cima (muda em cada projeto) */}
        <div className={`border-b border-violet-500/20 p-6 ${t.preview}`}>
          {preview}
        </div>

        {/* Parte de baixo (igual em todos) */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-lg font-bold text-white">{titulo}</h3>
          <p className="mb-4 text-slate-400">{descricao}</p>

          <ul className="mb-6 flex flex-wrap gap-2">
            {techs.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* mt-auto empurra os botões para o fim, alinhando os 3 cards */}
          <div className="mt-auto flex gap-3">
            <a
              href={siteUrl}
              className="flex-1 rounded-lg bg-violet-500 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-violet-400"
            >
              Ver site
            </a>
            <a
              href={githubUrl}
              className="flex-1 rounded-lg border border-slate-700 px-4 py-2.5 text-center font-semibold text-slate-400 transition hover:border-violet-400/60 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;