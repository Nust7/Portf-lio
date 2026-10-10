const links = [
  { label: "GitHub", href: "https://github.com/Nust7" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/filipe-dourado-pereira",
  },
  { label: "E-mail", href: "mailto:fdourado599@gmail.com" },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-violet-500/20 bg-(--hero-background)">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-6 md:flex-row md:justify-between">
        {/* Assinatura */}
        <p className="text-sm text-[#6b6b9a]">
          Feito com <span aria-label="amor">💜</span> por{" "}
          <strong className="font-semibold text-violet-400">
            Filipe Dourado
          </strong>{" "}
          — {year}
        </p>

        {/* Voltar ao topo */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-lg text-violet-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-[0_0_12px_rgba(163,134,250,0.4)]"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;