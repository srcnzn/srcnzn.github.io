"use client"

import { useState } from "react"

export default function About() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <div className="min-h-screen w-full bg-gray-800 text-white py-10">
      {/* About Me Section - Always visible */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold mb-6 text-center">Who am I...</h2>
        <div className="relative">
          <div className="float-right w-[180px] h-[240px] bg-gray-900 rounded-lg text-center text-white flex flex-col items-center justify-center ml-4 mb-4">
            <div className="w-full h-full flex items-center justify-center">Profile Picture</div>
            <div className="mt-1">
              <p className="font-bold">Sercan Ozen</p>
              <p className="text-sm">Doctoral Researcher</p>
            </div>
          </div>
          <p className="text-justify">
            I am Sercan Ozen, a doctoral researcher at the University of Potsdam, focusing on the performance,
            stability, and degradation mechanisms of all-perovskite solar cells in extreme environments. My research
            investigates the effects of low-intensity low-temperature (LILT) conditions, thermal cycling, radiation
            exposure, and fluctuating light intensities on the electrical and structural properties of single-junction
            and multi-junction perovskite solar cells. Through advanced characterization techniques and device
            simulations, I aim to understand charge transport dynamics, interfacial resistances, and long-term material
            stability, contributing to the feasibility of perovskite-based photovoltaics for space applications. I
            completed my Bachelor's and Master's degrees in Physics at the Izmir Institute of Technology, where I
            developed a strong interest in semiconductor physics, optoelectronic devices, and light-matter interactions.
            My Master's research focused on cesium lead halide perovskites, particularly doping mechanisms and their
            effects on the optical and electronic properties of perovskites. This involved a combination of experimental
            work and theoretical investigations, utilizing density functional theory (DFT) with VASP to explore doping
            effects at the atomic level. During my time as a research assistant, I played a key role in setting up
            optical laboratories and experimental setups for the institute. I also contributed to teaching, prepared lab
            manuals, and assisted in various experimental research projects. Beyond my academic work, I have a strong
            interest in scientific coding, data analysis, and visualization, often integrating computational tools into
            my research.
          </p>
        </div>
      </div>

      {/* Samsung-style Tab Navigation */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-b border-gray-700 mb-8">
          <div className="flex justify-center md:justify-start space-x-8">
            <button
              onClick={() => setActiveTab("experience")}
              className={`pb-2 px-1 ${
                activeTab === "experience"
                  ? "border-b-2 border-blue-500 text-blue-500 font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Experience & Education
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`pb-2 px-1 ${
                activeTab === "skills"
                  ? "border-b-2 border-blue-500 text-blue-500 font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Skills & Expertise
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="tab-content">
          {/* Experience & Education Tab */}
          {activeTab === "experience" && (
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 min-h-[400px]">
              <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
                {/* Experience Column */}
                <div className="flex-1 bg-blue-900/30 backdrop-blur-sm rounded-xl p-5 space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Experience</h3>

                  <div>
                    <p className="font-semibold">Doctoral Researcher</p>
                    <p className="text-sm text-gray-300">2023–Present | University of Potsdam</p>
                    <p className="text-sm text-gray-300 mt-2">
                      Conducting research on perovskite solar cells (PSCs), including single-junction (SJ), tandem (2J),
                      and triple-junction (3J) architectures. Focused on performance stability and environmental
                      resilience for space applications.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Research Assistant</p>
                    <p className="text-sm text-gray-300">2018–2023 | Izmir Institute of Technology</p>
                    <p className="text-sm text-gray-300 mt-2">
                      Government-funded position obtained through a competitive exam. Assisted in teaching and
                      laboratory courses. Built and configured optical laboratory setups.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Graduated Researcher</p>
                    <p className="text-sm text-gray-300">2017–2020 | CENT Research Group</p>
                    <p className="text-sm text-gray-300 mt-2">
                      Synthesis, doping, and investigation of doping originated changes in the optic and electronic
                      properties of perovskites.
                    </p>
                  </div>
                </div>

                {/* Education Column */}
                <div className="flex-1 bg-purple-900/30 backdrop-blur-sm rounded-xl p-5 space-y-4">
                  <h3 className="text-xl font-bold text-purple-400">Recent Publications</h3>

                  <div>
                    <p className="font-semibold">
                      Understanding and Mitigating Atomic Oxygen‐Induced Degradation of Perovskite Solar Cells for
                      Near‐Earth Space Applications
                    </p>
                    <p className="text-sm text-gray-300">Small, 2024</p>
                    <p className="text-sm text-gray-300">Biruk Alebachew Seid, et. al</p>
                  </div>

                  <h3 className="text-xl font-bold text-purple-400 mt-6">Education</h3>

                  <div>
                    <p className="font-semibold">Ph.D | Physics</p>
                    <p className="text-sm text-gray-300">2023–Present | University of Potsdam</p>
                  </div>

                  <div>
                    <p className="font-semibold">M.Sc | Photonics Science & Engineering</p>
                    <p className="text-sm text-gray-300">2020 | Izmir Institute of Technology</p>
                  </div>

                  <div>
                    <p className="font-semibold">B.Sc | Physics</p>
                    <p className="text-sm text-gray-300">2017 | Izmir Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills & Expertise Tab */}
          {activeTab === "skills" && (
            <div className="bg-gradient-to-r from-red-900 to-blue-900 rounded-xl p-8 min-h-[400px]">
              <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
                {/* Left Column - Characterization */}
                <div className="flex-1 bg-red-900/30 backdrop-blur-sm rounded-xl p-5 space-y-4">
                  <h3 className="text-xl font-bold text-red-400">Characterization</h3>

                  <div>
                    <p className="text-red-300 font-semibold">Performance Metrics</p>
                    <ul className="text-sm text-gray-300 space-y-3 mt-2">
                      <li>
                        <p className="font-semibold text-white">Insitu Beamtime Measurements</p>
                        <p>Insitu performance analysis under proton radiation.</p>
                      </li>
                      <li>
                        <p className="font-semibold text-white">Cryogenic/LILT Measurements</p>
                        <p>PLQY, ELQY under low temp/light intensity.</p>
                      </li>
                      <li>
                        <p className="font-semibold text-white">Encapsulation</p>
                        <p>Stability and durability studies with encapsulation materials.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-red-300 font-semibold">Spectroscopy & Imaging</p>
                    <ul className="text-sm text-gray-300 space-y-3 mt-2">
                      <li>
                        <p className="font-semibold text-white">Scanning Electron Microscopy (SEM)</p>
                        <p>Surface morphology & image analysis.</p>
                      </li>
                      <li>
                        <p className="font-semibold text-white">XRD, GI-XRD, GIWAXS</p>
                        <p>Crystallographic & structural analysis.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Data Analysis */}
                <div className="flex-1 bg-blue-900/30 backdrop-blur-sm rounded-xl p-5 space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Data Analysis</h3>

                  <div>
                    <ul className="text-sm text-gray-300 space-y-3 mt-2">
                      <li>
                        <p className="font-semibold text-white">Raw Data Handling</p>
                        <p>Preprocessing, cleaning, organizing.</p>
                      </li>
                      <li>
                        <p className="font-semibold text-white">Large Scale Data Processing</p>
                        <p>Efficient classification & grouping.</p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-white-400 font-bold">Python</h4>
                    <div className="w-full bg-gray-600 h-2 rounded">
                      <div className="bg-blue-500 h-2 rounded w-[90%]"></div>
                    </div>

                    <h4 className="text-white-400 font-bold mt-3">MATLAB</h4>
                    <div className="w-full bg-gray-600 h-2 rounded">
                      <div className="bg-blue-500 h-2 rounded w-[85%]"></div>
                    </div>

                    <h4 className="text-white-400 font-bold mt-3">Origin</h4>
                    <div className="w-full bg-gray-600 h-2 rounded">
                      <div className="bg-blue-500 h-2 rounded w-[75%]"></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-blue-400 mt-6">Visualization & Design</h3>

                  <div>
                    <h4 className="text-white-400 font-bold">Blender</h4>
                    <div className="w-full bg-gray-600 h-2 rounded">
                      <div className="bg-blue-500 h-2 rounded w-[70%]"></div>
                    </div>

                    <h4 className="text-white-400 font-bold mt-3">VESTA</h4>
                    <div className="w-full bg-gray-600 h-2 rounded">
                      <div className="bg-blue-500 h-2 rounded w-[60%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
