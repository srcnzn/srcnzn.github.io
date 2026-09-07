import { User } from "lucide-react"

const journey = [
  {
    period: "2017",
    title: "B.Sc. in Physics",
    organization: "Izmir Institute of Technology",
    detail: "Built a foundation in semiconductor and device physics, supported by experimental physics, optics, electronics, and materials science.",
  },
  {
    period: "2017–2020",
    title: "M.Sc. in Photonics Science & Engineering",
    organization: "Izmir Institute of Technology",
    detail: "Synthesized and modified perovskite materials while investigating their optical and electronic properties.",
  },
  {
    period: "2018–2023",
    title: "Research Assistant",
    organization: "Izmir Institute of Technology",
    detail: "Supported teaching laboratories and developed optical experimental setups alongside research activities.",
  },
  {
    period: "2023–Present",
    title: "Ph.D. & Doctoral Researcher",
    organization: "University of Potsdam",
    detail: "Developing and characterizing photovoltaic devices for extreme environments, from laboratory testing to spaceflight integration.",
  },
]

export default function About({ showHeading = true }) {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-stone-300 via-[#c7c1b8] to-zinc-400 py-16 text-stone-900 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-amber-200 blur-3xl" />
        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-rose-200 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="mb-9">
            <h2 className="text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">About Me</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-700 to-stone-600" />
          </div>
        )}

        <div className="grid items-center gap-8 sm:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          <div className="mx-auto w-full max-w-[180px] sm:mx-0">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-stone-500 via-zinc-500 to-stone-700 p-1 shadow-2xl shadow-stone-900/20">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-stone-600 to-zinc-800">
                <img
                  src="/profile-photo.png"
                  alt="Sercan Ozen"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none"
                    event.currentTarget.nextElementSibling.style.display = "flex"
                  }}
                />
                <div className="hidden h-full flex-col items-center justify-center text-white/80">
                  <User size={48} className="mb-3" />
                  <span className="text-sm">Profile photo</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-4xl space-y-4 text-left text-base leading-relaxed text-stone-800 sm:text-justify sm:text-lg [text-align-last:left]">
              <p>
                Hello! I am an experimental physicist working on photovoltaic devices for space and other extreme
                environments. My research examines how single- and multi-junction solar cells perform, degrade, and
                recover under conditions including low-intensity and low-temperature operation, thermal cycling, and
                proton irradiation.
              </p>
              <p>
                My work spans the full experimental chain, from device fabrication and advanced electrical and
                optoelectronic characterization to measurement automation, data analysis, encapsulation, and spaceflight
                integration. I have contributed directly to two orbital solar-cell payloads, translating laboratory-scale
                device research into systems capable of operating beyond terrestrial conditions.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-12 border-t border-stone-600/30 pt-9" aria-labelledby="academic-journey-title">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">Background</p>
              <h3 id="academic-journey-title" className="mt-2 text-2xl font-bold text-stone-950">Academic Journey</h3>
            </div>
          </div>

          <ol className="relative grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-[1.15rem] hidden h-px bg-gradient-to-r from-amber-700/50 via-stone-600/50 to-zinc-600/50 xl:block" />
            {journey.map((item, index) => (
              <li key={`${item.period}-${item.title}`} className="relative rounded-xl border border-white/35 bg-white/25 p-4 shadow-md shadow-stone-700/15 backdrop-blur-md">
                <div className="relative z-10 mb-3 flex items-center justify-between">
                  <span className="rounded-full border border-amber-800/20 bg-amber-100/35 px-3 py-1 text-xs font-semibold text-amber-900">{item.period}</span>
                  <span className="font-mono text-xs text-stone-600">0{index + 1}</span>
                </div>
                <h4 className="font-bold leading-snug text-stone-950">{item.title}</h4>
                <p className="mt-2 text-sm font-medium text-amber-900">{item.organization}</p>
                <p className="mt-3 text-xs leading-relaxed text-stone-700">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
