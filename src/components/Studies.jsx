const researchAreas = [
  {
    number: "01",
    title: "Radiation Testing for Space Photovoltaics",
    description:
      "Evaluating radiation-induced performance changes across silicon, perovskite, perovskite–organic, all-perovskite, and perovskite–silicon devices.",
    image: "/images/studies/backgrounds/radiation-hardness.jpg",
    tags: ["Particle irradiation", "2J & 3J devices", "Degradation"],
    accent: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    number: "02",
    title: "LILT Performance",
    description:
      "Investigating photovoltaic operation, voltage losses, and charge transport under low-intensity, low-temperature conditions.",
    image: "/images/studies/backgrounds/lilt-performance.jpg",
    tags: ["Low intensity", "Low temperature", "Space operation"],
    accent: "from-blue-400 to-indigo-500",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    number: "03",
    title: "Space Encapsulation & Thermal-Cycling Stability",
    description:
      "Investigating encapsulation strategies and device reliability under repeated thermal cycling, vacuum, radiation, and combined space-relevant stressors.",
    image: "/images/studies/backgrounds/space-stability.jpg",
    tags: ["Thermal cycling", "Encapsulation", "Space stability"],
    accent: "from-violet-400 to-purple-500",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    number: "04",
    title: "Two- and Three-Junction Solar Cells",
    description:
      "Characterizing all-perovskite, perovskite–organic, and perovskite–silicon multijunction architectures with a focus on performance, losses, and stability.",
    image: "/images/studies/backgrounds/tandem-architecture.jpg",
    tags: ["Tandem cells", "Triple-junction cells", "Loss analysis"],
    accent: "from-amber-400 to-orange-500",
    glow: "group-hover:shadow-amber-500/10",
  },
  {
    number: "05",
    title: "Light-Induced Halide Segregation",
    description:
      "Studying illumination-driven compositional changes, their optical and electrical signatures, and their influence on mixed-halide device performance.",
    image: "/images/studies/backgrounds/triple-junction.jpg",
    tags: ["Mixed halides", "Phase stability", "Optical response"],
    accent: "from-fuchsia-400 to-pink-500",
    glow: "group-hover:shadow-fuchsia-500/10",
  },
  {
    number: "06",
    title: "Spatially Resolved Luminescence Imaging",
    description:
      "Using electroluminescence and photoluminescence mapping to identify local defects, non-uniformities, recombination losses, and degradation patterns.",
    image: "/images/studies/backgrounds/luminescence-mapping.png",
    tags: ["EL mapping", "PL imaging", "Defect localization"],
    accent: "from-rose-400 to-red-500",
    glow: "group-hover:shadow-rose-500/10",
  },
]

export default function Studies() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#070b14] py-24 text-white sm:py-28">
      {/* Quiet space-inspired background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Current Research</p>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Photovoltaics beyond
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              terrestrial limits
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            My research focuses on evaluating advanced photovoltaic technologies under space-relevant and extreme
            environmental conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {researchAreas.map((area, index) => (
            <article
              key={area.number}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl ${area.glow} ${
                "lg:col-span-2"
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-800">
                <img
                  src={area.image}
                  alt=""
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.2em] text-white/70">
                  {area.number}
                </span>
              </div>

              <div className="relative p-6 sm:p-7">
                <div className={`mb-5 h-0.5 w-12 bg-gradient-to-r ${area.accent}`} />
                <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">{area.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{area.description}</p>

                <div className="mt-6 flex flex-wrap gap-2" aria-label={`${area.title} topics`}>
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
