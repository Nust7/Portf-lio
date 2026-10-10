import { useEffect, useState } from "react";

// Cada cor do "editor" em um lugar só
const colors = {
  kw: "text-[#8b5cf6]",
  id: "text-[#c4b5fd]",
  key: "text-[#38bdf8]",
  str: "text-[#a3e635]",
  p: "text-gray-400",
  cm: "text-[#6b6b9a]",
  plain: "",
};

// O código do card como lista de pedaços: [texto, cor]
const tokens = [
  ["const", "kw"], [" ", "plain"], ["dev", "id"], [" ", "plain"], ["=", "p"], [" ", "plain"], ["{", "kw"], ["\n", "plain"],
  ["  ", "plain"], ["nome", "key"], [":", "p"], [" ", "plain"], ['"Filipe Dourado"', "str"], [",", "p"], ["\n", "plain"],
  ["  ", "plain"], ["cargo", "key"], [":", "p"], [" ", "plain"], ['"Front-end Dev"', "str"], [",", "p"], ["\n", "plain"],
  ["  ", "plain"], ["stack", "key"], [":", "p"], [" ", "plain"], ["[", "kw"], ['"React"', "str"], [",", "p"], [" ", "plain"], ['"JS"', "str"], ["]", "kw"], [",", "p"], ["\n", "plain"],
  ["  ", "plain"], ["buscando", "key"], [":", "p"], [" ", "plain"], ['"estágio"', "str"], [",", "p"], ["\n", "plain"],
  ["  ", "plain"], ["disponível", "key"], [":", "p"], [" ", "plain"], ["true", "kw"], ["\n", "plain"],
  ["}", "kw"], ["\n\n", "plain"],
  ["//", "kw"], [" ", "plain"], ["pronto para o desafio", "cm"],
];

const totalChars = tokens.reduce((sum, [text]) => sum + text.length, 0);

// Conta de 0 até o total, um caractere por vez
function useTyping(total, speed = 35, startDelay = 600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Quem prefere menos movimento já vê o código completo
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      return;
    }

    let interval;
    const start = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= total) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [total, speed, startDelay]);

  return count;
}

function CodeCard() {
  const count = useTyping(totalChars);
  const done = count >= totalChars;

  // Mostra só os primeiros `count` caracteres, mantendo as cores
  let remaining = count;

  return (
    <div className="relative w-full max-w-md animate-float motion-reduce:animate-none">
      {/* Brilho roxo atrás do card */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl bg-[#8665f7]/20 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-xl border border-[#a386fa]/20 bg-[#0f0f1a] shadow-[0_0_40px_rgba(134,101,247,0.15)]">
        {/* Barra de título estilo janela */}
        <div className="flex items-center gap-2 border-b border-[#a386fa]/10 bg-[#13131f] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-sm text-[#6b6b9a]">
            portfolio.tsx
          </span>
        </div>

        {/* min-h reserva o espaço do código completo, o card não "pula" ao digitar */}
        <pre className="min-h-[18.75rem] overflow-x-auto p-6 font-mono text-sm leading-7 sm:text-base">
          <code>
            {tokens.map(([text, color], i) => {
              if (remaining <= 0) return null;
              const shown = text.slice(0, remaining);
              remaining -= text.length;
              return (
                <span key={i} className={colors[color]}>
                  {shown}
                </span>
              );
            })}
            {/* Cursor: fixo enquanto digita, pisca quando termina */}
            <span
              className={`ml-1 inline-block h-5 w-2.5 translate-y-1 bg-[#a386fa] ${
                done ? "animate-pulse" : ""
              }`}
            />
          </code>
        </pre>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-[var(--hero-background)] pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Mesmo container do Header, para o logo e o texto ficarem alinhados */}
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-8">
        {/* Coluna do texto */}
        <div>
          <span className="inline-block rounded-4xl border border-[var(--hero-border-color)] bg-[var(--hero-title-bg)] p-2 font-inter text-xs font-semibold uppercase tracking-widest text-[color:var(--hero-title-color)]">
            Desenvolvedor Full-Stack
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Olá, eu sou{" "}
            <span className="text-[var(--hero-title-color)]">
              Filipe Dourado
            </span>
          </h1>

          <p className="mt-4 max-w-md font-poppins text-sm text-[var(--hero-subtitle-color)] lg:text-base">
            Crio interfaces modernas e acessíveis com HTML, CSS e React —
            focado em performance, clareza visual e experiências que
            encantam.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="cursor-pointer rounded-sm border-none bg-[image:var(--button-bg-gradient)] px-7 py-3 font-bold text-white hover:opacity-90">
              Ver Projetos →
            </button>

            <button
              className="cursor-pointer rounded-sm border px-7 py-3 font-bold text-[var(--talk-to-me-color-text)]
              transition-all duration-300 ease-out
              hover:brightness-110 hover:border-[var(--talk-to-me-color-text)]
              hover:[text-shadow:0_0_6px_var(--talk-to-me-color-text)]
              hover:[box-shadow:0_0_10px_color-mix(in_srgb,var(--talk-to-me-color-text)_40%,transparent)]"
            >
              Falar Comigo
            </button>
          </div>
        </div>

        {/* Coluna do card */}
        <div className="flex justify-center lg:justify-end">
          <CodeCard />
        </div>
      </div>
    </section>
  );
}

export default Hero;