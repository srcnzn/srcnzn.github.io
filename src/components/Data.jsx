"use client"

import { useEffect, useState } from "react"
import { Activity, ChevronLeft, ChevronRight, Shield, Star, Target, X, Zap } from "lucide-react"

const softwareProjects = [
  {
    id: "jv-analysis",
    title: "J–V Analysis",
    type: "Data Analysis",
    icon: <Activity size={32} className="text-blue-400" />,
    accent: "blue",
    summary:
      "A custom application for processing current–voltage measurements and extracting photovoltaic performance parameters.",
    capabilities: [
      "Voc, Jsc, fill factor, and PCE extraction",
      "Forward and reverse scan comparison",
      "Batch processing of measurement files",
      "Consistent plots and data export",
    ],
    workflow: "Import J–V data → configure analysis → compare devices → export parameters and figures",
    preview: "J–V application interface",
    images: [
      "/images/program_pictures/JV6.png",
      "/images/program_pictures/JV1.png",
      "/images/program_pictures/JV2.png",
      "/images/program_pictures/JV3.png",
      "/images/program_pictures/JV4.png",
      "/images/program_pictures/JV5.png",
      "/images/program_pictures/JV7.png",
      "/images/program_pictures/JV8.png",
    ],
  },
  {
    id: "stability-analysis",
    title: "Stability Analysis",
    type: "Data Analysis",
    icon: <Shield size={32} className="text-emerald-400" />,
    accent: "emerald",
    summary:
      "A workflow for tracking photovoltaic parameters over time and comparing device degradation under different test conditions.",
    capabilities: [
      "Time-dependent parameter tracking",
      "Normalized performance comparison",
      "Multiple-device and condition comparison",
      "Degradation trends and stability plots",
    ],
    workflow: "Load sequential measurements → select devices and conditions → normalize data → visualize stability",
    preview: "Stability analysis interface",
    images: ["/images/program_pictures/RF1.png"],
  },
  {
    id: "eqe-analysis",
    title: "EQE Analysis",
    type: "Spectral Analysis",
    icon: <Star size={32} className="text-violet-400" />,
    accent: "violet",
    summary:
      "A dedicated application for processing external quantum efficiency measurements and comparing spectral response.",
    capabilities: [
      "EQE spectrum processing and visualization",
      "Integrated current-density calculation",
      "Device and sub-cell comparison",
      "Analysis-ready data and figure export",
    ],
    workflow: "Import spectral data → apply analysis settings → compare responses → export results",
    preview: "EQE analysis interface",
    images: [
      "/images/program_pictures/EQE1.png",
      "/images/program_pictures/EQE2.png",
      "/images/program_pictures/EQE3.png",
    ],
  },
  {
    id: "detector-measurements",
    title: "Detector On/Off Measurements",
    type: "Measurement Workflow",
    icon: <Target size={32} className="text-amber-400" />,
    accent: "amber",
    summary:
      "A purpose-built application for acquiring, organizing, and evaluating paired detector measurements recorded in on/off states.",
    capabilities: [
      "Structured on/off acquisition sequences",
      "Paired signal and background handling",
      "Live measurement monitoring",
      "Organized recording and data export",
    ],
    workflow: "Define acquisition sequence → record on/off states → review signals → save structured data",
    preview: "Detector measurement interface",
    images: ["/images/program_pictures/Det2.png", "/images/program_pictures/Det1.png"],
  },
  {
    id: "plqy-automation",
    title: "Intensity-Dependent PLQY Automation",
    type: "Measurement Automation & Instrument Control",
    icon: <Zap size={34} className="text-cyan-300" />,
    accent: "cyan",
    featured: true,
    summary:
      "An integrated measurement application that coordinates the optical setup, performs intensity-dependent PLQY measurements, and records the resulting data.",
    capabilities: [
      "Automated shutter control",
      "Rotating filter-wheel operation",
      "Communication with the Andor detector",
      "Intensity-dependent acquisition sequences",
      "Measurement recording and structured data storage",
    ],
    workflow:
      "Configure intensity sequence → coordinate shutters and filter wheel → acquire Andor data → record and save measurements",
    preview: "PLQY automation and instrument-control interface",
    images: [
      "/images/program_pictures/PL3.PNG",
      "/images/program_pictures/PL1.PNG",
      "/images/program_pictures/PL2.PNG",
    ],
    imageFit: "cover",
  },
]

const accentStyles = {
  blue: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  violet: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  amber: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  cyan: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
}

