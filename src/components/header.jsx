import { useState } from "react";

const links = ["Início", "Sobre", "Tecnologias", "Projetos", "Contato"];

const linkClass =
  "text-[var(--nav-text-color)] font-medium transition-all duration-300 hover:text-[#e4dbff] hover:[text-shadow:0_0_6px_#a386fa,0_0_14px_#a386fa,0_0_28px_#8665f7]";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[var(--header-background)] fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a
          href="#"
          aria-label="Ir para o início"
          className="bg-[image:var(--logo-background)] w-14 h-14 rounded-xs flex items-center justify-center text-white text-2xl font-bold"
        >
          FD
        </a>

        {/* Desktop: aparece a partir de md */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className={linkClass}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão mobile: some a partir de md */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          className="group md:hidden relative flex h-10 w-10 flex-col items-end justify-center gap-[6px] cursor-pointer"
        >
          <span
            className={`h-[2px] w-8 rounded-full bg-[#a386fa] shadow-[0_0_8px_#a386fa] transition-all duration-300 ${
              isOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] rounded-full bg-[#e4dbff] shadow-[0_0_8px_#a386fa] transition-all duration-300 ${
              isOpen ? "w-0 opacity-0" : "w-5 group-hover:w-8"
            }`}
          />
          <span
            className={`h-[2px] rounded-full bg-[#8665f7] shadow-[0_0_8px_#8665f7] transition-all duration-300 ${
              isOpen ? "w-8 -translate-y-[8px] -rotate-45" : "w-3 group-hover:w-8"
            }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        className={`md:hidden absolute top-full left-0 w-full bg-[var(--header-background)] transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <ul className="flex flex-col gap-4 px-5 py-4">
          {links.map((link) => (
            <li key={link}>
              <a href="#" onClick={() => setIsOpen(false)} className={linkClass}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;