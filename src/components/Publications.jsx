import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const publications = [
  {
    order: 6,
    title: "Highly Sensitive X-ray Detectors with Polymer-Perovskite-Embedded Flexible Teflon Membranes",
    journal: "Materials Horizons",
    year: "2026",
    published: "2026-12-31",
    authors: "Sema Sarisozen, Anne-Catherine Lehnen, Fan Hu, Gonul Ofkeli, Alexander von Reppert, Matthias Rössle, Sercan Ozen, et al.",
    abstract: "A polymer-perovskite composite embedded in a flexible Teflon membrane closes the performance gap between rigid and flexible X-ray detectors. The devices combine outstanding sensitivity and an ultra-low detection limit with reproducibility, ambient stability, and mechanical durability.",
    doi: "10.1039/d5mh02084k",
    image: "/images/studies/Highly sensitive X-ray detectors with polymer-perovskite-embedded flexible teflon membranes.png",
  },
  {
    order: 2,
    title: "Beyond Earth: Resilience of Quasi-2D Perovskite Solar Cells in Space",
    journal: "Advanced Materials",
    year: "2026",
    published: "2026-02-12",
    authors: "Christoph Putz, Lukas E. Lehner, Stepan Demchyshyn, Bekele Hailegnaw, Phillip Jahelka, Magdalena Breitwieser, Sercan Özen, et al.",
    abstract: "Perovskite solar cells offer unique advantages for space-based energy harvesting, combining cost-effective manufacturing with flexible, high power-to-weight devices. This work presents a comprehensive analysis of their performance in low Earth orbit, supported by laboratory testing across extreme temperatures and proton-radiation exposure.",
    doi: "10.1002/adma.202520433",
    image: "/images/studies/Beyond Earth Resilience of Quasi-2D Perovskite Solar Cells in Space.jpg",
  },
  {
    order: 7,
    title: "Mitigating Mobile-Ion-Induced Instabilities and Performance Losses in 2D Passivated Perovskite Solar Cells",
    journal: "Advanced Materials",
    year: "2025",
    published: "2025-05-09",
    authors: "Biruk Alebachew Seid, Sercan Ozen, Andrés-Felipe Castro-Méndez, Dieter Neher, Martin Stolterfoht, Felix Lang",
    abstract: "This study reveals that current-density loss and accelerated degradation in PEAI-passivated devices originate from increased mobile-ion density. Ultrathin ABS and EDAI₂ interlayers stabilize the 2D perovskite and enable efficiencies of approximately 25% with enhanced stability.",
    doi: "10.1002/adma.202501588",
    image: "/images/studies/Mitigating Mobile-Ion-Induced Instabilities and Performance Losses in 2D Passivated Perovskite Solar Cells.jpg",
  },
  {
    order: 1,
    title: "Performance Constraints of All-Perovskite Tandem Solar Cells in Low-Intensity, Low-Temperature Environments",
    journal: "Advanced Materials",
    year: "2025",
    published: "2025-12-02",
    authors: "Sercan Ozen, Etienne Beier, Francisco Peña-Camargo, Jarla Thiesbrummel, Gianluca Boccarella, Paria Forozi Sowmeeh, et al.",
    abstract: "All-perovskite tandem solar cells are assessed under low-intensity and low-temperature conditions relevant to deep-space missions. The study identifies temperature-driven phase demixing in the high-bandgap absorber as the primary source of severe performance losses.",
    doi: "10.1002/adma.202517703",
    image: "/images/studies/Performance Constraints of All-Perovskite Tandem Solar Cells in Low-Intensity, Low-Temperature Environments.jpg",
  },
  {
    order: 4,
    title: "Understanding and Mitigating Atomic Oxygen-Induced Degradation of Perovskite Solar Cells for Near-Earth Space Applications",
    journal: "Small",
    year: "2024",
    published: "2024-02-27",
    authors: "Biruk Alebachew Seid, Sema Sarisozen, Francisco Peña-Camargo, Sercan Ozen, Emilio Gutierrez-Partida, Eduardo Solano, et al.",
    abstract: "This work resolves atomic-oxygen degradation mechanisms in perovskite solar cells and evaluates ultrathin silicon oxide encapsulation. Protected devices retained over 97% of their initial efficiency, demonstrating an effective barrier strategy for near-Earth applications.",
    doi: "10.1002/smll.202311097",
    image: "/images/studies/Understanding and Mitigating Atomic Oxygen-Induced Degradation of Perovskite Solar Cells for Near-Earth Space Applications.png",
  },
  {
    order: 5,
    title: "Working Principle of Integrated Perovskite-Organic Solar Cells",
    journal: "ACS Energy Letters",
    year: "2025",
    published: "2025-06-12",
    authors: "Kai Oliver Brinkmann, Pang Wang, Nikhil Kalasariya, Sven Opitz, Gianluca Boccarella, Sercan Ozen, Seren Dilara Öz, et al.",
    abstract: "The first comprehensive explanation of integrated perovskite-organic solar cells shows that their subcells operate in parallel rather than as a tandem. Experiments and drift-diffusion simulations establish why these devices behave as single-junction cells.",
    doi: "10.1021/acsenergylett.5c00823",
    image: "/images/studies/Working Principle of Integrated Perovskite-Organic Solar Cells.png",
  },
  {
    order: 3,
    title: "Moon Photovoltaics Utilizing Lunar Regolith and Halide Perovskites",
    journal: "Device",
    year: "2025",
    published: "2025-07-01",
    authors: "Julián Mauricio Cuervo-Ortiz, Juan Carlos Ginés Palomares, Sercan Ozen, Marlene Härtel, Sema Sarisozen, Alina Dittwald, et al.",
    abstract: "This work proposes using lunar regolith to fabricate moonglass substrates and encapsulation for perovskite solar cells. The approach could reduce material transport weight by 99% while enabling scalable and radiation-resilient energy generation on the Moon.",
    doi: "10.1016/j.device.2025.100747",
    image: "/images/studies/Moon photovoltaics utilizing lunar regolith and halide perovskites.png",
  },
  {
    order: 8,
    title: "Distributed Feedback Lasing in Thermally Imprinted Phase-Stabilized CsPbI₃ Thin Films",
    journal: "Advanced Functional Materials",
    year: "2024",
    published: "2024-05-30",
    authors: "Naho Kurahashi, Manuel Runkel, Cedric Kreusel, Maximilian Schiffer, Timo Maschwitz, Timo Kraus, Kai Oliver Brinkmann, et al.",
    abstract: "The first distributed-feedback lasers based on CsPbI₃ thin films are demonstrated using a resonator patterned directly into the perovskite by thermal nanoimprint. PVP enables phase-stable nanocrystal films, low lasing thresholds, and tunable deep-red emission.",
    doi: "10.1002/adfm.202405976",
    image: "/images/studies/Distributed Feedback Lasing in Thermally Imprinted Phase-Stabilized CsPbI3 Thin Films.png",
  },
  {
    order: 9,
    title: "Methylammonium-Free Co-Evaporated Perovskite Absorbers with High Radiation and UV Tolerance",
    journal: "RSC Advances",
    year: "2023",
    published: "2023-01-01",
    authors: "Felix Lang, Yu-Hsien Chiang, Kyle Frohna, Sercan Ozen, Heinz C. Neitzert, Andrea Denker, Martin Stolterfoht, Samuel D. Stranks",
    abstract: "Methylammonium-free co-evaporated perovskite solar cells show strong UV stability and high proton-radiation tolerance. Their vacuum-compatible fabrication makes them promising candidates for future in-space or lunar photovoltaic manufacturing.",
    doi: "10.1039/d3ra03846g",
    image: "/images/studies/Methylammonium-free co-evaporated perovskite absorbers with high radiation and UV tolerance an option for in-space manufacturing of space-PV.png",
  },
].sort((a, b) => a.order - b.order)

