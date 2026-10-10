import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    label: "E-mail",
    href: "mailto:fdourado599@gmail.com",
    Icone: Mail,
    estilo: "border-violet-500/30 bg-violet-500/10 hover:border-violet-400",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/filipe-dourado-pereira",
    Icone: FaLinkedin,
    estilo: "border-sky-500/30 bg-sky-500/10 hover:border-sky-400",
  },
  {
    label: "GitHub",
    href: "https://github.com/Nust7",
    Icone: FaGithub,
    estilo: "border-slate-700 bg-slate-800/40 hover:border-slate-500",
  },
];

function Contact() {
  return (
    <section
      id="contato"
      className="flex flex-col items-center bg-(--hero-background) px-6 py-20 text-center"
    >
      <span className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold tracking-widest text-violet-300">
        CONTATO
      </span>

      <h2 className="mb-4 max-w-md text-4xl font-extrabold text-white">
        Vamos <span className="text-violet-400">trabalhar juntos?</span>
      </h2>

      <p className="mb-10 max-w-md text-slate-400">
        Estou disponível para estágios e oportunidades júnior. Me envie uma
        mensagem — responderei rápido!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map(({ label, href, Icone, estilo }) => {
          const externo = href.startsWith("http");

          return (
            <a
              key={label}
              href={href}
              target={externo ? "_blank" : undefined}
              rel={externo ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 ${estilo}`}
            >
              <Icone className="size-5" aria-hidden="true" />
              {label}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;