export default function Data() {
  const [selectedTool, setSelectedTool] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (!selectedTool) return undefined

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedTool(null)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedTool])

  const analysisTools = softwareProjects.filter((tool) => !tool.featured)
  const automationTool = softwareProjects.find((tool) => tool.featured)

  const openTool = (tool) => {
    setActiveImage(0)
    setSelectedTool(tool)
  }

  const showPreviousImage = () => {
    setActiveImage((current) => (current === 0 ? selectedTool.images.length - 1 : current - 1))
  }

  const showNextImage = () => {
    setActiveImage((current) => (current === selectedTool.images.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative w-full overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Scientific Software</p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">Data Analysis</h1>
          <p className="max-w-lg text-base leading-relaxed text-gray-300 md:text-right lg:text-lg">
            I design and develop custom applications to analyze photovoltaic data, visualize experimental results, and
            automate specialized measurement workflows in the laboratory.
          </p>
        </div>
      </div>

      <section aria-label="Analysis applications">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {analysisTools.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => openTool(tool)}
              className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-800 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/70 hover:shadow-xl hover:shadow-blue-950/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{tool.icon}</div>
                  <div>
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${accentStyles[tool.accent]}`}>
                      {tool.type}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-blue-300">
                      {tool.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 leading-relaxed text-gray-300">{tool.summary}</p>

                <div className="mt-6 border-t border-gray-700 pt-5">
                  <p className="text-sm font-medium text-blue-400">View workflow and interface preview →</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {automationTool && (
        <section className="mt-16" aria-labelledby="automation-title">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Setup-integrated software</p>
            <h2 id="automation-title" className="mt-2 text-3xl font-bold text-white">
              Measurement Automation
            </h2>
          </div>

          <button
            type="button"
            onClick={() => openTool(automationTool)}
            className="group relative w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/60 via-gray-800 to-blue-950/60 p-7 text-left shadow-2xl shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4">
                  {automationTool.icon}
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${accentStyles.cyan}`}>
                    {automationTool.type}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">{automationTool.title}</h3>
                <p className="mt-4 max-w-3xl leading-relaxed text-gray-300">{automationTool.summary}</p>
                <p className="mt-6 text-sm font-medium text-cyan-300">Explore the automated measurement workflow →</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-5 lg:col-span-2">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Connected workflow</p>
                <div className="flex flex-wrap gap-2">
                  {["Shutters", "Filter wheel", "Andor", "Acquisition", "Data recording"].map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        </section>
      )}

      {selectedTool && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedTool(null)
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="software-dialog-title"
            className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl border border-gray-700 bg-gray-900 shadow-2xl"
          >
            <div className="relative p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setSelectedTool(null)}
                className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close application details"
              >
                <X size={24} />
              </button>

              <div className="flex items-start gap-4 pr-12">
                {selectedTool.icon}
                <div>
                  <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${accentStyles[selectedTool.accent]}`}>
                    {selectedTool.type}
                  </span>
                  <h2 id="software-dialog-title" className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {selectedTool.title}
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-gray-950">
                    <img
                      src={selectedTool.images[activeImage]}
                      alt={`${selectedTool.title} interface view ${activeImage + 1}`}
                      className={`h-full w-full ${selectedTool.imageFit === "cover" ? "object-cover object-center" : "object-contain"}`}
                    />

                    {selectedTool.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={showPreviousImage}
                          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-gray-950/80 text-white backdrop-blur-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          aria-label="Previous interface image"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          type="button"
                          onClick={showNextImage}
                          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-gray-950/80 text-white backdrop-blur-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          aria-label="Next interface image"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}

                    <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-gray-950/80 px-3 py-1 text-xs text-gray-200 backdrop-blur-sm">
                      {activeImage + 1} / {selectedTool.images.length}
                    </span>
                  </div>

                  {selectedTool.images.length > 1 && (
                    <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
                      {selectedTool.images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setActiveImage(index)}
                          className={`h-16 w-28 flex-none overflow-hidden rounded-md border-2 bg-gray-950 transition ${
                            activeImage === index ? "border-blue-400" : "border-gray-700 opacity-60 hover:opacity-100"
                          }`}
                          aria-label={`Show interface image ${index + 1}`}
                        >
                          <img src={image} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 rounded-lg border border-gray-700 bg-gray-800/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Typical workflow</p>
                    <p className="mt-3 leading-relaxed text-gray-200">{selectedTool.workflow}</p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <p className="leading-relaxed text-gray-300">{selectedTool.summary}</p>
                  <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Current capabilities
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {selectedTool.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3 text-gray-200">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-lg border border-dashed border-gray-600 p-4 text-sm text-gray-400">
                    Development details, technologies, and availability can be added once the interface documentation is
                    ready.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
