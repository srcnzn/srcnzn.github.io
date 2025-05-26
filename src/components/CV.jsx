"use client"

import { Mail, MapPin, Building, Globe } from "lucide-react"

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 font-serif leading-relaxed">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-300 pb-6 mb-8">
        <h1 className="text-4xl font-bold mb-2">Sercan Ozen</h1>
        <p className="text-xl text-gray-600 mb-4">Doctoral Researcher in Physics</p>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>oezen1@uni-potsdam.de</span>
          </div>
          <div className="flex items-center gap-1">
            <Building size={14} />
            <span>University of Potsdam</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>Potsdam, Germany</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe size={14} />
            <span>LinkedIn: linkedin.com/in/srcnzn</span>
          </div>
        </div>
      </div>

      {/* Research Interests */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Research Interests</h2>
        <p className="text-justify">
          Perovskite solar cells for extreme environments and space applications, focusing on performance stability and
          degradation mechanisms under low-intensity low-temperature (LILT) conditions, thermal cycling, radiation
          exposure, and fluctuating light intensities. Advanced characterization techniques, device simulations, charge
          transport dynamics, and interfacial resistances in single-junction and multi-junction perovskite solar cells.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Education</h2>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Ph.D. in Physics</h3>
                <p className="text-gray-600">University of Potsdam, Germany</p>
                <p className="text-sm text-gray-500">Soft Matter Physics and Optoelectronics Group, ROSI subgroup</p>
              </div>
              <span className="text-sm font-medium">2023 – Present</span>
            </div>
            <p className="text-sm mt-2">
              <strong>Dissertation:</strong> Performance, stability, and degradation mechanisms of all-perovskite solar
              cells in extreme environments
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">M.Sc. in Photonics Science & Engineering</h3>
                <p className="text-gray-600">Izmir Institute of Technology, Turkey</p>
              </div>
              <span className="text-sm font-medium">2020</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">B.Sc. in Physics</h3>
                <p className="text-gray-600">Izmir Institute of Technology, Turkey</p>
              </div>
              <span className="text-sm font-medium">2017</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Professional Experience</h2>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Doctoral Researcher</h3>
                <p className="text-gray-600">University of Potsdam, Germany</p>
              </div>
              <span className="text-sm font-medium">2023 – Present</span>
            </div>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>
                Conducting research on perovskite solar cells (PSCs), including single-junction (SJ), tandem (2J), and
                triple-junction (3J) architectures
              </li>
              <li>Focused on performance stability and environmental resilience for space applications</li>
              <li>Advanced characterization techniques and device simulations</li>
              <li>Investigation of charge transport dynamics and interfacial resistances</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Research Assistant</h3>
                <p className="text-gray-600">Izmir Institute of Technology, Turkey</p>
              </div>
              <span className="text-sm font-medium">2018 – 2023</span>
            </div>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Government-funded position obtained through competitive examination</li>
              <li>Assisted in teaching and laboratory courses</li>
              <li>Built and configured optical laboratory setups</li>
              <li>Supervised undergraduate student research projects</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Graduate Researcher</h3>
                <p className="text-gray-600">CENT Research Group, Izmir Institute of Technology</p>
              </div>
              <span className="text-sm font-medium">2017 – 2020</span>
            </div>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>
                Synthesis, doping, and investigation of doping-originated changes in optical and electronic properties
                of perovskites
              </li>
              <li>Material characterization using advanced spectroscopic techniques</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Characterization Techniques</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>In-situ beamtime measurements under proton radiation</li>
              <li>Cryogenic/LILT measurements (PLQY, ELQY)</li>
              <li>J-V and EQE measurements</li>
              <li>Photoluminescence and Electroluminescence spectroscopy</li>
              <li>Scanning Electron Microscopy (SEM)</li>
              <li>X-ray diffraction (XRD, GI-XRD, GIWAXS)</li>
              <li>Encapsulation and stability studies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Computational Skills</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Python (Advanced) - Data analysis and visualization</li>
              <li>MATLAB (Advanced) - Signal processing and modeling</li>
              <li>Origin (Intermediate) - Scientific plotting</li>
              <li>Blender (Intermediate) - 3D modeling and visualization</li>
              <li>VESTA (Intermediate) - Crystal structure visualization</li>
              <li>Scientific programming and algorithm development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Publications</h2>

        <div className="space-y-3">
          <div className="text-sm">
            <p className="font-medium">[Publication Title 1]</p>
            <p className="text-gray-600">
              [Authors], <em>[Journal Name]</em>, [Year]
            </p>
          </div>

          <div className="text-sm">
            <p className="font-medium">[Publication Title 2]</p>
            <p className="text-gray-600">
              [Authors], <em>[Journal Name]</em>, [Year]
            </p>
          </div>

          <div className="text-sm">
            <p className="font-medium">[Publication Title 3]</p>
            <p className="text-gray-600">
              [Authors], <em>[Journal Name]</em>, [Year]
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          <strong>Google Scholar:</strong> https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID
        </p>
      </section>

      {/* Conference Presentations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Conference Presentations</h2>

        <div className="space-y-3">
          <div className="text-sm">
            <p className="font-medium">[Presentation Title 1]</p>
            <p className="text-gray-600">[Conference Name], [Location], [Year]</p>
          </div>

          <div className="text-sm">
            <p className="font-medium">[Presentation Title 2]</p>
            <p className="text-gray-600">[Conference Name], [Location], [Year]</p>
          </div>
        </div>
      </section>

      {/* Awards and Honors */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Awards and Honors</h2>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Government-funded Research Assistant Position (Competitive Exam)</span>
            <span>2018</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>[Add any other awards or honors]</span>
            <span>[Year]</span>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Languages</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium">Turkish:</span> Native
          </div>
          <div>
            <span className="font-medium">English:</span> Fluent
          </div>
          <div>
            <span className="font-medium">German:</span> [Level]
          </div>
          <div>
            <span className="font-medium">[Other]:</span> [Level]
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Professional Memberships</h2>

        <div className="space-y-2 text-sm">
          <div>[Professional Society 1]</div>
          <div>[Professional Society 2]</div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-12 pt-4 border-t border-gray-200">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}
