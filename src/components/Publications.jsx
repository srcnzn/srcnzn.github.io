import { ExternalLink, FileText } from "lucide-react"

const publications = [
  {
    title: "Moon photovoltaics utilizing lunar regolith and halide perovskites",
    journal: "Device",
    year: "2024",
    authors: "J. M. Cuervo-Ortiz, J. C. G. Palomares, S. Ozen, M. Härtel, S. Sarisozen, et al.",
    label: "DEVICE",
    gradient: "from-slate-900 via-blue-900 to-cyan-700",
  },
  {
    title: "Mitigating Mobile-Ion-Induced Instabilities and Performance Losses in 2D Passivated Perovskite Solar Cells",
    journal: "Advanced Materials",
    year: "2025",
    authors: "B. A. Seid, S. Ozen, A. F. Castro-Méndez, D. Neher, M. Stolterfoht, F. Lang",
    label: "ADVANCED MATERIALS",
    gradient: "from-amber-700 via-orange-600 to-rose-700",
  },
  {
    title: "Gd³⁺-Doped α-CsPbI₃ Nanocrystals with Better Phase Stability and Optical Properties",
    journal: "The Journal of Physical Chemistry C",
    year: "2019",
    authors: "C. M. Guvenc, Y. Yalcinkaya, S. Ozen, H. Sahin, M. M. Demir",
    label: "JPC C",
    gradient: "from-indigo-900 via-violet-800 to-fuchsia-700",
  },
]

export default function Publications() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/40 to-slate-100 py-20 text-gray-900 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-amber-200 blur-3xl" />
        <div className="absolute -right-28 bottom-12 h-96 w-96 rounded-full bg-blue-200 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Scientific output</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Publications</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              Selected peer-reviewed work spanning space photovoltaics, perovskite device stability, and semiconductor
              nanomaterials.
            </p>
          </div>

          <a
            href="https://scholar.google.com/citations?hl=tr&user=tHx4vz0AAAAJ&view_op=list_works"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 px-5 py-4 text-gray-600 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <FileText size={20} className="text-amber-600" />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Google Scholar</p>
              <p className="text-xs">View my complete publication list</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 transition group-hover:text-amber-600" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {publications.map((publication, index) => (
            <article
              key={publication.title}
              className="group flex overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl lg:flex-col"
            >
              <div className={`relative hidden aspect-[16/10] overflow-hidden bg-gradient-to-br sm:block ${publication.gradient}`}>
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <span className="text-xs font-semibold tracking-[0.25em] text-white/70">TOC IMAGE</span>
                  <span className="mt-3 text-lg font-bold tracking-wide">{publication.label}</span>
                  <span className="mt-2 text-xs text-white/60">Visual will be added</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                    {publication.journal}
                  </span>
                  <span className="font-mono text-sm text-gray-400">{publication.year}</span>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-gray-900">{publication.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">{publication.authors}</p>

                <div className="mt-auto border-t border-gray-100 pt-5">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-gray-400">Abstract and DOI will be added</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                      <ExternalLink size={15} />
                    </span>
                  </div>
                </div>
              </div>

              <span className="sr-only">Selected publication {index + 1}</span>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-amber-300 bg-white/60 px-6 py-5 text-center text-sm text-gray-600">
          TOC images, full abstracts, DOI links, and individual contribution notes can be added when the publication
          material is ready.
        </div>
      </div>
    </div>
  )
}
