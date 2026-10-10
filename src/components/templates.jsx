function Template() {
  return (
    <div className="bg-[var(--templates-background)] text-center items-center flex flex-col">
      <div>
        <h1 className="text-2xl mt-5 mb-6 text-[white] font-inter font-semibold">Meus <span className="text-[var(--hero-title-color)]">
            Projetos</span></h1>
        <p className="text-[var(--hero-subtitle-color)] text-base w-75 font-semi">
          Cada projeto foi construído com intenção — aprendizado real, código
          limpo, e atenção ao detalhe.
        </p>
      </div>
    </div>
  );
}

export default Template;
