"use client"

import { useEffect, useState } from "react"
import { Activity, ArrowLeft, ArrowRight, Eye, Globe2, Rocket, Shield, Target, X } from "lucide-react"

const workflowSteps = [
  { number: "01", phase: "Initial assessment", title: "Performance Benchmarking", description: "Establishing a reliable device baseline under terrestrial and space-relevant illumination.", techniques: ["Dark & light J–V", "AM1.5G & AM0", "EQE", "Stabilized performance"], icon: Target, color: "blue" },
  { number: "02", phase: "Optical excitation", title: "Recombination Analysis", description: "Probing radiative and non-radiative recombination under controlled optical excitation.", techniques: ["Steady-state PL", "Absolute PLQY", "Intensity-dependent PLQY"], icon: Eye, color: "purple" },
  { number: "03", phase: "Electrical injection", title: "Injection-Dependent Loss Analysis", description: "Quantifying device losses and recombination behavior under controlled electrical injection.", techniques: ["EL spectroscopy", "Injection-dependent EQEEL"], icon: Activity, color: "green" },
  {
    number: "04",
    phase: "Space environments",
    title: "Space-Environment Integration & Characterization",
    description: "Preparing photovoltaic devices for space-relevant testing and resolving their response under mission-relevant operating and stress conditions.",
    groups: [
      { title: "Device Integration", items: ["Device contacting", "PCB interconnection", "Device & PCB encapsulation"] },
      { title: "LILT & Operational Characterization", items: ["Variable-temperature J–V", "Variable-intensity J–V", "PL & intensity-dependent PLQY", "Low-temperature performance"] },
      { title: "Radiation & Reliability", items: ["In-situ / in-operando proton irradiation", "Thermal cycling", "Pre/post-stress PL & EL mapping", "Uniformity & degradation analysis"] },
    ],
    icon: Shield,
    color: "orange",
  },
]

const colorStyles = {
  blue: { line: "from-blue-400 to-cyan-400", icon: "border-blue-400/30 bg-blue-400/10 text-blue-400", badge: "border-blue-400/30 bg-blue-400/10 text-blue-300", dot: "bg-blue-400" },
  purple: { line: "from-purple-400 to-fuchsia-400", icon: "border-purple-400/30 bg-purple-400/10 text-purple-400", badge: "border-purple-400/30 bg-purple-400/10 text-purple-300", dot: "bg-purple-400" },
  green: { line: "from-emerald-400 to-green-400", icon: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400", badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300", dot: "bg-emerald-400" },
  orange: { line: "from-orange-400 to-amber-400", icon: "border-orange-400/30 bg-orange-400/10 text-orange-400", badge: "border-orange-400/30 bg-orange-400/10 text-orange-300", dot: "bg-orange-400" },
  red: { line: "from-red-400 to-rose-400", icon: "border-red-400/30 bg-red-400/10 text-red-400", badge: "border-red-400/30 bg-red-400/10 text-red-300", dot: "bg-red-400" },
}

function WorkflowCard({ step }) {
  const Icon = step.icon
  const styles = colorStyles[step.color]
  const isSpaceEnvironment = step.number === "04"
  return (
    <li className={`group relative overflow-hidden rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800/80 to-gray-800/70 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-500/60 hover:shadow-2xl ${isSpaceEnvironment ? "lg:col-span-3" : ""}`}>
      <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${styles.line}`} />
      <div className={`h-full p-6 sm:p-7 ${isSpaceEnvironment ? "lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-center lg:gap-12" : "flex flex-col"}`}>
        <div>
          <div className="flex items-start gap-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${styles.icon}`}><Icon size={24} /></div>
            <div>
              <h3 className="text-xl font-bold leading-snug text-white">{step.title}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">{step.description}</p>
        </div>
        <div className={`mt-5 border-t border-slate-600/30 pt-4 ${isSpaceEnvironment ? "lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" : ""}`}>
          {isSpaceEnvironment ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {step.groups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">{group.title}</p>
                  <ul className="space-y-2">{group.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-gray-300"><span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${styles.dot}`} /><span>{item}</span></li>)}</ul>
                </div>
              ))}
            </div>
          ) : (
            <><p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-300">Methods</p><ul className="grid grid-cols-2 gap-x-4 gap-y-2">{step.techniques.map((technique) => <li key={technique} className={`flex items-start gap-2 text-sm text-gray-300 ${technique === "Intensity-dependent PLQY" || technique === "Injection-dependent EQEEL" ? "col-span-2 whitespace-nowrap" : ""}`}><span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${styles.dot}`} /><span>{technique === "Injection-dependent EQEEL" ? <>Injection-dependent EQE<sub>EL</sub></> : technique}</span></li>)}</ul></>
          )}
        </div>
      </div>
    </li>
  )
}

