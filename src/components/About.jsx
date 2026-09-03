import { GraduationCap, User, Wrench, Zap } from "lucide-react"

const education = [
  {
    degree: "Ph.D. in Physics",
    institution: "University of Potsdam, Germany",
    period: "2023–Present",
    detail: "Soft Matter Physics and Optoelectronics Group · ROSI subgroup",
  },
  {
    degree: "M.Sc. in Photonics Science & Engineering",
    institution: "Izmir Institute of Technology, Turkey",
    period: "2020",
  },
  {
    degree: "B.Sc. in Physics",
    institution: "Izmir Institute of Technology, Turkey",
    period: "2017",
  },
]

const experience = [
  {
    role: "Doctoral Researcher",
    organization: "University of Potsdam",
    period: "2023–Present",
    detail:
      "Researching the performance, stability, and degradation of single- and multijunction photovoltaic devices under space-relevant conditions.",
  },
  {
    role: "Research Assistant",
    organization: "Izmir Institute of Technology",
    period: "2018–2023",
    detail: "Supported teaching and laboratory courses while building and configuring optical experimental setups.",
  },
  {
    role: "Graduate Researcher",
    organization: "CENT Research Group",
    period: "2017–2020",
    detail: "Investigated how doping influences the optical and electronic properties of perovskite materials.",
  },
  {
    role: "Engineering Intern",
    organization: "DVLX R&D",
    period: "2015–2016",
    detail: "Contributed to modular electric-bicycle conversion systems, battery assemblies, and controller programming.",
  },
]

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 py-20 text-gray-800 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-indigo-200 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">Research profile</p>
          <h2 className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            About Me
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
        </div>

        <section className="grid grid-cols-1 gap-8 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:grid-cols-12 lg:items-center lg:p-10">
          <div className="lg:col-span-4">
            <div className="mx-auto max-w-xs rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-lg">
              <div className="aspect-[4/5] overflow-hidden rounded-[0.85rem] bg-gradient-to-br from-blue-600 to-indigo-700">
                <img
                  src="/profile-photo.png"
                  alt="Sercan Ozen"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none"
                    event.currentTarget.nextElementSibling.style.display = "flex"
                  }}
                />
                <div className="hidden h-full flex-col items-center justify-center text-white">
                  <User size={44} className="mb-3" />
                  <span className="text-sm">Profile photo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">Sercan Ozen</h3>
            <p className="mt-2 text-lg font-medium text-blue-700">Doctoral Researcher in Physics</p>
            <p className="mt-1 text-gray-500">University of Potsdam · Potsdam, Germany</p>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-gray-700">
              <p>
                I investigate the performance, stability, and degradation mechanisms of advanced photovoltaic devices
                under extreme and space-relevant environments. My work spans single-junction and multijunction
                technologies, including all-perovskite, perovskite–organic, and perovskite–silicon architectures.
              </p>
              <p>
                By combining electrical, optical, environmental, and structural characterization, I study radiation
                tolerance, LILT operation, thermal cycling, encapsulation, recombination losses, and long-term device
                stability.
              </p>
              <p>
                I also develop custom scientific software and setup-integrated automation tools for measurement, data
                analysis, and visualization. This allows me to connect experimental design with reproducible data
                acquisition and interpretation.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Space photovoltaics", "Device physics", "Experimental automation", "Scientific software"].map((item) => (
                <span key={item} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm text-blue-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-gray-200 bg-white/80 p-7 shadow-xl backdrop-blur-sm sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3">
                <GraduationCap className="text-blue-600" size={25} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Academic background</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">Education</h3>
              </div>
            </div>

            <div className="relative space-y-7 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-blue-200">
              {education.map((item) => (
                <div key={item.degree} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-white bg-blue-500 shadow" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h4 className="font-bold text-gray-900">{item.degree}</h4>
                    <span className="flex-none text-sm font-medium text-blue-700">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{item.institution}</p>
                  {item.detail && <p className="mt-1 text-sm text-gray-500">{item.detail}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/80 p-7 shadow-xl backdrop-blur-sm sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="rounded-full bg-indigo-100 p-3">
                <Zap className="text-indigo-600" size={25} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">Professional path</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">Experience</h3>
              </div>
            </div>

            <div className="relative space-y-7 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-indigo-200">
              {experience.map((item) => (
                <div key={`${item.role}-${item.period}`} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-white bg-indigo-500 shadow" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h4 className="font-bold text-gray-900">{item.role}</h4>
                    <span className="flex-none text-sm font-medium text-indigo-700">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-gray-600">{item.organization}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center shadow-sm">
          <div className="flex items-center justify-center gap-3 text-blue-700">
            <Wrench size={20} />
            <p className="font-medium">
              Detailed characterization methods and technical capabilities are presented in the Expertise section.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
