import { Activity, Eye, Layers, Shield, Target } from "lucide-react"

const workflowSteps = [
  {
    number: "01",
    phase: "Initial assessment",
    title: "Performance Benchmarking",
    description: "Establishing a reliable baseline under terrestrial and space-relevant illumination conditions.",
    techniques: ["J–V: AM1.5G & AM0", "EQE", "Stabilized performance", "Current matching"],
    outcome: "Performance limits and sub-cell bottlenecks",
    icon: Target,
    color: "blue",
  },
  {
    number: "02",
    phase: "Loss analysis",
    title: "Luminescence & Recombination",
    description: "Quantifying non-radiative losses and identifying the recombination pathways that limit voltage.",
    techniques: ["Absolute PLQY", "Intensity-dependent PLQY", "ELQY", "EL/PL mapping"],
    outcome: "Voltage losses and spatial non-uniformities",
    icon: Eye,
    color: "purple",
  },
  {
    number: "03",
    phase: "Electrical validation",
    title: "Injection & Transport Behavior",
    description: "Connecting optical loss analysis with device response under controlled electrical injection.",
    techniques: ["EL spectroscopy", "Injection-dependent ELQY", "EL-derived Voc", "QFLS analysis"],
    outcome: "Diode, interface, and injection quality",
    icon: Activity,
    color: "green",
  },
  {
    number: "04",
    phase: "Durability assessment",
    title: "Environmental & Stability Testing",
    description: "Evaluating performance retention under operational stress and extreme environmental conditions.",
    techniques: ["MPP tracking", "LILT evaluation", "Proton irradiation", "Thermal cycling"],
    outcome: "Stability limits and degradation trends",
    icon: Shield,
    color: "orange",
  },
  {
    number: "05",
    phase: "Root-cause analysis",
    title: "Structural & Morphological Analysis",
    description: "Correlating electrical and optical changes with the physical evolution of materials and interfaces.",
    techniques: ["GIWAXS / GI-XRD", "SEM", "Pre/post-stress comparison", "Defect assessment"],
    outcome: "Mechanisms that guide device optimization",
    icon: Layers,
    color: "red",
  },
]

const technicalCapabilities = [
  {
    title: "Device Fabrication",
    items: ["Single-junction devices", "2J & 3J architectures", "Thin-film deposition", "Encapsulation"],
    style: "border-blue-400/25 bg-blue-400/[0.06]",
    dot: "bg-blue-400",
  },
  {
    title: "Electrical Characterization",
    items: ["J–V characterization", "MPP tracking", "EQE / IQE", "Sub-cell-resolved measurements"],
    style: "border-cyan-400/25 bg-cyan-400/[0.06]",
    dot: "bg-cyan-400",
  },
  {
    title: "Optical & Luminescence",
    items: ["Steady-state PL", "Absolute PLQY", "Electroluminescence", "EL/PL mapping"],
    style: "border-purple-400/25 bg-purple-400/[0.06]",
    dot: "bg-purple-400",
  },
  {
    title: "Space & Environmental Testing",
    items: ["Cryogenic / LILT", "Proton irradiation", "Thermal cycling", "Encapsulation stability"],
    style: "border-orange-400/25 bg-orange-400/[0.06]",
    dot: "bg-orange-400",
  },
  {
    title: "Structural & Morphological",
    items: ["XRD", "GI-XRD / GIWAXS", "SEM", "Pre/post-stress comparison"],
    style: "border-red-400/25 bg-red-400/[0.06]",
    dot: "bg-red-400",
  },
  {
    title: "Automation & Data",
    items: ["Instrument communication", "Automated acquisition", "Scientific programming", "Data visualization"],
    style: "border-emerald-400/25 bg-emerald-400/[0.06]",
    dot: "bg-emerald-400",
  },
]

const colorStyles = {
  blue: {
    line: "from-blue-400 to-cyan-400",
    icon: "border-blue-400/30 bg-blue-400/10 text-blue-400",
    badge: "border-blue-400/30 bg-blue-400/10 text-blue-300",
    dot: "bg-blue-400",
  },
  purple: {
    line: "from-purple-400 to-fuchsia-400",
    icon: "border-purple-400/30 bg-purple-400/10 text-purple-400",
    badge: "border-purple-400/30 bg-purple-400/10 text-purple-300",
    dot: "bg-purple-400",
  },
  green: {
    line: "from-emerald-400 to-green-400",
    icon: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    dot: "bg-emerald-400",
  },
  orange: {
    line: "from-orange-400 to-amber-400",
    icon: "border-orange-400/30 bg-orange-400/10 text-orange-400",
    badge: "border-orange-400/30 bg-orange-400/10 text-orange-300",
    dot: "bg-orange-400",
  },
  red: {
    line: "from-red-400 to-rose-400",
    icon: "border-red-400/30 bg-red-400/10 text-red-400",
    badge: "border-red-400/30 bg-red-400/10 text-red-300",
    dot: "bg-red-400",
  },
}

export default function Experimental() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500 blur-xl" />
        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-purple-500 blur-xl" />
        <div className="absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-indigo-500 blur-xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Expertise</p>
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Experimental, analytical, and computational capabilities developed through my research.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technicalCapabilities.map((capability) => (
            <article key={capability.title} className={`rounded-2xl border p-6 ${capability.style}`}>
              <h3 className="text-lg font-bold text-white">{capability.title}</h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 xl:grid-cols-2">
                {capability.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${capability.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-20 border-t border-slate-700/60 pt-16" aria-labelledby="experimental-workflow-title">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">Integrated process</p>
            <h2 id="experimental-workflow-title" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Experimental Workflow
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">
              How these methods work together to move from initial performance measurements to physical understanding.
            </p>
          </div>

        <div className="relative">
          <div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-red-400/30 xl:block" />

          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              const styles = colorStyles[step.color]

              return (
                <li
                  key={step.number}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800/80 to-gray-800/70 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-slate-500/60 hover:shadow-2xl ${
                    index === workflowSteps.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] xl:col-span-1 xl:mx-0 xl:w-auto" : ""
                  }`}
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${styles.line}`} />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border ${styles.icon}`}>
                        <Icon size={27} />
                      </div>
                      <span className="font-mono text-sm tracking-[0.18em] text-slate-500">{step.number}</span>
                    </div>

                    <span className={`mb-4 self-start rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${styles.badge}`}>
                      {step.phase}
                    </span>

                    <h3 className="text-xl font-bold leading-snug text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{step.description}</p>

                    <div className="mt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-300">Methods</p>
                      <ul className="space-y-2">
                        {step.techniques.map((technique) => (
                          <li key={technique} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${styles.dot}`} />
                            <span>{technique}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto border-t border-slate-600/30 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Outcome</p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.outcome}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        </section>
      </div>
    </div>
  )
}
