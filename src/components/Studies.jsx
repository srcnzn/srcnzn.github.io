const researchAreas = [
  {
    number: "01",
    title: "Space-Environment Reliability",
    description:
      "Understanding how radiation, thermal cycling, vacuum, and atomic oxygen affect photovoltaic performance and long-term stability.",
    tags: ["Radiation", "Thermal cycling", "Encapsulation"],
    accent: "from-cyan-300 to-blue-500",
    numberColor: "text-cyan-300",
    tagStyle: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
    glow: "group-hover:shadow-cyan-950/40",
  },
  {
    number: "02",
    title: "Photovoltaics under Extreme Conditions",
    description:
      "Evaluating voltage losses, charge transport, and device operation under low-intensity and low-temperature conditions.",
    tags: ["Low intensity", "Low temperature", "Space operation"],
    accent: "from-blue-300 to-indigo-500",
    numberColor: "text-blue-300",
    tagStyle: "border-blue-300/30 bg-blue-300/10 text-blue-100",
    glow: "group-hover:shadow-blue-950/40",
  },
  {
    number: "03",
    title: "Multijunction Device Physics",
    description:
      "Investigating two- and three-junction architectures, current matching, performance losses, and light-induced halide segregation.",
    tags: ["Tandem cells", "Triple junctions", "Phase stability"],
    accent: "from-violet-300 to-fuchsia-500",
    numberColor: "text-violet-300",
    tagStyle: "border-violet-300/30 bg-violet-300/10 text-violet-100",
    glow: "group-hover:shadow-violet-950/40",
  },
  {
    number: "04",
    title: "Advanced Optoelectronic Diagnostics",
    description:
      "Combining intensity-dependent luminescence and electrical measurements to quantify QFLS and voltage losses, construct pseudo-J–V curves, and resolve spatial degradation pathways with EL/PL mapping.",
    tags: ["PLQY & QFLS", "pseudo-J–V & Suns–Voc", "EL/PL mapping"],
    accent: "from-amber-300 to-orange-500",
    numberColor: "text-amber-300",
    tagStyle: "border-amber-300/30 bg-amber-300/10 text-amber-100",
    glow: "group-hover:shadow-amber-950/40",
  },
]

export default function Studies() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#070b14] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-36 bottom-0 h-[26rem] w-[26rem] rounded-full bg-violet-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Current Research</p>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.35rem]">
            Photovoltaics beyond
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              terrestrial limits
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            My research connects device physics, advanced characterization, and environmental testing to understand how
            emerging photovoltaic technologies perform in space and other extreme environments.
          </p>

          <div className="mt-9 border-l border-cyan-400/40 pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Research objective</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Translating fundamental degradation mechanisms into more resilient, lightweight, and efficient solar-energy systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {researchAreas.map((area) => (
            <article
              key={area.number}
              className={`group relative flex min-h-[18rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/65 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900/85 hover:shadow-2xl ${area.glow} sm:p-7`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-sm font-semibold tracking-[0.2em] ${area.numberColor}`}>{area.number}</span>
                <span className={`h-px w-14 bg-gradient-to-r ${area.accent}`} />
              </div>

              <h3 className="mt-8 text-xl font-semibold leading-snug text-white sm:text-2xl">{area.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{area.description}</p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7" aria-label={`${area.title} topics`}>
                {area.tags.map((tag) => (
                  <span key={tag} className={`rounded-full border px-3 py-1 text-xs font-medium ${area.tagStyle}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
