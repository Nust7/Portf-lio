const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "APIs RESTful",
  "SQL",
  "Git e GitHub",
];

function StackList() {
  return (
    <div className="bg-[var(--hero-background)] pt-12 text-center justify-center items-center gap-4 flex-wrap flex">
      <ul className="flex cursor-pointer mb-12 flex-wrap justify-center gap-4 mt-4 text-white">
        {stack.map((item) => (
          <li
            className="bg-[var(--hero-title-bg)] transition-all duration-300 ease-out
    hover:brightness-110 hover:border-[var(--stacks-hv-color)]
    hover:[text-shadow:0_0_6px_var(--stacks-hv-color)]
    hover:[box-shadow:0_0_10px_color-mix(in_srgb,var(--stacks-hv-color)_40%,transparent)]
    border border-[var(--stacks-hv-color)] text-[color:var(--stacks-hv-color)] px-4 py-2 rounded-4xl"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StackList;