function getItemsPerView() {
  if (typeof window === "undefined") return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function Publications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [openAbstract, setOpenAbstract] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      const count = getItemsPerView()
      setItemsPerView(count)
      setActiveIndex((current) => Math.min(current, publications.length - count))
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const lastIndex = publications.length - itemsPerView
  const previous = () => setActiveIndex((current) => current === 0 ? lastIndex : current - 1)
  const next = () => setActiveIndex((current) => current === lastIndex ? 0 : current + 1)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/40 to-slate-100 py-20 text-gray-900 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-amber-200 blur-3xl" />
        <div className="absolute -right-28 bottom-12 h-96 w-96 rounded-full bg-blue-200 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Scientific output</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Publications</h2>
            <p className="max-w-lg text-base leading-relaxed text-gray-900 md:text-right lg:text-lg">
              Selected peer-reviewed work on photovoltaics, device stability, and energy technologies for extreme environments.
            </p>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500"><span className="text-gray-900">{activeIndex + 1}–{Math.min(activeIndex + itemsPerView, publications.length)}</span> of {publications.length} publications</p>
          <div className="flex gap-2">
            <button type="button" onClick={previous} aria-label="Previous publication" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-amber-400 hover:text-amber-700"><ChevronLeft size={21} /></button>
            <button type="button" onClick={next} aria-label="Next publication" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-amber-400 hover:text-amber-700"><ChevronRight size={21} /></button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }}>
            {publications.map((publication, index) => (
              <div key={publication.doi} className="shrink-0 px-2.5 first:pl-0 last:pr-0" style={{ width: `${100 / itemsPerView}%` }}>
                <article
                  className="group relative flex h-[34rem] cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  onClick={() => setOpenAbstract((current) => current === publication.doi ? null : publication.doi)}
                  onMouseLeave={() => setOpenAbstract(null)}
                >
                  <img src={publication.image} alt={`Graphical abstract for ${publication.title}`} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div
                    className={`absolute inset-x-0 bottom-0 z-10 flex h-[34%] flex-col overflow-hidden border-t border-white/15 bg-[linear-gradient(135deg,rgba(15,23,42,0.82)_0%,rgba(30,41,59,0.78)_42%,rgba(36,55,66,0.76)_70%,rgba(42,34,55,0.80)_100%)] p-6 text-white shadow-[0_-12px_38px_rgba(15,23,42,0.38)] backdrop-blur-xl transition-[height] duration-500 ease-out group-hover:h-full ${openAbstract === publication.doi ? "h-full" : ""}`}
                  >
                    <h3 className="text-lg font-bold leading-snug">{publication.title}</h3>
                    <p className={`absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 transition-opacity duration-200 group-hover:opacity-0 ${openAbstract === publication.doi ? "opacity-0" : "opacity-100"}`}>Hover or tap for abstract</p>

                    <div className={`min-h-0 overflow-hidden opacity-0 transition-opacity delay-0 duration-200 group-hover:opacity-100 group-hover:delay-200 ${openAbstract === publication.doi ? "opacity-100 delay-200" : ""}`}>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300">{publication.authors}</p>
                      <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/15 pt-5">
                        <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">{publication.journal}</span>
                        <span className="font-mono text-sm text-slate-400">{publication.year}</span>
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Abstract</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200">{publication.abstract}</p>
                    </div>

                    <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className={`mt-auto flex items-center justify-between gap-4 border-t border-white/15 pt-4 text-sm font-semibold text-amber-300 opacity-0 transition-opacity duration-200 hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 group-hover:opacity-100 ${openAbstract === publication.doi ? "opacity-100" : ""}`}>
                      <span>DOI: {publication.doi}</span><ExternalLink size={16} className="shrink-0" />
                    </a>
                  </div>
                  <span className="sr-only">Selected publication {index + 1}</span>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-center gap-2" aria-label="Publication carousel position">
          {Array.from({ length: lastIndex + 1 }, (_, index) => (
            <button key={index} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show publications starting at item ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-8 bg-amber-600" : "w-2 bg-gray-300 hover:bg-gray-400"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
