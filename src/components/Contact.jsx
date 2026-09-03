import { Building, ExternalLink, Mail, MapPin } from "lucide-react"

const profileLinks = [
  {
    name: "LinkedIn",
    detail: "Professional profile",
    href: "https://www.linkedin.com/in/srcnzn",
    mark: "in",
    color: "bg-blue-500/15 text-blue-300 border-blue-400/20",
  },
  {
    name: "ORCID",
    detail: "0000-0001-9955-4158",
    href: "https://orcid.org/0000-0001-9955-4158",
    mark: "iD",
    color: "bg-lime-500/15 text-lime-300 border-lime-400/20",
  },
  {
    name: "Google Scholar",
    detail: "Publications and citations",
    href: "https://scholar.google.com/citations?hl=tr&user=tHx4vz0AAAAJ&view_op=list_works",
    mark: "GS",
    color: "bg-sky-500/15 text-sky-300 border-sky-400/20",
  },
]

export default function Contact() {
  return (
    <div className="relative w-full overflow-hidden bg-[#070b14] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">Get in touch</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact & Academic Profiles</h2>
          <div className="mx-auto my-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
          <p className="text-lg leading-relaxed text-slate-300">
            For research collaborations, scientific discussions, or professional opportunities, feel free to get in
            touch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950/80 via-slate-900 to-indigo-950/70 p-7 shadow-2xl shadow-blue-950/20 sm:p-8 lg:col-span-5">
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                <Mail className="text-blue-300" size={27} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Primary contact</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Let&apos;s start a conversation</h3>
              <p className="mt-3 max-w-md leading-relaxed text-slate-300">
                Email is the best way to contact me about research, collaborations, presentations, or scientific
                software.
              </p>

              <a
                href="mailto:oezen1@uni-potsdam.de"
                className="mt-8 inline-flex self-start items-center gap-3 rounded-lg bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <Mail size={18} />
                oezen1@uni-potsdam.de
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/70 bg-slate-800/60 p-7 shadow-xl backdrop-blur-sm sm:p-8 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">Find me online</p>
            <h3 className="mt-3 text-xl font-bold text-white">Academic & Professional</h3>

            <div className="mt-7 space-y-3">
              {profileLinks.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4 transition hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg border text-sm font-bold ${profile.color}`}>
                    {profile.mark}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-white">{profile.name}</span>
                    <span className="block truncate text-xs text-slate-400">{profile.detail}</span>
                  </span>
                  <ExternalLink className="text-slate-500 transition group-hover:text-slate-300" size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/70 bg-slate-800/60 p-7 shadow-xl backdrop-blur-sm sm:p-8 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Affiliation</p>
            <h3 className="mt-3 text-xl font-bold text-white">University of Potsdam</h3>

            <div className="mt-7 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  <Building size={20} />
                </span>
                <div>
                  <p className="font-medium text-white">Institute of Physics and Astronomy</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    Soft Matter Physics and Optoelectronics Group
                    <br />
                    ROSI subgroup
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-700/70 pt-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-purple-400/10 text-purple-300">
                    <MapPin size={20} />
                  </span>
                  <address className="text-sm not-italic leading-relaxed text-slate-300">
                    Karl-Liebknecht-Straße 24/25
                    <br />
                    House 28, Room 2.032
                    <br />
                    14476 Potsdam-Golm, Germany
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
