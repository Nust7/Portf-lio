function Stack() {
  return (
    <div className="flex flex-col justify-center bg-[var(--hero-background)] pt-12 text-center justify-center items-center gap-4">
      <h1 className="text-2xl font-bold text-[color:white] ">
        Minhas{" "}
        <span className="text-[var(--hero-title-color)] ">Tecnologias</span>
      </h1>
      <p className="text-lg --font-inter w-90 text-[color:var(--talk-to-me-color-text)]">
        O que eu uso, o que estou aprendendo e onde já apliquei.
      </p>
    </div>
  );
}

export default Stack;
