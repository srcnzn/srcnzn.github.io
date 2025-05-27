"use client"

import { User, GraduationCap, Code, Zap, ExternalLink, Wrench, FileText, Monitor } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-gray-800 py-20 relative overflow-hidden">
      {/* Background decorative elements - lighter and more subtle */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
            Who am I...
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Profile and Bio Section */}
        <div className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden">
              {/* Profile Card - Mobile */}
              <div className="text-center mb-8">
                <div className="w-32 h-40 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-1">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/profile-photo.png"
                      alt="Sercan Ozen"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none"
                        e.target.nextSibling.style.display = "flex"
                      }}
                    />
                    <div
                      className="w-full h-full flex flex-col items-center justify-center text-white"
                      style={{ display: "none" }}
                    >
                      <User size={24} className="mb-2" />
                      <span className="text-xs">Profile Photo</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Sercan Ozen
                </h3>
                <p className="text-gray-600 mb-3">Doctoral Researcher</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center">
                    <GraduationCap size={14} className="mr-2 text-blue-500" />
                    University of Potsdam
                  </div>
                  <div className="flex items-center justify-center">
                    <Wrench size={14} className="mr-2 text-indigo-500" />
                    Perovskite Solar Cells
                  </div>
                </div>
              </div>

              {/* Biography Text - Mobile */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  I am Sercan Ozen, a doctoral researcher at the University of Potsdam, focusing on the performance,
                  stability, and degradation mechanisms of all-perovskite solar cells in extreme environments. My
                  research investigates the effects of low-intensity low-temperature (LILT) conditions, thermal cycling,
                  radiation exposure, and fluctuating light intensities on the electrical and structural properties of
                  single-junction and multi-junction perovskite solar cells.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Through advanced characterization techniques and device simulations, I aim to understand charge
                  transport dynamics, interfacial resistances, and long-term material stability, contributing to the
                  feasibility of perovskite-based photovoltaics for space applications. I completed my Bachelor's and
                  Master's degrees in Physics at the Izmir Institute of Technology, where I developed a strong interest
                  in semiconductor physics, optoelectronic devices, and light-matter interactions.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Beyond my academic work, I have a strong interest in scientific coding, data analysis, and
                  visualization, often integrating computational tools into my research. During my time as a research
                  assistant, I played a key role in setting up optical laboratories and experimental setups for the
                  institute.
                </p>
              </div>
            </div>

            {/* Desktop Layout - Side by side with floating image */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Profile Picture - floats right and wraps with text on desktop */}
                <div className="float-right w-[180px] ml-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-1">
                    <div className="w-full h-[240px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src="/profile-photo.png"
                        alt="Sercan Ozen"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none"
                          e.target.nextSibling.style.display = "flex"
                        }}
                      />
                      <div
                        className="w-full h-full flex flex-col items-center justify-center text-white"
                        style={{ display: "none" }}
                      >
                        <User size={32} className="mb-2" />
                        <span className="text-sm">Profile Photo</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                      Sercan Ozen
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">Doctoral Researcher</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center justify-center">
                        <GraduationCap size={12} className="mr-1 text-blue-500" />
                        University of Potsdam
                      </div>
                      <div className="flex items-center justify-center">
                        <Wrench size={12} className="mr-1 text-indigo-500" />
                        Perovskite Solar Cells
                      </div>
                    </div>
                  </div>
                </div>

                {/* Biography Text - Desktop */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-justify mb-6">
                    I am Sercan Ozen, a doctoral researcher at the University of Potsdam, focusing on the performance,
                    stability, and degradation mechanisms of all-perovskite solar cells in extreme environments. My
                    research investigates the effects of low-intensity low-temperature (LILT) conditions, thermal
                    cycling, radiation exposure, and fluctuating light intensities on the electrical and structural
                    properties of single-junction and multi-junction perovskite solar cells.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify mb-6">
                    Through advanced characterization techniques and device simulations, I aim to understand charge
                    transport dynamics, interfacial resistances, and long-term material stability, contributing to the
                    feasibility of perovskite-based photovoltaics for space applications. I completed my Bachelor's and
                    Master's degrees in Physics at the Izmir Institute of Technology, where I developed a strong
                    interest in semiconductor physics, optoelectronic devices, and light-matter interactions.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Beyond my academic work, I have a strong interest in scientific coding, data analysis, and
                    visualization, often integrating computational tools into my research. During my time as a research
                    assistant, I played a key role in setting up optical laboratories and experimental setups for the
                    institute.
                  </p>
                </div>

                {/* Clear float */}
                <div className="clear-both"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Expertise Section - 3 Row Layout */}
        <div className="space-y-8">
          {/* FIRST ROW: Experience | Skills & Expertise (2 columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {/* Experience - Clean Timeline */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
              </div>

              <div className="relative">
                {/* Straight timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300"></div>

                <div className="space-y-8">
                  {/* Experience 1 */}
                  <div className="relative pl-10">
                    <div className="absolute left-2.5 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h4 className="font-bold text-gray-800 mb-1">Doctoral Researcher</h4>
                    <p className="text-sm text-gray-600 mb-2">2023–Present | University of Potsdam</p>
                    <p className="text-sm text-gray-700">
                      Conducting research on perovskite solar cells (PSCs), including single-junction (SJ), tandem (2J),
                      and triple-junction (3J) architectures. Focused on performance stability and environmental
                      resilience for space applications.
                    </p>
                  </div>

                  {/* Experience 2 */}
                  <div className="relative pl-10">
                    <div className="absolute left-2.5 top-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                    <h4 className="font-bold text-gray-800 mb-1">Research Assistant</h4>
                    <p className="text-sm text-gray-600 mb-2">2018–2023 | Izmir Institute of Technology</p>
                    <p className="text-sm text-gray-700">
                      Government-funded position obtained through competitive exam. Assisted in teaching and laboratory
                      courses. Built and configured optical laboratory setups.
                    </p>
                  </div>

                  {/* Experience 3 */}
                  <div className="relative pl-10">
                    <div className="absolute left-2.5 top-1 w-3 h-3 bg-blue-300 rounded-full"></div>
                    <h4 className="font-bold text-gray-800 mb-1">Graduate Researcher</h4>
                    <p className="text-sm text-gray-600 mb-2">2017–2020 | CENT Research Group</p>
                    <p className="text-sm text-gray-700">
                      Synthesis, doping, and investigation of doping-originated changes in the optical and electronic
                      properties of perovskites.
                    </p>
                  </div>

                  {/* Experience 4 - Internship */}
                  <div className="relative pl-10">
                    <div className="absolute left-2.5 top-1 w-3 h-3 bg-blue-200 rounded-full"></div>
                    <h4 className="font-bold text-gray-800 mb-1">Engineering Intern</h4>
                    <p className="text-sm text-gray-600 mb-2">2015–2016 | DVLX R&D</p>
                    <p className="text-sm text-gray-700">
                      Developed modular electric bicycle conversion systems, including battery pack assembly with spot
                      welding techniques, battery holder design, component research, and speed controller programming
                      for plug-and-play e-bike solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Wrench className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-blue-700">Skills & Expertise</h3>
              </div>

              <div className="space-y-6">
                {/* Solar Cell Fabrication */}
                <div>
                  <h4 className="text-blue-600 font-semibold mb-3 flex items-center">
                    <span className="text-lg mr-2">🔬</span>
                    Solar Cell Fabrication
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Single-junction and multi-junction device processing</li>
                    <li>• Thin-film deposition and layer stack engineering</li>
                    <li>• Encapsulation for stability testing</li>
                  </ul>
                </div>

                {/* Electrical & Optical Characterization */}
                <div>
                  <h4 className="text-blue-600 font-semibold mb-3 flex items-center">
                    <span className="text-lg mr-2">⚡</span>
                    Electrical & Optical Characterization
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• J-V analysis and maximum power point tracking (stability)</li>
                    <li>• EQE / IQE measurements (incl. subcell-resolved for MJ devices)</li>
                    <li>• Photoluminescence (steady-state, time-resolved, PLQY)</li>
                    <li>• Electroluminescence (incl. injection-dependent ELQY)</li>
                  </ul>
                </div>

                {/* Space Testing */}
                <div>
                  <h4 className="text-blue-600 font-semibold mb-3 flex items-center">
                    <span className="text-lg mr-2">🚀</span>
                    Space Testing
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Cryogenic & LILT (low-intensity, low-temperature) measurements</li>
                    <li>• In-operando proton irradiation (beamline experiments)</li>
                    <li>• Encapsulation performance under environmental stress</li>
                  </ul>
                </div>

                {/* Structural & Morphological Analysis */}
                <div>
                  <h4 className="text-blue-600 font-semibold mb-3 flex items-center">
                    <span className="text-lg mr-2">🧱</span>
                    Structural & Morphological Analysis
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• X-ray diffraction (XRD, GI-XRD, GIWAXS)</li>
                    <li>• Scanning electron microscopy (SEM)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND ROW: Data Analysis + Visualization | Key Publications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Left Column: Data Analysis + Visualization stacked */}
            <div className="flex flex-col space-y-4 h-full">
              {/* Data Analysis */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200 shadow-xl flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-cyan-100 rounded-full mr-3">
                    <Code className="text-cyan-600" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-700">Data Analysis</h3>
                </div>

                <div className="space-y-3 flex-1">
                  {[
                    { skill: "Python", level: 90, color: "bg-cyan-500" },
                    { skill: "MATLAB", level: 85, color: "bg-blue-500" },
                    { skill: "Origin", level: 90, color: "bg-teal-500" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="mb-1">
                        <span className="text-gray-800 font-medium text-sm">{item.skill}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visualization */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 shadow-xl flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-full mr-3">
                    <Monitor className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">Visualization</h3>
                </div>

                <div className="space-y-3 flex-1">
                  {[
                    { skill: "Blender", level: 60, color: "bg-purple-500" },
                    { skill: "VESTA", level: 85, color: "bg-indigo-500" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="mb-1">
                        <span className="text-gray-800 font-medium text-sm">{item.skill}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Publications - Spans 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-amber-100 rounded-full mr-4">
                      <FileText className="text-amber-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Key Publications</h3>
                  </div>
                  <a
                    href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group shadow-lg text-sm"
                  >
                    See All
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Publication 1 */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 border-l-4 border-l-amber-400 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2 leading-tight text-sm">[Publication Title 1]</h4>
                    <p className="text-xs mb-1 text-gray-600">[Journal Name], [Year]</p>
                    <p className="text-xs text-gray-500">[Authors]</p>
                  </div>

                  {/* Publication 2 */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 border-l-4 border-l-amber-400 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2 leading-tight text-sm">[Publication Title 2]</h4>
                    <p className="text-xs mb-1 text-gray-600">[Journal Name], [Year]</p>
                    <p className="text-xs text-gray-500">[Authors]</p>
                  </div>

                  {/* Publication 3 */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 border-l-4 border-l-amber-400 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2 leading-tight text-sm">[Publication Title 3]</h4>
                    <p className="text-xs mb-1 text-gray-600">[Journal Name], [Year]</p>
                    <p className="text-xs text-gray-500">[Authors]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