function SpaceRoadmap() {
  const branches = [
    {
      title: "LILT Measurements",
      color: "border-sky-200 bg-sky-50/80",
      label: "text-sky-700",
      items: ["Coupled temperature- and intensity-dependent J–V", "Coupled temperature- and intensity-dependent PL / PLQY", "Simultaneous temperature and illumination control", "Low-temperature performance & loss analysis"],
    },
    {
      title: "Proton Irradiation",
      color: "border-violet-200 bg-violet-50/80",
      label: "text-violet-700",
      items: ["In-situ / in-operando measurements", "Fluence-dependent device response", "Post-irradiation repetition of the complete pre-irradiation measurement sequence", "Direct pre/post-irradiation comparison"],
    },
    {
      title: "Thermal Cycling",
      color: "border-orange-200 bg-orange-50/80",
      label: "text-orange-700",
      items: ["Repeated temperature cycling", "Performance retention", "Contact & encapsulation stability", "Pre/post-cycle comparison"],
    },
  ]

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-blue-700">Established reference</p>
          <h3 className="mt-2 text-xl font-bold text-slate-950">Terrestrial Baseline Characterization</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">The complete Earth-based workflow provides the reference state before space-relevant preparation and testing.</p>
          <p className="mt-4 border-t border-blue-100 pt-4 text-sm leading-relaxed text-slate-800">Device fabrication · J–V · EQE · PLQY · EL/EQE<sub>EL</sub> · Loss analysis</p>
        </div>
        <div className="hidden items-center text-2xl text-indigo-500 lg:flex">→</div>
        <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-white to-indigo-50 p-6 shadow-sm">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-indigo-700">Space-ready preparation</p>
          <h3 className="mt-2 text-xl font-bold text-slate-950">Contact Preparation & Encapsulation</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-700"><span>Contact preparation</span><span>Device encapsulation</span><span>24 h post-encapsulation J–V verification</span></div>
        </div>
      </div>

      <div className="mx-auto h-12 w-px bg-gradient-to-b from-indigo-400 to-slate-300" />
      <div className="relative">
        <div className="absolute left-[16.66%] right-[16.66%] top-0 hidden h-px bg-slate-300 lg:block" />
        <div className="grid gap-5 pt-5 lg:grid-cols-3">
          {branches.map((branch) => (
            <article key={branch.title} className={`relative rounded-2xl border p-6 shadow-sm ${branch.color}`}>
              <span className="absolute -top-5 left-1/2 hidden h-5 w-px -translate-x-1/2 bg-slate-300 lg:block" />
              <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${branch.label}`}>Environmental pathway</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{branch.title}</h3>
              <ul className="mt-5 space-y-2.5">{branch.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" /><span>{item}</span></li>)}</ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto h-12 w-px bg-gradient-to-b from-slate-300 to-amber-400" />
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6 shadow-sm"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-amber-700">Common endpoint</p><h3 className="mt-2 text-xl font-bold text-slate-950">Post-Stress Recharacterization</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">Repeat the baseline electrical, spectral, and luminescence measurements under consistent conditions.</p></div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-6 shadow-sm"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-rose-700">Comparative analysis</p><h3 className="mt-2 text-xl font-bold text-slate-950">Spatial Degradation & Loss Analysis</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">Map PL/EL changes and compare pre/post-stress performance to resolve degradation pathways.</p></div>
      </div>
    </div>
  )
}

export default function Experimental() {
  const [roadmapOpen, setRoadmapOpen] = useState(false)
  const [selectedPathway, setSelectedPathway] = useState(null)
  const [isLaunching, setIsLaunching] = useState(false)

  const selectSpacePathway = () => {
    setIsLaunching(true)
    window.setTimeout(() => {
      setSelectedPathway("space")
      setIsLaunching(false)
    }, 650)
  }

  useEffect(() => {
    if (!roadmapOpen) {
      setSelectedPathway(null)
      setIsLaunching(false)
      return undefined
    }
    const handleKeyDown = (event) => event.key === "Escape" && setRoadmapOpen(false)
    const scrollY = window.scrollY
    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = "0"
    document.body.style.right = "0"
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.overflow = ""
      window.scrollTo(0, scrollY)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [roadmapOpen])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-10"><div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500 blur-xl" /><div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-purple-500 blur-xl" /><div className="absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-indigo-500 blur-xl" /></div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3"><span className="h-px w-10 bg-blue-400" /><p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Expertise</p></div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <h2 className="shrink-0 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">Technical Expertise</h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-300 lg:text-right sm:text-lg">How I connect device performance, loss analysis, environmental testing, and structural diagnostics to build a complete physical picture.</p>
          </div>
        </div>

        <div className="relative">
          <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step) => <WorkflowCard key={step.number} step={step} />)}
            <li className="lg:col-span-3">
              <button type="button" onClick={() => setRoadmapOpen(true)} className="group flex h-full w-full flex-col items-start justify-between gap-5 rounded-2xl border border-purple-400/25 bg-gradient-to-r from-purple-500/[0.12] via-slate-800/70 to-blue-500/[0.1] p-6 text-left transition duration-300 hover:-translate-y-0.5 hover:border-purple-300/45 focus:outline-none focus:ring-2 focus:ring-purple-400 sm:flex-row sm:items-center sm:p-7">
                <span><span className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">From measurement to insight</span><span className="mt-3 block text-xl font-bold text-white sm:text-2xl">Measurement & Analysis Roadmap</span><span className="mt-3 block text-sm leading-relaxed text-gray-400">Follow the sequence and see which physical parameters are derived at each stage.</span></span>
                <span className="flex items-center gap-2 rounded-full border border-purple-300/25 bg-purple-300/10 px-5 py-3 text-sm font-semibold text-purple-200 transition group-hover:bg-purple-300/15">View roadmap <ArrowRight size={17} /></span>
              </button>
            </li>
          </ol>
        </div>

        {roadmapOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overscroll-none bg-black/80 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && setRoadmapOpen(false)}>
            <div role="dialog" aria-modal="true" aria-labelledby="measurement-roadmap-title" className="max-h-[92vh] w-full max-w-7xl overflow-y-auto overscroll-contain rounded-2xl border border-white/80 bg-[#eef1f4] text-slate-900 shadow-2xl">
              <div className="flex items-start justify-between gap-6 border-b border-slate-300 bg-white/65 p-6 sm:p-8"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">From measurement to insight</p><h2 id="measurement-roadmap-title" className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Measurement & Analysis Roadmap</h2><p className="mt-3 max-w-3xl leading-relaxed text-slate-600">A closer look at how each measurement feeds the next stage of the analysis.</p></div><button type="button" onClick={() => setRoadmapOpen(false)} aria-label="Close measurement roadmap" className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"><X size={24} /></button></div>
              <div className="p-5 sm:p-8">
                {!selectedPathway ? (
                  <div className="mx-auto flex min-h-[520px] max-w-5xl flex-col justify-center">
                    <div className="text-center">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Choose a characterization pathway</p>
                      <h3 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Where should the device go next?</h3>
                      <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-600">Explore the core measurement sequence or follow its extension into space-relevant integration and environmental testing.</p>
                    </div>

                    <div className="relative mt-10 grid gap-6 md:grid-cols-2">
                      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-16 -translate-x-1/2 bg-slate-300 md:block" />
                      <button type="button" onClick={() => setSelectedPathway("earth")} className="group relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-white via-sky-50 to-blue-100 p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 sm:p-10">
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-300/20 blur-2xl" />
                        <Globe2 size={70} strokeWidth={1.25} className="relative text-sky-700 transition duration-500 group-hover:rotate-6 group-hover:scale-105" />
                        <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Earth pathway</p>
                        <h4 className="relative mt-2 text-2xl font-bold text-slate-950">Core Characterization</h4>
                        <p className="relative mt-3 leading-relaxed text-slate-600">From device fabrication to electrical, spectral, and luminescence-based loss analysis.</p>
                        <span className="relative mt-7 flex items-center gap-2 text-sm font-semibold text-sky-800">Explore pathway <ArrowRight size={17} /></span>
                      </button>

                      <button type="button" onClick={selectSpacePathway} disabled={isLaunching} className="group relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-white via-indigo-50 to-violet-100 p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-wait sm:p-10">
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-300/20 blur-2xl" />
                        <Rocket size={70} strokeWidth={1.25} className={`relative text-indigo-700 transition-all duration-700 ease-in ${isLaunching ? "translate-x-24 -translate-y-28 scale-75 opacity-0" : "group-hover:-translate-y-2 group-hover:translate-x-2"}`} />
                        <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Space pathway</p>
                        <h4 className="relative mt-2 text-2xl font-bold text-slate-950">Space-Environment Evaluation</h4>
                        <p className="relative mt-3 leading-relaxed text-slate-600">Extend the core workflow into integration, LILT operation, irradiation, and reliability analysis.</p>
                        <span className="relative mt-7 flex items-center gap-2 text-sm font-semibold text-indigo-800">{isLaunching ? "Launching…" : "Launch pathway"} <ArrowRight size={17} /></span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <button type="button" onClick={() => setSelectedPathway(null)} className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950"><ArrowLeft size={17} /> Back to pathways</button>
                    {selectedPathway === "space" ? <SpaceRoadmap /> : <div className="mx-auto max-w-6xl">
                  <div className="relative grid items-stretch gap-5 lg:grid-cols-4">
                    <div className="relative rounded-xl border border-blue-200 bg-white/80 p-5 shadow-sm lg:after:absolute lg:after:left-full lg:after:top-1/2 lg:after:w-5 lg:after:-translate-y-1/2 lg:after:text-center lg:after:text-2xl lg:after:leading-none lg:after:text-blue-600 lg:after:content-['→']">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-blue-700">Starting point</p>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">Device Fabrication</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">Thin-film processing and preparation of the complete device stack.</p>
                    </div>
                    <div className="relative rounded-xl border border-sky-200 bg-white/80 p-5 shadow-sm lg:after:absolute lg:after:left-full lg:after:top-1/2 lg:after:w-5 lg:after:-translate-y-1/2 lg:after:text-center lg:after:text-2xl lg:after:leading-none lg:after:text-sky-600 lg:after:content-['→']">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky-700">Device preparation</p>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">Contacting & Integration</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">Contacted, interconnected, and encapsulated for measurement.</p>
                    </div>
                    <div className="relative rounded-xl border border-cyan-200 bg-white/80 p-5 shadow-sm lg:after:absolute lg:after:left-full lg:after:top-1/2 lg:after:w-5 lg:after:-translate-y-1/2 lg:after:text-center lg:after:text-2xl lg:after:leading-none lg:after:text-cyan-600 lg:after:content-['→']">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-700">Electrical baseline</p>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">Dark & Light J–V</h3>
                      <p className="mt-3 text-sm text-slate-600">Voc · Jsc · FF · PCE · diode response</p>
                    </div>
                    <div className="rounded-xl border border-indigo-200 bg-white/80 p-5 shadow-sm">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-indigo-700">Spectral response</p>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">EQE Analysis</h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate-700">Integrated Jsc · Eg · Urbach energy · J<sub>0,rad</sub></p>
                    </div>
                  </div>

                  <div className="mx-auto h-10 w-px bg-gradient-to-b from-indigo-400 to-slate-300" />
                  <div className="relative mb-3 text-center"><span className="border-b border-slate-400 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-600">Two complementary excitation pathways</span></div>

                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="relative rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/80 to-white p-5 shadow-sm sm:p-6">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-600">Optical pathway</p>
                      <h3 className="mt-2 text-xl font-bold text-slate-950">Recombination Analysis</h3>
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-xl border border-violet-100 bg-white/90 p-4"><h3 className="font-bold text-slate-950">Absolute PLQY</h3><p className="mt-2 text-sm text-slate-600">Calibrated luminescence yield</p></div>
                        <div className="rounded-xl border border-violet-100 bg-white/90 p-4"><h3 className="font-bold text-slate-950">Intensity-dependent PLQY</h3><p className="mt-2 text-xs font-semibold uppercase tracking-wider text-violet-700">Perovskite devices</p></div>
                        <div className="rounded-xl border border-violet-100 bg-white/90 p-4"><h3 className="font-bold text-slate-950">Suns–Voc</h3><p className="mt-2 text-xs font-semibold uppercase tracking-wider text-violet-700">Organic devices</p></div>
                      </div>
                      <div className="mt-4 border-t border-violet-200 pt-4"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Derived physical parameters</p><p className="mt-2 text-sm leading-relaxed text-slate-800">QFLS · ΔVnr · Pseudo-J–V · Recombination behavior</p></div>
                    </div>

                    <div className="relative rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/80 to-white p-5 shadow-sm sm:p-6">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-teal-600">Electrical pathway</p>
                      <h3 className="mt-2 text-xl font-bold text-slate-950">Injection-Dependent Loss Analysis</h3>
                      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                        <div className="rounded-xl border border-teal-100 bg-white/90 p-4"><h3 className="font-bold text-slate-950">EL Spectroscopy</h3><p className="mt-2 text-sm text-slate-600">Emission under electrical bias</p></div>
                        <span className="hidden text-xl text-teal-600/70 sm:block">→</span>
                        <div className="rounded-xl border border-teal-100 bg-white/90 p-4"><h3 className="font-bold text-slate-950">Injection-dependent EQE<sub>EL</sub></h3><p className="mt-2 text-sm text-slate-600">Luminescence efficiency versus current</p></div>
                      </div>
                      <div className="mt-4 border-t border-teal-200 pt-4"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Derived physical parameters</p><p className="mt-2 text-sm leading-relaxed text-slate-800">ΔVnr · Injection-dependent losses · Ideality analysis · Recombination regimes</p></div>
                    </div>
                  </div>

                  <div className="mx-auto h-10 w-px bg-gradient-to-b from-slate-300 to-amber-400" />
                  <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-5 text-center shadow-sm sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Combined physical picture</p>
                    <h3 className="mt-2 text-xl font-bold text-slate-950">Performance & Loss Analysis</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Electrical, spectral, and luminescence results are combined to identify limiting mechanisms.</p>
                  </div>

                    </div>}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
