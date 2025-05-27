"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Eye, Activity, Shield, Layers, Target } from "lucide-react"

export default function Experimental() {
  const [selectedStep, setSelectedStep] = useState(null)
  const scrollContainerRef = useRef(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedStep) {
      // Disable background scrolling
      document.body.style.overflow = "hidden"

      // Add escape key listener
      const handleEscape = (e) => {
        if (e.key === "Escape") {
          setSelectedStep(null)
        }
      }

      document.addEventListener("keydown", handleEscape)

      return () => {
        // Re-enable background scrolling
        document.body.style.overflow = "unset"
        document.removeEventListener("keydown", handleEscape)
      }
    }
  }, [selectedStep])

  // Device Evaluation Workflow Steps
  const workflowSteps = [
    {
      id: "performance-benchmarking",
      title: "Performance Benchmarking",
      step: "Step 1",
      category: "Initial Assessment",
      description: "Assess baseline device performance under AM1.5G and AM0",
      icon: <Target size={40} className="text-blue-400" />,
      image: "/placeholder.svg?height=200&width=300&query=solar+cell+JV+measurement+setup",
      techniques: [
        "J-V under AM1.5G / AM0",
        "EQE (subcell-resolved)",
        "Extract Voc, Jsc, FF, PCE",
        "Spectral mismatch analysis",
      ],
      insights: ["→ Baseline efficiency", "→ EQE bottlenecks", "→ Tandem current matching"],
      nextSteps: "Performance gaps identified → investigate recombination pathways",
    },
    {
      id: "radiative-efficiency",
      title: "Radiative Efficiency & Recombination",
      step: "Step 2",
      category: "Loss Analysis",
      description: "Quantify non-radiative losses and identify recombination pathways",
      icon: <Eye size={40} className="text-purple-400" />,
      image: "/placeholder.svg?height=200&width=300&query=photoluminescence+spectroscopy+setup",
      techniques: [
        "Absolute PLQY measurements",
        "Intensity-dependent PLQY",
        "Pseudo-JV derivation",
        "Trap-assisted recombination ID",
      ],
      insights: ["→ Non-radiative loss quantification", "→ Trap density mapping", "→ Voltage loss mechanisms"],
      nextSteps: "PLQY trends identified → validate with electroluminescence",
    },
    {
      id: "injection-behavior",
      title: "Injection Behavior & Electroluminescence",
      step: "Step 3",
      category: "Electrical Validation",
      description: "Validate recombination analysis under electrical injection",
      icon: <Activity size={40} className="text-green-400" />,
      image: "/placeholder.svg?height=200&width=300&query=electroluminescence+measurement+device",
      techniques: [
        "Electroluminescence spectroscopy",
        "Injection-dependent ELQY",
        "EL-derived Voc analysis",
        "Quasi-Fermi level splitting",
      ],
      insights: ["→ Diode quality validation", "→ Injection efficiency", "→ Interface quality"],
      nextSteps: "Injection behavior characterized → assess long-term stability",
    },
    {
      id: "stability-environmental",
      title: "Stability & Environmental Testing",
      step: "Step 4",
      category: "Durability Assessment",
      description: "Evaluate performance retention under operational and extreme conditions",
      icon: <Shield size={40} className="text-orange-400" />,
      image: "/placeholder.svg?height=200&width=300&query=environmental+testing+chamber+solar+cells",
      techniques: [
        "Maximum power point tracking",
        "Cryogenic/LILT evaluation",
        "In-situ proton irradiation",
        "Encapsulation durability",
      ],
      insights: ["→ Operational stability trends", "→ Environmental limits", "→ Degradation mechanisms"],
      nextSteps: "Stability issues identified → investigate structural changes",
    },
    {
      id: "structural-morphological",
      title: "Structural & Morphological Analysis",
      step: "Step 5",
      category: "Root Cause Analysis",
      description: "Correlate performance changes with structural evolution",
      icon: <Layers size={40} className="text-red-400" />,
      image: "/placeholder.svg?height=200&width=300&query=GIWAXS+diffraction+analysis+setup",
      techniques: [
        "GIWAXS/GI-XRD analysis",
        "SEM morphological characterization",
        "Post-stress comparison",
        "Defect assessment",
      ],
      insights: ["→ Structural degradation", "→ Morphological limits", "→ Processing optimization"],
      nextSteps: "Root causes identified → optimize materials and processing",
    },
  ]

  // Get category colors
  const getCategoryColor = (category) => {
    switch (category) {
      case "Initial Assessment":
        return "text-blue-400 border-blue-400/30 bg-blue-400/10"
      case "Loss Analysis":
        return "text-purple-400 border-purple-400/30 bg-purple-400/10"
      case "Electrical Validation":
        return "text-green-400 border-green-400/30 bg-green-400/10"
      case "Durability Assessment":
        return "text-orange-400 border-orange-400/30 bg-orange-400/10"
      case "Root Cause Analysis":
        return "text-red-400 border-red-400/30 bg-red-400/10"
      default:
        return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  const handleCardClick = (step) => {
    setSelectedStep(step)
  }

  const closeModal = () => {
    setSelectedStep(null)
  }

  // Handle clicking outside modal to close
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      })
    }
  }

  const renderModal = () => {
    if (!selectedStep) return null

    switch (selectedStep.id) {
      case "performance-benchmarking":
        return (
          <div className="prose prose-lg prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Solar Spectra: The Foundation of Performance Assessment
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=AM0+AM1.5G+solar+spectra+comparison+plot"
                  alt="AM0 vs AM1.5G Solar Spectra"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  Solar irradiance spectra: AM0 (space) vs AM1.5G (terrestrial standard)
                </p>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The performance evaluation begins with understanding the fundamental difference between terrestrial
                  and space illumination conditions. The{" "}
                  <span className="text-blue-400 font-semibold">AM0 spectrum</span> represents direct solar radiation
                  outside Earth's atmosphere, while <span className="text-orange-400 font-semibold">AM1.5G</span> is the
                  standard terrestrial condition after atmospheric filtering.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The atmospheric passage significantly alters the spectral distribution. Water vapor, oxygen, and ozone
                  absorb specific wavelengths, particularly in the UV and IR regions. This results in approximately 27%
                  reduction in total irradiance (from ~1366 W/m² to ~1000 W/m²) and substantial spectral reshaping.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For space applications, the higher UV content and increased irradiance of AM0 create different
                  operational challenges, requiring careful evaluation of how devices respond to these enhanced
                  conditions.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Current-Voltage Characterization: Quantifying Performance
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The current-voltage (J-V) measurement forms the cornerstone of photovoltaic device evaluation. By
                  sweeping the applied voltage and measuring the resulting current density, we extract the fundamental
                  performance parameters that define device quality.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Under illumination, the device operates as a current source, with the photocurrent opposing the dark
                  diode current. The intersection of the load line with the J-V curve determines the operating point,
                  while the curve shape reveals information about series resistance, shunt resistance, and diode
                  quality.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Comparing J-V curves under AM0 and AM1.5G illumination reveals how spectral content affects device
                  operation. The higher irradiance of AM0 typically increases both short-circuit current and
                  open-circuit voltage, but the magnitude of these changes depends on the device's spectral response and
                  recombination mechanisms.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=JV+curve+comparison+AM0+AM1.5G+solar+cell+theory"
                  alt="J-V Curves under AM0 and AM1.5G"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  Theoretical J-V curves showing the impact of spectral conditions on device performance
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-purple-400 mb-6">
              External Quantum Efficiency: Spectral Response Analysis
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              External Quantum Efficiency (EQE) measurements provide wavelength-resolved information about device
              performance, revealing how effectively photons of different energies are converted to electrical current.
              This spectral analysis is crucial for understanding device limitations and optimizing performance under
              different illumination conditions.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=single+junction+perovskite+EQE+spectrum+theory"
                  alt="Single Junction EQE"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">Single-junction device EQE response</p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  <span className="text-indigo-400 font-semibold">Single-junction devices</span> exhibit a
                  characteristic EQE profile with peak response in the visible region. The UV rolloff typically results
                  from parasitic absorption in transport layers, while the IR cutoff is determined by the absorber
                  bandgap.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=tandem+perovskite+silicon+EQE+subcell+resolved+theory"
                  alt="Tandem EQE"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">Tandem device with subcell-resolved EQE</p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  <span className="text-cyan-400 font-semibold">Tandem architectures</span> require careful current
                  matching between subcells. The top cell harvests high-energy photons, while the bottom cell captures
                  transmitted low-energy photons. Subcell-resolved EQE measurements reveal individual contributions and
                  identify current-limiting subcells.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-500/30">
              <h4 className="text-xl font-bold text-white mb-3">Key Evaluation Outcomes</h4>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-blue-400">Baseline performance metrics</span> under relevant operating
                  conditions
                </li>
                <li>
                  • <span className="text-green-400">Spectral response limitations</span> and optimization targets
                </li>
                <li>
                  • <span className="text-purple-400">Current matching assessment</span> for multi-junction devices
                </li>
                <li>
                  • <span className="text-yellow-400">Performance gaps</span> that guide subsequent characterization
                  steps
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                → Next step: Investigate recombination pathways to understand voltage limitations and loss mechanisms
              </p>
            </div>
          </div>
        )

      case "radiative-efficiency":
        return (
          <div className="prose prose-lg prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">
              Photoluminescence: Probing Recombination Physics
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=photoluminescence+quantum+yield+measurement+setup"
                  alt="PLQY Measurement Setup"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  Absolute photoluminescence quantum yield measurement configuration
                </p>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Photoluminescence Quantum Yield (PLQY) measurements provide direct access to the fundamental
                  recombination processes that limit device performance. By measuring the ratio of emitted to absorbed
                  photons, we quantify the balance between{" "}
                  <span className="text-green-400 font-semibold">radiative</span> and{" "}
                  <span className="text-red-400 font-semibold">non-radiative</span> recombination pathways.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The PLQY directly relates to the open-circuit voltage through the detailed balance principle. High
                  PLQY indicates efficient radiative recombination and minimal trap-assisted losses, while low PLQY
                  reveals the presence of non-radiative recombination centers that limit voltage.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Absolute PLQY measurements require careful calibration using integrating spheres to account for all
                  emitted photons. This technique provides quantitative assessment of material quality independent of
                  device architecture effects.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Intensity-Dependent Analysis: Separating Recombination Mechanisms
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By varying the excitation intensity and measuring the resulting PLQY, we can separate different
                  recombination mechanisms. The intensity dependence reveals whether losses are dominated by{" "}
                  <span className="text-yellow-400 font-semibold">trap-assisted</span> (Shockley-Read-Hall),{" "}
                  <span className="text-blue-400 font-semibold">radiative</span> (band-to-band), or{" "}
                  <span className="text-purple-400 font-semibold">Auger</span> recombination processes.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At low intensities, trap-assisted recombination typically dominates, leading to low PLQY. As intensity
                  increases, trap states become saturated, and radiative recombination becomes more prominent, causing
                  PLQY to increase. At very high intensities, Auger recombination may cause PLQY to decrease again.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This analysis provides crucial insights into the dominant loss mechanisms under different operating
                  conditions, guiding material optimization strategies and processing improvements.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=PLQY+vs+excitation+intensity+recombination+mechanisms"
                  alt="Intensity-dependent PLQY"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  PLQY vs excitation intensity revealing different recombination regimes
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Pseudo-JV Analysis: Linking Optics to Electronics
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              The pseudo-JV technique bridges optical and electrical characterization by deriving voltage-dependent
              parameters from PL measurements. By relating the PL intensity to the quasi-Fermi level splitting, we can
              extract an "optical Voc" that represents the maximum achievable voltage in the absence of resistive
              losses.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=pseudo+JV+curve+from+photoluminescence+data"
                  alt="Pseudo-JV from PL"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">
                  Pseudo-JV curve derived from PL measurements
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  The comparison between pseudo-JV and actual device JV curves reveals the impact of transport layers,
                  interfaces, and series resistance on device performance. Large differences indicate significant
                  electrical losses beyond fundamental recombination limitations.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=trap+density+energy+distribution+from+PL+analysis"
                  alt="Trap Analysis"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">
                  Trap density and energy distribution from PL analysis
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  Advanced PL analysis can extract trap densities and energy distributions, providing detailed
                  information about defect states that limit performance. This guides targeted material improvements and
                  processing optimization.
                </p>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-yellow-400 mb-4">Voltage Loss Analysis</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                The difference between the radiative limit voltage (determined by bandgap) and the actual Voc can be
                decomposed into radiative and non-radiative contributions. PLQY measurements directly quantify the
                non-radiative voltage loss, while the radiative loss is determined by the emission spectrum and
                reciprocity relations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This analysis provides a roadmap for voltage improvement: increasing PLQY reduces non-radiative losses,
                while optimizing the emission spectrum can minimize radiative losses through enhanced photon recycling.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-6 border border-purple-500/30">
              <h4 className="text-xl font-bold text-white mb-3">Recombination Analysis Outcomes</h4>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-purple-400">Quantified non-radiative losses</span> and their intensity
                  dependence
                </li>
                <li>
                  • <span className="text-blue-400">Trap density mapping</span> and energy level identification
                </li>
                <li>
                  • <span className="text-green-400">Voltage loss decomposition</span> into radiative and non-radiative
                  components
                </li>
                <li>
                  • <span className="text-yellow-400">Material quality assessment</span> independent of device
                  architecture
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                → Next step: Validate recombination analysis under electrical injection conditions
              </p>
            </div>
          </div>
        )

      case "injection-behavior":
        return (
          <div className="prose prose-lg prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Electroluminescence: Validating Optical Analysis Under Injection
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=electroluminescence+measurement+setup+solar+cell"
                  alt="EL Measurement Setup"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  Electroluminescence measurement configuration for injection-dependent analysis
                </p>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Electroluminescence (EL) measurements validate the recombination analysis performed under optical
                  excitation by probing the same processes under electrical injection. This cross-validation is crucial
                  because device operation involves electrical injection, not optical excitation.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The EL spectrum provides information about the emission characteristics under forward bias, while the
                  injection-dependent EL quantum yield (ELQY) reveals how efficiently injected carriers recombine
                  radiatively. Ideally, ELQY should match PLQY, indicating that the same recombination mechanisms
                  operate under both conditions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Discrepancies between PL and EL behavior can reveal interface-specific issues, injection barriers, or
                  transport limitations that don't appear in optical measurements but significantly impact device
                  performance.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Injection-Dependent ELQY: Probing Carrier Dynamics
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By measuring ELQY as a function of injection current, we probe how recombination mechanisms change
                  with carrier density under device operation conditions. The injection dependence reveals whether the
                  device maintains high radiative efficiency across its operating range.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At low injection levels, similar to PL measurements, trap-assisted recombination may dominate,
                  resulting in low ELQY. As injection increases, radiative recombination should become more prominent,
                  leading to higher ELQY. The injection level at which this transition occurs provides insights into
                  trap densities and their impact on device operation.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The comparison between injection-dependent ELQY and intensity-dependent PLQY validates the
                  recombination model and confirms whether optical characterization accurately represents electrical
                  operation.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=ELQY+vs+injection+current+density+comparison+PLQY"
                  alt="Injection-dependent ELQY"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  ELQY vs injection current density compared with intensity-dependent PLQY
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-purple-400 mb-6">EL-Derived Voc: Assessing Diode Quality</h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              The relationship between EL intensity and applied voltage allows extraction of an "EL-derived Voc" that
              represents the voltage at which radiative recombination balances injection. This parameter provides a
              direct assessment of diode quality and injection efficiency.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=EL+intensity+vs+voltage+Voc+extraction"
                  alt="EL-derived Voc"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">
                  EL intensity vs voltage for Voc extraction
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  The EL-derived Voc should closely match the actual device Voc if injection is efficient and
                  recombination is primarily radiative. Large discrepancies indicate injection barriers or additional
                  loss mechanisms not captured in the recombination analysis.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=quasi+fermi+level+splitting+from+EL+measurements"
                  alt="Quasi-Fermi Level Analysis"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">
                  Quasi-Fermi level splitting analysis from EL measurements
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  EL measurements provide direct access to the quasi-Fermi level splitting in the active layer,
                  revealing how effectively the device maintains carrier populations under forward bias. This is
                  particularly important for understanding interface quality and transport limitations.
                </p>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Interface Quality Assessment</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                EL measurements are particularly sensitive to interface quality because they require efficient carrier
                injection across all interfaces in the device stack. Poor interfaces manifest as reduced ELQY,
                voltage-dependent emission spectra, or discrepancies between EL and PL behavior.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Spatial EL imaging can reveal non-uniformities in injection or recombination, identifying localized
                defects or processing issues that impact overall device performance. This information guides interface
                optimization and processing improvements.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-lg p-6 border border-green-500/30">
              <h4 className="text-xl font-bold text-white mb-3">Injection Validation Outcomes</h4>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-green-400">Diode quality validation</span> through EL-derived parameters
                </li>
                <li>
                  • <span className="text-blue-400">Injection efficiency assessment</span> across operating conditions
                </li>
                <li>
                  • <span className="text-purple-400">Interface quality evaluation</span> through PL-EL comparison
                </li>
                <li>
                  • <span className="text-cyan-400">Recombination model validation</span> under electrical operation
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                → Next step: Assess long-term stability and environmental resilience
              </p>
            </div>
          </div>
        )

      case "stability-environmental":
        return (
          <div className="prose prose-lg prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">
              Maximum Power Point Tracking: Operational Stability Assessment
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=maximum+power+point+tracking+stability+measurement"
                  alt="MPP Tracking Setup"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  Maximum power point tracking for continuous stability monitoring
                </p>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Maximum Power Point Tracking (MPPT) provides real-time assessment of device stability under
                  operational conditions. By continuously adjusting the load to maintain maximum power extraction, we
                  monitor how device performance evolves over time under realistic operating stresses.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  MPPT measurements reveal different degradation mechanisms through their characteristic signatures.
                  Gradual power loss may indicate slow material degradation, while sudden drops can reveal delamination,
                  contact failure, or catastrophic material changes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The temporal evolution of voltage, current, and power provides insights into which device parameters
                  are most susceptible to degradation, guiding targeted improvements in materials, interfaces, or
                  encapsulation strategies.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Cryogenic and LILT Testing: Space Environment Simulation
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Low-Intensity, Low-Temperature (LILT) conditions simulate the extreme environment of deep space
                  missions where solar irradiance is reduced and temperatures can drop significantly below terrestrial
                  values. These conditions test device performance under the most challenging operational scenarios.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cryogenic testing reveals how material properties change at low temperatures. Bandgaps typically
                  increase, affecting spectral response, while carrier mobilities and recombination rates change
                  dramatically. Some materials show improved performance at low temperatures due to reduced thermal
                  recombination, while others may suffer from freeze-out effects.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  LILT measurements provide crucial data for mission planning, revealing whether devices can maintain
                  adequate performance in the outer solar system where both light intensity and temperature are severely
                  reduced compared to Earth orbit conditions.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=cryogenic+LILT+testing+chamber+solar+cells"
                  alt="LILT Testing"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  Cryogenic testing chamber for LILT performance evaluation
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-red-400 mb-6">
              In-Situ Proton Irradiation: Radiation Hardness Assessment
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Space environments expose devices to high-energy particle radiation that can cause both immediate and
              long-term degradation. In-situ proton irradiation testing provides real-time assessment of radiation
              effects, revealing how device performance changes during and after radiation exposure.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=in+situ+proton+irradiation+beamline+setup"
                  alt="Proton Irradiation"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">
                  In-situ proton irradiation beamline setup for real-time monitoring
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  Real-time monitoring during irradiation reveals whether degradation occurs gradually or through
                  threshold effects. Some materials show immediate damage, while others may exhibit delayed degradation
                  or even temporary annealing effects.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=radiation+damage+mechanisms+displacement+ionization"
                  alt="Radiation Damage Mechanisms"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">
                  Radiation damage mechanisms: displacement and ionization effects
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  Proton irradiation causes both displacement damage (creating defect states) and ionization damage
                  (affecting interfaces and transport layers). The relative importance of these mechanisms depends on
                  particle energy and material properties.
                </p>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-yellow-400 mb-4">Encapsulation Durability</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Encapsulation systems must protect devices from environmental stresses while maintaining optical
                transparency and mechanical integrity. Stability testing evaluates how encapsulants perform under
                thermal cycling, UV exposure, and mechanical stress.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Encapsulation failure often manifests as moisture ingress, delamination, or optical degradation.
                Monitoring these failure modes guides the development of robust encapsulation strategies suitable for
                long-duration space missions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-xl font-bold text-white mb-3">Environmental Testing Outcomes</h4>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-orange-400">Operational stability trends</span> under realistic stress
                  conditions
                </li>
                <li>
                  • <span className="text-blue-400">LILT performance limits</span> for deep space applications
                </li>
                <li>
                  • <span className="text-red-400">Radiation hardness assessment</span> and damage mechanisms
                </li>
                <li>
                  • <span className="text-yellow-400">Encapsulation durability</span> and failure mode identification
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                → Next step: Correlate performance changes with structural and morphological evolution
              </p>
            </div>
          </div>
        )

      case "structural-morphological":
        return (
          <div className="prose prose-lg prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-red-400 mb-6">
              GIWAXS and GI-XRD: Probing Crystallographic Evolution
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=GIWAXS+diffraction+pattern+perovskite+analysis"
                  alt="GIWAXS Analysis"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  GIWAXS diffraction patterns revealing crystallographic structure and orientation
                </p>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Grazing-Incidence Wide-Angle X-ray Scattering (GIWAXS) and Grazing-Incidence X-ray Diffraction
                  (GI-XRD) provide detailed information about crystallographic structure, phase composition, and
                  molecular orientation in thin-film devices. These techniques are essential for understanding how
                  structural changes correlate with performance evolution.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The grazing-incidence geometry enhances surface sensitivity, making these techniques ideal for
                  analyzing thin active layers without interference from substrate signals. This allows precise
                  characterization of the photoactive materials that directly impact device performance.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By comparing diffraction patterns before and after stress testing, we identify structural changes that
                  accompany performance degradation. These may include phase transitions, crystallite size changes, or
                  the formation of degradation products.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              SEM Morphological Characterization: Surface and Cross-Sectional Analysis
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Scanning Electron Microscopy (SEM) provides high-resolution morphological information about device
                  structure, revealing how processing conditions and environmental stresses affect film quality,
                  interface integrity, and overall device architecture.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Surface morphology analysis reveals grain structure, surface roughness, and the presence of defects or
                  secondary phases. Changes in surface morphology often correlate with performance degradation,
                  particularly in devices where surface recombination is significant.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Cross-sectional SEM imaging provides crucial information about layer thicknesses, interface quality,
                  and the presence of voids or delamination. This three-dimensional perspective is essential for
                  understanding how device architecture affects performance and stability.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400&query=SEM+cross+section+perovskite+solar+cell+layers"
                  alt="SEM Cross-section"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2 text-center italic">
                  Cross-sectional SEM revealing device architecture and interface quality
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Post-Stress Structural Comparison: Identifying Degradation Mechanisms
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              The systematic comparison of structural and morphological characteristics before and after stress testing
              provides direct evidence of the physical changes that cause performance degradation. This analysis
              completes the characterization loop by linking macroscopic performance changes to microscopic structural
              evolution.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=before+after+stress+testing+structural+comparison"
                  alt="Before/After Comparison"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">
                  Structural comparison before and after environmental stress testing
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  Systematic comparison reveals which structural features are most susceptible to degradation under
                  different stress conditions. This information guides targeted improvements in material composition and
                  processing conditions.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=250&width=350&query=defect+formation+delamination+analysis+SEM"
                  alt="Defect Analysis"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-gray-400 text-sm text-center italic mb-4">
                  Defect formation and delamination analysis through high-resolution SEM
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  High-resolution analysis identifies specific failure modes such as grain boundary degradation,
                  interface delamination, or the formation of secondary phases that compromise device performance.
                </p>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-purple-400 mb-4">Crystallite Size and Orientation Analysis</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Quantitative analysis of diffraction data provides information about crystallite sizes, strain, and
                preferred orientation. Changes in these parameters often precede visible morphological changes and can
                serve as early indicators of degradation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Crystallite size reduction may indicate material decomposition or recrystallization, while changes in
                orientation can affect charge transport properties. Strain analysis reveals mechanical stresses that may
                drive degradation processes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-lg p-6 border border-red-500/30">
              <h4 className="text-xl font-bold text-white mb-3">Structural Analysis Outcomes</h4>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-red-400">Structural degradation mechanisms</span> identified through
                  crystallographic analysis
                </li>
                <li>
                  • <span className="text-blue-400">Morphological evolution</span> correlated with performance changes
                </li>
                <li>
                  • <span className="text-green-400">Interface quality assessment</span> through cross-sectional
                  analysis
                </li>
                <li>
                  • <span className="text-purple-400">Processing optimization targets</span> based on structure-property
                  relationships
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                → Outcome: Complete understanding of degradation mechanisms enables targeted material and processing
                improvements
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-12 sm:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Device Evaluation Workflow
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Strategic characterization pipeline: from performance benchmarking to root cause analysis
          </p>
          <p className="text-sm text-gray-400 mt-4 max-w-3xl mx-auto">
            Each step builds on the previous, creating a comprehensive understanding of device physics and failure
            mechanisms
          </p>
        </div>

        {/* Workflow Steps - Horizontal Scrollable */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors backdrop-blur-sm border border-slate-600/30 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors backdrop-blur-sm border border-slate-600/30 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {workflowSteps.map((step, index) => (
              <div key={step.id} className="flex-shrink-0 w-72 sm:w-80">
                <div
                  onClick={() => handleCardClick(step)}
                  className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/30 hover:border-slate-500/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group shadow-xl cursor-pointer"
                >
                  {/* Step Header */}
                  <div className="p-5 border-b border-slate-600/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/30">
                        {step.step}
                      </span>
                      <div className="opacity-60">{step.icon}</div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors min-h-[3rem] flex items-center">
                      {step.title}
                    </h3>

                    <span
                      className={`text-xs uppercase tracking-wider px-2 py-1 rounded-full border font-medium ${getCategoryColor(step.category)}`}
                    >
                      {step.category}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-800 flex items-center justify-center relative">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{step.description}</p>

                    {/* Techniques */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Key Techniques
                      </h4>
                      <ul className="space-y-1">
                        {step.techniques.slice(0, 3).map((technique, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {technique}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Strategic Insights */}
                    <div>
                      <h4 className="text-xs font-semibold text-green-300 uppercase tracking-wider mb-2">
                        Strategic Insights
                      </h4>
                      <ul className="space-y-1">
                        {step.insights.map((insight, idx) => (
                          <li key={idx} className="text-xs text-green-400">
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Universal Modal */}
        {selectedStep && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={handleModalBackdropClick}
          >
            <div className="bg-gradient-to-br from-slate-800/95 to-gray-800/95 backdrop-blur-sm rounded-2xl border border-slate-600/30 w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl mx-4">
              <div className="p-8 relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Header */}
                <div className="flex items-start mb-8">
                  <div className="mr-4">{selectedStep.icon}</div>
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/30">
                        {selectedStep.step}
                      </span>
                      <span
                        className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full border font-medium ${getCategoryColor(selectedStep.category)}`}
                      >
                        {selectedStep.category}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">{selectedStep.title}</h2>
                    <p className="text-gray-400 text-xl">
                      {selectedStep.id === "performance-benchmarking"
                        ? "Understanding device performance under terrestrial and space conditions"
                        : selectedStep.id === "radiative-efficiency"
                          ? "Quantifying recombination mechanisms through optical characterization"
                          : selectedStep.id === "injection-behavior"
                            ? "Validating optical analysis under electrical injection conditions"
                            : selectedStep.id === "stability-environmental"
                              ? "Assessing device resilience under operational and extreme conditions"
                              : "Correlating performance changes with structural evolution"}
                    </p>
                  </div>
                </div>

                {/* Dynamic Content */}
                {renderModal()}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
