import { ExternalLink, Rocket, Satellite } from "lucide-react"

const missions = [
  {
    name: "CyBEEsat",
    date: "5 September 2026",
    launcher: "Isar Aerospace Spectrum",
    payload: "ROSI-1 perovskite solar-cell payload",
    role: "Executed the complete device-to-payload workflow, including solar-cell fabrication, characterization, encapsulation, electrical contacting, and PCB integration.",
    status: "In orbit",
    href: "https://www.isaraerospace.com/newsroom-first-test-flight",
    icon: Rocket,
    accent: "border-cyan-400/25 bg-cyan-400/[0.06]",
    iconStyle: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    statusStyle: "bg-cyan-300/10 text-cyan-200",
  },
  {
    name: "OOV-Cube",
    date: "9 July 2024",
    launcher: "Ariane 6 inaugural flight",
    payload: "Perovskite/CIGS and perovskite/silicon tandem solar cells",
    role: "Performed pre-flight characterization, encapsulation, electrical contacting, PCB integration, and electrical testing. Initial in-orbit data confirmed power generation under non-ideal solar alignment.",
    status: "In orbit",
    href: "https://www.esa.int/Enabling_Support/Space_Transportation/Ariane/Ariane_6_flies_OOV-Cube_Internet_of_wild_Things",
    icon: Satellite,
    accent: "border-violet-400/25 bg-violet-400/[0.06]",
    iconStyle: "border-violet-400/30 bg-violet-400/10 text-violet-300",
    statusStyle: "bg-violet-300/10 text-violet-200",
  },
]

export default function FlightHeritage() {
  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0a0f1c] py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-transparent to-violet-950/25" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-cyan-400" /><p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Space missions</p></div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Flight Heritage</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-right sm:text-base">Photovoltaic payloads translated from laboratory devices into operational experiments in Earth orbit.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {missions.map((mission) => {
            const Icon = mission.icon
            return (
              <article key={mission.name} className={`relative overflow-hidden rounded-2xl border p-6 shadow-xl shadow-black/20 sm:p-7 ${mission.accent}`}>
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${mission.iconStyle}`}><Icon size={24} /></div>
                    <div><h3 className="text-2xl font-bold">{mission.name}</h3><p className="mt-1 text-sm text-slate-400">{mission.launcher} · {mission.date}</p></div>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${mission.statusStyle}`}>{mission.status}</span>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Payload</p>
                  <p className="mt-2 font-semibold leading-relaxed text-slate-200">{mission.payload}</p>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">My contribution</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{mission.role}</p>
                </div>

                <a href={mission.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">Mission details <ExternalLink size={15} /></a>
              </article>
            )
          })}
          <article className="relative overflow-hidden rounded-2xl border border-dashed border-slate-500/45 bg-white/[0.025] p-6 lg:col-span-2 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-500/30 bg-slate-400/[0.08] text-slate-300">
                  <Rocket size={23} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Next flight opportunity</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Upcoming Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">A further spaceflight payload is currently in preparation. Mission and payload details will be added when publicly available.</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-slate-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Coming soon</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
